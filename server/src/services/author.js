import Author from '../models/author.js';

export const getAuthorById = (id) => Author.findById(id);

export const createAuthor = (author) => Author.create(author);

export const getAllAuthors = () => Author.find();
