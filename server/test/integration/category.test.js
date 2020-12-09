import request from 'supertest';
import { app } from '../../src/app.js';
import { OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let adminRes;
let token;

let userPayload;

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {
  userPayload = {
    firstName: 'test',
    lastName: 'test',
    email: 'admin@admin.com',
    password: 'SecretPassword879',
    role: 'admin',
  };

  adminRes = await request(app).post(`${BASE_URL}/register`).send(userPayload);

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

  // eslint-disable-next-line jest/expect-expect
  it('should return error when title is invalid', async () => {
    await request(app)
      .post(`${BASE_URL}/categories`)
      .set('Cookie', `token=${token}`)
      .send()
      .expect(400, { success: false, data: ['Title is required'], status: 400 });

    await request(app)
      .post(`${BASE_URL}/categories`)
      .set('Cookie', `token=${token}`)
      .send({
        title: 'x'.repeat(10 * 10 * 10),
      })
      .expect(400, { success: false, data: ['Title cannot be longer than 50 characters'], status: 400 });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error if unauthorized', async () => {
    await request(app)
      .post(`${BASE_URL}/categories`)
      .send({ title: 'Category' })
      .expect(401, { success: false, data: 'No token', status: 401 });

    userPayload.role = 'user';
    userPayload.email = 'user@user.com';
    const userRes = await request(app).post(`${BASE_URL}/register`).send(userPayload);

    const userToken = userRes.body.data.token;

    await request(app)
      .post(`${BASE_URL}/categories`)
      .set('Cookie', `token=${userToken}`)
      .send({ title: 'Category' })
      .expect(403, { success: false, data: 'Unauthorized', status: 403 });
  });
});

describe('Get', () => {
  it('should return a list with categories', async () => {
    await request(app).post(`${BASE_URL}/categories`).set('Cookie', `token=${token}`).send({ title: 'Category' });

    const categoriesRes = await request(app).get(`${BASE_URL}/categories`);
    const { success, data } = categoriesRes.body;

    expect(success).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0].title).toEqual('Category');
  });
});
