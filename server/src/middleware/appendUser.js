const appendUser = (property) => (req, res, next) => {
  req.body[property] = req.user.id;
  next();
};

export default appendUser;
