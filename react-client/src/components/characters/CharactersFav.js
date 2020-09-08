import React, { Fragment, useState, useEffect } from 'react';
import CharactersCard from './CharactersCard';
import axios from 'axios';
import { CharacterContainer } from '../base/CharacterContainer';

const CharactersFav = (props) => {
  //Axios All could make the whole request fail
  let favChars = JSON.parse(localStorage.getItem('favChars'));
  const [chars, setChars] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      let responses = [];
      favChars.forEach(async (charid) => {
        const response = await axios(
          `http://localhost:5000/api/characterid/${charid}`
        );
        responses = [...responses, response.data.data.results[0]];
        setChars([...responses]);
      });
    };
    fetchData();
  }, []);
  //You need to send in character .name char.id   .thumbnail.path
  //for that .data.data.results[0]
  return chars === undefined || chars === [] ? (
    <Fragment>
      <h1>Waiting for data Im in the favorites</h1>
    </Fragment>
  ) : (
    <Fragment>
      <CharacterContainer>
        {chars.map((character) => (
          <CharactersCard character={character} key={character.id} />
        ))}
      </CharacterContainer>
    </Fragment>
  );
};

export default CharactersFav;
