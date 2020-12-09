import request from 'supertest';

const BASE_URL = process.env.BASEURL;

export const createAuthor = async (app, firstName, lastName) => {
  await request(app).post(`${BASE_URL}/authors`).send({ firstName, lastName });
};

export const createCategory = async (app, token, title) => {
  await request(app).post(`${BASE_URL}/categories`).set('Cookie', `token=${token}`).send({ title });
};

export const createUser = async (app, firstName, lastName, email, password, role) => {
  const res = await request(app).post(`${BASE_URL}/register`).send({ firstName, lastName, email, password, role });
  return res;
};
