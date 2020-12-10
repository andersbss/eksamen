import React from 'react';
import { func, string, array, oneOfType, bool } from 'prop-types';
import styled from 'styled-components';
import Image from '../images/Image';
import StyledButton from '../styledComponents/StyledButton';

const StyledImageButton = styled(StyledButton)`
  width: 120px;
  height: 50px;
`;

const ImageForm = ({
  handleSubmit,
  onChange,
  error,
  success,
  imageId,
  disabledUpload,
}) => (
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
      <StyledImageButton type="submit" disabled={disabledUpload}>
        Last opp bilde
      </StyledImageButton>
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
