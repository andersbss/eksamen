import mongoose, { Schema } from 'mongoose';
import { ARTICLE_CONTENT, ARTICLE_INGRESS, ARTICLE_TITLE } from '../constants/dataRules';

const ArticleSchema = new Schema({
  title: ARTICLE_TITLE,
  ingress: ARTICLE_INGRESS,
  content: ARTICLE_CONTENT,
});
