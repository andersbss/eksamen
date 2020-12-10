import mongoose, { Schema } from 'mongoose';

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: [1, 'First name has to be at least 1 digit long'],
    max: [100, 'First name cannot be longer than 100 characters'],
  },
  lastName: {
    type: String,
    required: true,
    min: [1, 'Last name has to be at least 1 digit long'],
    max: [100, 'Last name cannot be longer than 100 character'],
  },
});

const Author = mongoose.model('Author', AuthorSchema);

export default Author;
