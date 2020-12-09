import request from 'supertest';
import validator from 'validator';
import { app } from '../../src/app.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let userPayload;

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

afterAll(async (done) => {
  await closeDatabase(done);
});

afterEach(async () => {
  await clearDatabase();
});
