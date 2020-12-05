import React, { useState } from 'react';
import { upload } from '../../services/imageService';
import Image from '../images/Image';

const ImageForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageId, setImageId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    console.log(data);
    console.log(data.success);
    console.log(data.data);

    if (data.success) {
      setSuccess(true);
      setError(null);
      setImageId(data?.data?._id);
    } else {
      setError(data.data);
      setSuccess(false);
    }
  };

  return (
    <>
      {success && <p>Bilde ble lastet opp!</p>}
      {error && <p>{error}</p>}
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(event) => {
            console.log(event);
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <button type="submit">Last opp bilde</button>
      </form>
      {imageId && <Image imageId={imageId} height="200px" />}
    </>
  );
};

export default ImageForm;
