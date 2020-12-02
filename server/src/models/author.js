import mongoose, { Schema } from 'mongoose';
import { AUTHOR_FIRSTNAME, AUTHOR_LASTNAME } from '../constants/dataRules';

const AuthorSchema = new Schema({
  firstName: AUTHOR_FIRSTNAME,
  lastName: AUTHOR_LASTNAME,
});

const Author = mongoose.model('Author', AuthorSchema);

export default Author;
