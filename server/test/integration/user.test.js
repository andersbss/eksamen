import request from 'supertest';
import { app } from '../../src/app.js';
import { OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

beforeAll(async () => {
  await connectDatabase();
});

beforeEach(async () => {});

afterAll(async () => {
  await closeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});
