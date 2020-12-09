import request from 'supertest';
import validator from 'validator';
import { app } from '../../src/app.js';
import { EMAIL_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let userPayload;
let userRes;

const resetUserPayLoad = (emailParam = 'test@test.com') => {
  userPayload = {
    firstName: 'test',
    lastName: 'test',
    email: emailParam,
    password: 'SecretPassword879?',
  };
};

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {
  resetUserPayLoad();
  userRes = await request(app).post(`${BASE_URL}/register`).send(userPayload);
});

afterAll(async (done) => {
  await closeDatabase(done);
});

afterEach(async () => {
  await clearDatabase();
});

describe('Register', () => {
  it('should return success and a new user including valid jwt', async () => {
    const { success, data } = userRes.body;
    const { email, firstName, lastName, role } = data.user;

    expect(userRes.status).toBe(201);
    expect(success).toBe(true);
    expect(email).toMatch(EMAIL_REGEX);
    expect(email).toEqual(userPayload.email);
    expect(firstName).toEqual(userPayload.firstName);
    expect(lastName).toEqual(userPayload.lastName);
    expect(role).toEqual('user');
    expect(data.user.password).toEqual(undefined);
    expect(validator.isJWT(data.token)).toEqual(true);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when name is invalid', async () => {
    userPayload.email = 'test1@test.com';
    userPayload.lastName = '';
    userPayload.firstName = '';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['First name is required', 'Last name is required'], status: 400 });

    userPayload.email = 'test2@test.com';
    userPayload.lastName =
      'ThisNameIsWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayToLong';
    userPayload.firstName =
      'ThisNameIsWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayToLong';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, {
        success: false,
        data: ['First name cannot be longer than 100 characters', 'Last name cannot be longer than 100 characters'],
        status: 400,
      });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error if email is invalid', async () => {
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: 'Duplicate value', status: 400 });

    delete userPayload.email;
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Email is required'], status: 400 });

    userPayload.email = 'invalidEmail';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Invalid email'], status: 400 });

    userPayload.email = 'invalidEmail';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Invalid email'], status: 400 });

    userPayload.email = 'x'.repeat(10 * 10 * 10);
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Invalid email'], status: 400 });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when password is invalid', async () => {
    userPayload.password = '';
    userPayload.email = 'test1@test.com';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['"password" is not allowed to be empty'], status: 400 });

    userPayload.password = 'x1';
    userPayload.email = 'test2@test.com';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Password has to be at least 3 characters'], status: 400 });

    userPayload.password = 'NoDigit';
    userPayload.email = 'test3@test.com';
    await request(app)
      .post(`${BASE_URL}/register`)
      .send(userPayload)
      .expect(400, { success: false, data: ['Password has to include at least 1 digit'], status: 400 });
  });
});

describe('Login', () => {
  it('should return success with user credentials and a jwt', async () => {
    const response = await request(app)
      .post(`${BASE_URL}/login`)
      .send({ email: userPayload.email, password: userPayload.password });

    const { success, data } = response.body;

    expect(success).toBe(true);
    expect(response.status).toBe(201);
    expect(data.user.email).toEqual(userPayload.email);
    expect(validator.isJWT(data.token)).toBe(true);
    expect(data.user.password).toEqual(undefined);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when not matching email and password or user not found', async () => {
    await request(app)
      .post(`${BASE_URL}/login`)
      .send({ email: 'not@existing'.com, password: userPayload.password })
      .expect(404, { success: false, data: 'Failed to login, user not found', status: 404 });

    await request(app)
      .post(`${BASE_URL}/login`)
      .send({ email: userPayload.email, password: 'NotMatching123' })
      .expect(404, { success: false, data: 'Failed to login, user not found', status: 404 });
  });
});

describe('Logout', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should return success when logging out', async () => {
    await request(app).post(`${BASE_URL}/logout`).expect(200, { success: true, data: 'Logged out', status: 200 });
  });
});
