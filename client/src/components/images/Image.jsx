import React, { useState } from 'react';
import { download } from '../../services/imageService';

const Image = ({ imageId }) => {
  const [error, setError] = useState(null);
  const [src, setSrc] = useState(null);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const downloadImage = async () => {
    const { data } = await download(imageId);
    console.log(data);
    setError(data);
    const img = await data.arrayBuffer().then((buffer) => {
      const base64Flag = 'data:image/jpeg;base64,';
      const imageStr = arrayBufferToBase64(buffer);
      return base64Flag + imageStr;
    });
    console.log(img);
    setSrc(img);
  };

  return (
    <>
      {src && <img alt="my" src={src} />}
      {error && <p>Feil ved henting av bilde</p>}
      <button type="button" onClick={downloadImage}>
        Vis bilde
      </button>
    </>
  );
};

export default Image;
