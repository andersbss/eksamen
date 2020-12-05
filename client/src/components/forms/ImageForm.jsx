import React, { useState } from 'react';
import { upload } from '../../services/imageService';

const ImageForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [src, setSrc] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    console.log(data);
    console.log(data.success);
    console.log(data.data);

    if (data.success) {
      setSuccess(true);
      setError(null);
    } else {
      setError(data.data);
      setSuccess(false);
    }
  };

  return (
    <>
      {src && <img alt="my" src={src} />}
      {success && <p>Bilde ble lastet opp!</p>}
      {error && <p>{error}</p>}
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <label htmlFor="image">Last opp bilde</label>
        <input
          type="file"
          id="image"
          name="image"
          // image/*
          accept="image/*"
          onChange={(event) => {
            console.log(event);
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <button type="submit">Lagre</button>
      </form>
    </>
  );
};

export default ImageForm;
