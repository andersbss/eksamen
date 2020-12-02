const logErrors = (schema) => {
  const validationResult = schema.validate({}, { abortEarly: false });
  console.log(
    validationResult.error.details.map((errDetail) => errDetail.type),
    validationResult.error
  );
};

export default logErrors;
