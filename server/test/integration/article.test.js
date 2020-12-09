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
let author;
let category;

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

  author = await createAuthor(app, 'Author', 'Author');
  category = await createCategory(app, token, 'Category');

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

  // eslint-disable-next-line jest/expect-expect
  it('should return error when long or short', async () => {
    articlePayload.title = '';
    articlePayload.ingress = '';
    articlePayload.content = '';
    articlePayload.author = '';
    articlePayload.category = '';
    await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(400, {
        success: false,
        data: [
          'Title is required',
          'Ingress is required',
          'Content is required',
          'Author is required',
          'Category is required',
        ],
        status: 400,
      });

    articlePayload.title = 'x'.repeat(10 * 10 * 10);
    articlePayload.ingress = 'x'.repeat(20 * 20 * 20);
    articlePayload.content = 'x'.repeat(20 * 20 * 20);
    articlePayload.author = author._id;
    articlePayload.category = category._id;
    await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(400, {
        success: false,
        data: [
          'Title cannot be longer than 50 characters',
          'Ingress cannot be longer than 1000 characters',
          'Content cannot be longer than 3000 characters',
        ],
        status: 400,
      });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error if invalid object ids', async () => {
    articlePayload.author = 'Not a valid id';
    articlePayload.category = 'Not a valid id';

    await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(400, { success: false, data: ['Author id is not valid', 'Category id is not valid'], status: 400 });

    articlePayload.author = 'ffffffffffffffffffffffff';
    articlePayload.category = 'ffffffffffffffffffffffff';

    await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(404, { success: false, data: 'Author not found', status: 404 });
  });
});

describe('Get', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should return success with all public articles', async () => {
    articlePayload.public = true;
    await request(app).post(`${BASE_URL}/articles`).set('Cookie', `token=${token}`).send(articlePayload);
    const publicArticlesRes = await request(app).get(`${BASE_URL}/articles`);

    const { success, data } = publicArticlesRes.body;

    expect(publicArticlesRes.status).toEqual(200);
    expect(success).toBe(true);
    expect(data.data).toHaveLength(1);
    expect(data.totalPages).toEqual(1);
    expect(data.currentPage).toEqual(1);
    expect(data.data[0].public).toBe(true);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return success wit all private articles', async () => {
    await request(app).post(`${BASE_URL}/articles`).set('Cookie', `token=${token}`).send(articlePayload);
    const privateArticlesRes = await request(app).get(`${BASE_URL}/articles`).set('Cookie', `token=${token}`);

    const { success, data } = privateArticlesRes.body;

    expect(privateArticlesRes.status).toEqual(200);
    expect(success).toBe(true);
    expect(data.data).toHaveLength(1);
    expect(data.totalPages).toEqual(1);
    expect(data.currentPage).toEqual(1);
    expect(data.data[0].public).toBe(false);
  });

  it('should return no private articles when user is not logged in', async () => {
    await request(app).post(`${BASE_URL}/articles`).set('Cookie', `token=${token}`).send(articlePayload);
    const privateArticlesRes = await request(app).get(`${BASE_URL}/articles`);

    const { success, data } = privateArticlesRes.body;

    expect(privateArticlesRes.status).toEqual(200);
    expect(success).toBe(true);
    expect(data.data).toHaveLength(0);
    expect(data.totalPages).toEqual(1);
    expect(data.currentPage).toEqual(1);
  });
});

describe('Update', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should return success with an updated article', async () => {
    const initialArticleRes = await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload);

    const newAuthor = await createAuthor(app, 'Author2', 'Author2');
    const newCategory = await createCategory(app, token, 'Category2');

    articlePayload.title = 'Updated';
    articlePayload.ingress = 'Updated';
    articlePayload.content = 'Updated';
    articlePayload.author = newAuthor._id;
    articlePayload.category = newCategory._id;
    const updatedArticleRes = await request(app)
      .put(`${BASE_URL}/articles/${initialArticleRes.body.data._id}`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload);

    const { success, data } = updatedArticleRes.body;

    expect(updatedArticleRes.status).toEqual(200);
    expect(success).toBe(true);
    expect(data.title).toEqual('Updated');
    expect(data.ingress).toEqual('Updated');
    expect(data.ingress).toEqual('Updated');
    expect(data.author).toEqual(newAuthor._id);
    expect(data.category).toEqual(newCategory._id);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when missing inputs', async () => {
    const initialArticleRes = await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload);

    await request(app)
      .put(`${BASE_URL}/articles/${initialArticleRes.body.data._id}`)
      .set('Cookie', `token=${token}`)
      .expect(400, {
        success: false,
        data: [
          'Title is required',
          'Ingress is required',
          'Content is required',
          'Author is required',
          'Category is required',
        ],
        status: 400,
      });
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when article is not found', async () => {
    await request(app)
      .put(`${BASE_URL}/articles/badId`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(404, { success: false, data: 'Resource not found. Invalid _id', status: 404 });

    await request(app)
      .put(`${BASE_URL}/articles/ffffffffffffffffffffffff`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload)
      .expect(404, { success: false, data: 'Article not found', status: 404 });
  });
});

describe('Delete', () => {
  it('should return no articles and deleted article', async () => {
    const newArticleRes = await request(app)
      .post(`${BASE_URL}/articles`)
      .set('Cookie', `token=${token}`)
      .send(articlePayload);

    const deletedArticleRes = await request(app)
      .delete(`${BASE_URL}/articles/${newArticleRes.body.data._id}`)
      .set('Cookie', `token=${token}`);
    const { success: deletedSuccess, data: deletedData } = deletedArticleRes.body;

    const privateArticlesRes = await request(app).get(`${BASE_URL}/articles`).set('Cookie', `token=${token}`);
    const { data: allData } = privateArticlesRes.body;

    expect(deletedArticleRes.status).toEqual(200);
    expect(deletedSuccess).toBe(true);
    expect(deletedData.title).toEqual(articlePayload.title);
    expect(deletedData.ingress).toEqual(articlePayload.ingress);
    expect(deletedData.content).toEqual(articlePayload.content);
    expect(deletedData.category).toEqual(articlePayload.category);
    expect(deletedData.author).toEqual(articlePayload.author);
    expect(allData.data).toHaveLength(0);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should return error when article is not found', async () => {
    await request(app)
      .delete(`${BASE_URL}/articles/badId`)
      .set('Cookie', `token=${token}`)
      .expect(404, { success: false, data: 'Resource not found. Invalid _id', status: 404 });

    await request(app)
      .delete(`${BASE_URL}/articles/ffffffffffffffffffffffff`)
      .set('Cookie', `token=${token}`)
      .expect(404, { success: false, data: 'Article not found', status: 404 });
  });
});
