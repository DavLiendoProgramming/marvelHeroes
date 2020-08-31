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
const CharactersFav = (props) => {
  // console.log(props);
  const [data, setData] = useState();
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios('http://localhost:5000/api');
  //       setData({ data: response.data.results });
  //     };
  //     fetchData();
  //   }, []);
  return data === undefined || data === {} ? (
    <Fragment>
      <h1>Waiting for data Im in the favorites</h1>
    </Fragment>
  ) : (
    <Fragment>
      <CharacterContainer>
        {/* {data.data.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))} */}
      </CharacterContainer>
    </Fragment>
  );
};

export default CharactersFav;
