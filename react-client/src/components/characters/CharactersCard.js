import React from 'react';
import styled from 'styled-components';
import img from '../img/portrait_uncanny.jpg';
import FavButton from '../base/FavButton';
const Card = styled.div`
  width: 256px;
  height: 380px;
  padding: 20px;
  border-radius: 3px;
  cursor: pointer;
  background-image: url(${img});
  & h3 {
    font-size: 20px;
    transform: translateY(265px);
    color: #ffffff;
    font-family: roboto, sans-serif;
  }
`;

//For image replace: character.thumbnail.path
// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73",
//   "extension": "jpg"
// portrait_uncanny
// }
const CharactersCard = ({ character }) => {
  console.log(character);
  return character === undefined ? (
    ''
  ) : (
    <Card>
      <FavButton icon>
        <polygon
          points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
         62,24 44,38 52,62 "
        />
      </FavButton>
      <h3> {character.name} </h3>
    </Card>
  );
};

export default CharactersCard;
