import React from 'react';
import Image from '../images/Image';

const ImageForm = ({ handleSubmit, onChange, error, success, imageId }) => (
  <>
    {success && <p>Bilde ble lastet opp!</p>}
    {error && <p>{error}</p>}
    <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={onChange}
      />
      <button type="submit">Last opp bilde</button>
    </form>
    {imageId && <Image imageId={imageId} height="200px" />}
  </>
);

export default ImageForm;
