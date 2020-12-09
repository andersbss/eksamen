const validate = (inputs) => {
  const { title, ingress, content, category, author } = inputs;
  const errors = {};

  if (!title?.replace(/\s/g, '')) errors.title = 'Fyll inn tittel';

  if (!ingress?.replace(/\s/g, '')) errors.ingress = 'Fyll inn ingress';

  if (!content?.replace(/\s/g, '')) errors.content = 'Fyll inn innhold';

  if (!category?.replace(/\s/g, '')) errors.category = 'Velg en kategori';

  if (!author?.replace(/\s/g, '')) errors.author = 'Velg en forfatter';

  return errors;
};

export default validate;
