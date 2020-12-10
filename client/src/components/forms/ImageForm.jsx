import React from 'react';
import { func, string, array, oneOfType, bool } from 'prop-types';
import Image from '../images/Image';

const ImageForm = ({ handleSubmit, onChange, error, success, imageId }) => (
  <>
    {success && <p>Bilde ble lastet opp!</p>}
    {error && (
      <p>{`Opplasting feilet, prøv igjen. (${
        Array.isArray(error) ? error[0] : error
      })`}</p>
    )}
    <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={onChange}
      />
      <button type="submit">Last opp bilde</button>
    </form>
    {imageId && <Image imageId={imageId} height="200px" width="200px" />}
  </>
);

ImageForm.propTypes = {
  handleSubmit: func,
  onChange: func,
  success: bool,
  error: oneOfType([string, array]),
  imageId: string,
};

export default ImageForm;
