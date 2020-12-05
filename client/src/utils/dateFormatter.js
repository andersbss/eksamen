const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

export default formatDate;
