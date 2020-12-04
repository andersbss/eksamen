const inputValidation = (fieldName, value, length) => {
  if (value.trim() === '') {
    return `Fyll ut ${fieldName}`;
  }
  if (value.length > length) {
    return `${fieldName} kan ikke være lenger enn ${length} tegn`;
  }
  return false;
};

export default inputValidation;
