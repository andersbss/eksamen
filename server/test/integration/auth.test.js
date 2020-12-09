import request from 'supertest';
import validator from 'validator';
import { app } from '../../src/app.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let userPayload;
let userRes;

const resetUserPayLoad = (emailParam = 'test@test.com') => {
  userPayload = {
    firstname: 'test',
    lastname: 'test',
    email: emailParam,
    password: '12345678',
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
  it('should return a new user including valid jwt', async () => {});
});
