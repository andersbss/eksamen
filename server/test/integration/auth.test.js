import request from 'supertest';
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
  // eslint-disable-next-line jest/expect-expect
  it('should return success and a new user including valid jwt', async () => {
    const { success, data } = userRes.body;
    const { email, firstName, lastName, role } = data.user;

    console.log(userRes.body);

    expect(userRes.status).toBe(201);
    expect(success).toBe(true);
    expect(email).toMatch(EMAIL_REGEX);
    expect(email).toEqual(userPayload.email);
    expect(firstName).toEqual(userPayload.firstName);
    expect(lastName).toEqual(userPayload.lastName);
    expect(data.user.password).toEqual(undefined);
    expect(data.token).toMatch(OBJECT_ID_REGEX);
  });
});
