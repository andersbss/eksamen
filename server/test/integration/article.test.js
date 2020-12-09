import request from 'supertest';
import validator from 'validator';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {});

afterAll(async (done) => {
  await closeDatabase(done);
});

afterEach(async () => {
  await clearDatabase();
});
