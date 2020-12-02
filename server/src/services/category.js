import Category from '../models/category.js';

export const getCategoryById = (id) => Category.findById(id);

export const getAllCategories = () => Category.find();

export const getCategoryByTitle = (title) => Category.findOne({ title });

export const createCategory = (category) => Category.create(category);
