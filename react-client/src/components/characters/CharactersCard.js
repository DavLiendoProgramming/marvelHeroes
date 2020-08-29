import React from 'react';
import styled from 'styled-components';
import img from '../img/portrait_uncanny.jpg';
const Card = styled.div`
  width: 256px;
  height: 380px;
  padding: 20px;
  border-radius: 3px;
  cursor: pointer;
  background-image: url(${img});
  & h3 {
    float: bottom;
    font-size: 24px;
    transform: translateY(290px);
    color: #ffffff;
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
      <h3> {character.name} </h3>
    </Card>
  );
};

export default CharactersCard;
