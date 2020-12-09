import request from 'supertest';
import { app } from '../../src/app.js';
import { EMAIL_REGEX, OBJECT_ID_REGEX } from '../../src/constants/regexes.js';
import { connectDatabase, closeDatabase, clearDatabase } from '../config/db.js';
import { createArticle, createAuthor, createCategory, createUser } from '../utils/creators.js';

const BASE_URL = process.env.BASEURL;

let adminRes;
let token;

let userPayload;
let articlePayload;

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

  const user = await createUser(app, userPayload);
  token = user.token;

  const author = await createAuthor(app, 'Author', 'Author');
  const category = await createCategory(app, token, 'Category');

  articlePayload = {
    title: 'Title',
    ingress: 'Ingree',
    content: 'content',
    author: author._id,
    category: category._id,
  };
});

afterAll(async () => {
  await closeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});

describe('Create', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should return success and a new article', async () => {
    const articleRes = await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload);

    const { success, data } = articleRes.body;

    expect(success).toBe(true);
    expect(data.public).toBe(false);
    expect(data.title).toEqual(articlePayload.title);
    expect(data.ingress).toEqual(articlePayload.ingress);
    expect(data.content).toEqual(articlePayload.content);
    expect(data.author).toEqual(articlePayload.author);
    expect(data.category).toEqual(articlePayload.category);
    expect(data._id).toMatch(OBJECT_ID_REGEX);
  });
});
