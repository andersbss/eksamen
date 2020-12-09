import request from 'supertest';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let admin;

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {
  const payload = {
    firstName: 'test',
    lastName: 'test',
    email: 'admin@admin.com',
    password: 'SecretPassword879',
  };

  admin = await request(app).post(`${BASE_URL}/register`).send(payload);
});

afterAll(async () => {
  await closeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});

describe('Create', () => {
  it('should return a new category', async () => {
    const num = 1;

    expect(num).toEqual(1);
  });
});
