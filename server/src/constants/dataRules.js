export const USER_FIRSTNAME = {
  type: String,
  required: true,
  min: [1, 'First name has to be at least 1 digit long'],
  max: [100, 'First name cannot be longer than 100 digits'],
};

export const USER_LASTNAME = {
  type: String,
  required: true,
  min: [1, 'Last name has to be at least 1 digit long'],
  max: [100, 'Last name cannot be longer than 100 digits'],
};

export const USER_EMAIL = {
  type: String,
  required: true,
  unique: [true, 'Invalid email'],
  match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'],
};

export const USER_PASSWORD = {
  type: String,
  required: true,
  max: [100, 'Password cannot be longer than 50 digits'],
  match: [
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    'Password has to contain at least one number, one lowercase, one uppercase and 6 digits',
  ],
};

export const USER_ROLES = {
  type: String,
  enum: {
    values: ['user', 'admin'],
    message: 'Role not picked',
  },
  default: 'user',
};
