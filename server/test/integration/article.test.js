import request from 'supertest';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';

const BASE_URL = process.env.BASEURL;

let adminRes;
let token;

let userPayload;
let articlePayload;

const createAuthor = async (firstName, lastName) => {
  await request(app).post(`${BASE_URL}/authors`).send({ firstName, lastName });
};

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

  articlePayload = {
    title: 'Nyeste dfsdf bndscf kjsdfksd fskdjfb sdkf skdf kj',
    ingress: 'Ingree ingress ingress ingress',
    content: 'content content',
    author: '5fc7ae4eb648972e7c092636',
    category: '5fc8b5a27fb1e842dcc419bf',
    public: true,
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

describe('Create', () => {});
