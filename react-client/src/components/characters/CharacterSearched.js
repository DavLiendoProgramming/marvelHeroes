import React, { Fragment, useState, useEffect } from 'react';
import CharactersCard from './CharactersCard';
import axios from 'axios';
import styled from 'styled-components';

const CharacterContainer = styled.div`
  padding: 74px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 36px;
`;
const CharacterSearched = ({ input }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/character',
        data: { name: input },
      });
      setData({ data: response.data });
    };
    fetchData();
  }, []);
  return data === undefined || data === {} ? (
    <Fragment>
      <h1>No results</h1>
    </Fragment>
  ) : (
    <Fragment>
      <CharacterContainer>
        {console.log(data.data, 'im the data you want')}
        {data.data.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))}
      </CharacterContainer>
    </Fragment>
  );
};

export default CharacterSearched;
