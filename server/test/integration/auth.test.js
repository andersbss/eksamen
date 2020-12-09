import request from 'supertest';
import validator from 'validator';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
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

describe('Auth', () => {
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
});
