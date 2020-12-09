import React, { useState, useEffect } from 'react';
import { download } from '../../services/imageService';

const Image = ({ imageId, width, height }) => {
  const [error, setError] = useState(null);
  const [src, setSrc] = useState(null);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  useEffect(() => {
    const downloadImage = async () => {
      const { data } = await download(imageId);
      if (data.type === 'image/jpeg' || data.type === 'image/png') {
        const img = await data.arrayBuffer().then((buffer) => {
          const base64Flag = 'data:image/jpeg;base64,';
          const imageStr = arrayBufferToBase64(buffer);
          return base64Flag + imageStr;
        });
        setSrc(img);
      } else {
        setError(data);
      }
    };
    downloadImage();
  }, [imageId]);

  return (
    <>
      {src && (
        <img alt="bilde" id={imageId} src={src} width={width} height={height} />
      )}
      {error && <p>Feil ved henting av bilde</p>}
    </>
  );
};

export default Image;
