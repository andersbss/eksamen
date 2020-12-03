import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.main`
  width: 70%;
`;

const StyledForm = styled.form`
  margin: auto;
`;

const initialFormData = Object.freeze({
  tittel: '',
  ingress: '',
  innhold: '',
  dato: '',
  kategori: '',
  forfatter: '',
});

// tittel, ingress, innhold(textarea), dato, forfatter(nedtrekksliste), kategori(nedtrekksliste)
const ArticleForm = () => {
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <label>
          Tittel
          <input
            type="text"
            name="tittel"
            placeholder="Tittel"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ingress
          <input
            type="text"
            name="ingress"
            placeholder="Ingress"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Innhold
          <textarea
            name="innhold"
            placeholder="Innhold"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Dato
          <input
            type="date"
            name="dato"
            placeholder="Dato"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Kategori
          <select name="kategori" onChange={handleChange}>
            <option value="Kategori1">Kategori1</option>
            <option value="Kategori2">Kategori2</option>
            <option value="Kategori3">Kategori3</option>
          </select>
        </label>
        <br />
        <label>
          Forfatter
          <select name="forfatter" onChange={handleChange}>
            <option value="Lars Larsen">Lars Larsen</option>
            <option value="Gunn Gundersen">Gunn Gundersen</option>
            <option value="Simen Simensen">Simen Simensen</option>
          </select>
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ArticleForm;
