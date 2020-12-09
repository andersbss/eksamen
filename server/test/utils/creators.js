import request from 'supertest';

const BASE_URL = process.env.BASEURL;

export const createAuthor = async (app, firstName, lastName) => {
  const res = await request(app).post(`${BASE_URL}/authors`).send({ firstName, lastName });
  return res.body.data;
};

export const createCategory = async (app, token, title) => {
  const res = await request(app).post(`${BASE_URL}/categories`).set('Cookie', `token=${token}`).send({ title });
  return res.body.data;
};

export const createUser = async (app, payload) => {
  const res = await request(app).post(`${BASE_URL}/register`).send(payload);
  return res.body.data;
};

export const createArticle = async (app, token, payload) =>
  request(app).post(`${BASE_URL}/articles`).set('Cookie', `token=${token}`).send(payload);
