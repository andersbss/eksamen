export default (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next);
};

// Hentet fra eksempel til foreleser. Leksjon 14.
