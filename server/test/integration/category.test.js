import request from 'supertest';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let adminRes;
let token;

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {
  const payload = {
    firstName: 'test',
    lastName: 'test',
    email: 'admin@admin.com',
    password: 'SecretPassword879',
    role: 'admin',
  };

  adminRes = await request(app).post(`${BASE_URL}/register`).send(payload);

  token = adminRes.body.data.token;
});

afterAll(async () => {
  await closeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});

describe('Create', () => {
  it('should return success with a new category', async () => {
    const response = await request(app)
      .post(`${BASE_URL}/categories`)
      .set('Cookie', `token=${token}`)
      .send({ title: 'Category' });

    const { data, success } = response.body;

    expect(success).toBe(true);
    expect(response.status).toBe(201);
    expect(data.title).toEqual('Category');
    expect(data._id).toMatch(OBJECT_ID_REGEX);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when category already exist', async () => {
    await request(app).post(`${BASE_URL}/categories`).set('Cookie', `token=${token}`).send({ title: 'Category' });

    await request(app)
      .post(`${BASE_URL}/categories`)
      .set('Cookie', `token=${token}`)
      .send({ title: 'Category' })
      .expect(400, { success: false, data: 'Category already exist', status: 400 });
  });
});
