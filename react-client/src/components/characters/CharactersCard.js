import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FavStar } from '../base/FavButton';
import CharactersModal from './CharactersModal';
const Card = styled.div`
  text-align: justify;
  padding: 24px;
  width: 256px;
  height: 380px;
  border-radius: 3px;
  cursor: pointer;
  background-image: url(${(props) => props.img + '/portrait_uncanny.jpg'});
  & h3 {
    color: white;
    position: absolute;
    text-align: start;
    max-width: 208px;
    font-size: 20px;
    transform: translate(0px, 288px);
    font-family: roboto, sans-serif;
  }
`;

const FavIcon = styled(FavStar)`
  transform: translate(160px, -160px);
  padding: 15px;
`;
//For image replace: character.thumbnail.path
// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73",
//   "extension": "jpg"
// portrait_uncanny
// }
const CharactersCard = ({ character }) => {
  // const showComics = () => {
  const useToggle = (initial) => {
    const [open, setOpen] = useState(initial);
    return [open, useCallback(() => setOpen((status) => !status))];
  };
  const [open, toggle] = useToggle(false);
  return character === undefined ? (
    ''
  ) : (
    <Card onClick={() => toggle()} img={character.thumbnail.path}>
      <FavIcon>
        <polygon
          points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
 62,24 44,38 52,62 "
        ></polygon>
      </FavIcon>
      <h3> {character.name} </h3>
      <CharactersModal open={open} toggle={toggle} character={character} />
      {/* <CharactersComics comicsView={comicsView} /> */}
    </Card>
  );
};

export default CharactersCard;
