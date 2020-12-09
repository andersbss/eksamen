import React, { useState } from 'react';
import FileDownload from 'js-file-download';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/buttons/Button';
import Jumbotron from '../../components/common/Jumbotron';
import StatisticsLayout from '../../layouts/StatisticsLayout';
import { download } from '../../services/fileService';

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
`;

const Statistics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const response = await download();
    setLoading(false);

    if (response?.status === 200 && response) {
      const date = new Date();
      FileDownload(
        response.data,
        `userlog-${
          date.getDay() + 1
        }-${date.getMonth()}-${date.getFullYear()}.csv`
      );
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Jumbotron headerText="Statistikk" top="70" bottom="0" />
      <StatisticsLayout>
        <StyledLink exact to="/topartikler">
          Mest leste artikler
        </StyledLink>
        <StyledLink exact to="/artikkelvisninger">
          Visninger per artikkel
        </StyledLink>
        <StyledLink exact to="/brukervisninger">
          Artikkelvisninger per bruker
        </StyledLink>
        <Button
          disabled={loading}
          onClick={handleDownload}
          content={loading ? 'Henter data...' : 'Last ned brukeraktivitet'}
          backgroundColor="blue"
        />
        {error && <p>Kunne ikke hente data, prøv igjen senere</p>}
      </StatisticsLayout>
    </>
  );
};

export default Statistics;
