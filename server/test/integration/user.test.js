import expectCt from 'helmet/dist/middlewares/expect-ct';
import request from 'supertest';
import { app } from '../../src/app.js';
import { OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { imageController } from '../../src/controllers/index.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let adminRes;
let token;

const userPayload = {
  firstName: 'test',
  lastName: 'test',
  email: 'admin@admin.com',
  password: 'SecretPassword879',
  role: 'admin',
};

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {
  adminRes = await request(app).post(`${BASE_URL}/register`).send(userPayload);

  token = adminRes.body.data.token;
});

afterAll(async () => {
  await closeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});

describe('Get', () => {
  it('should return user without id and password when given token', async () => {
    const response = await request(app).get(`${BASE_URL}/me`).set('Cookie', `token=${token}`);

    const { success, data } = response.body;

    expect(1).toEqual(1);
    expect(success).toBe(true);
    expect(response.status).toEqual(200);
    expect(data.role).toEqual(userPayload.role);
    expect(data.firstName).toEqual(userPayload.firstName);
    expect(data.lastName).toEqual(userPayload.lastName);
    expect(data.email).toEqual(userPayload.email);
    expect(data._id).toEqual(undefined);
    expect(data.password).toEqual(undefined);
    expect(data.id).toEqual(null);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when not given token', async () => {
    await request(app).get(`${BASE_URL}/me`).expect(401, { success: false, data: 'No token', status: 401 });
  });
});
