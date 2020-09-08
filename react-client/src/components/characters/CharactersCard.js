import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FavStar } from '../base/FavButton';
import CharactersModal from './CharactersModal';
const Card = styled.div`
  text-align: justify;
  width: 256px;
  height: 380px;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
`;
const CardImage = styled.img.attrs((props) => ({
  src: props.img + '/portrait_uncanny.jpg',
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  position: relative;
`;

const FavIconWrap = styled.div`
  position: relative;
  top: -375px;
  left: 190px;
`;
const FavIcon = styled(FavStar).attrs((props) => ({}))`
  max-width: 55px;
  max-height: 55px;
`;
const CharTittle = styled.div`
  color: white;
  position: absolute;
  text-align: start;
  max-width: 208px;
  font-size: 20px;
  transform: translate(20px, -65px);
  font-family: roboto, sans-serif;
`;
const CharactersCard = ({ character }) => {
  //color for the star
  const starColor = '#fff';
  //Toggling the modal
  const useToggle = (initial) => {
    const [open, setOpen] = useState(initial);
    return [open, useCallback(() => setOpen((status) => !status))];
  };
  const [open, toggle] = useToggle(false);

  //getting the star fill info
  const [fill, setFill] = useState('off');

  useEffect(() => {
    JSON.parse(localStorage.getItem('favChars')).includes(character.id)
      ? setFill('on')
      : setFill('off');
  });
  // Toggle the star of your dreams
  const clickStar = () => {
    let favChars = JSON.parse(localStorage.getItem('favChars'));
    if (favChars === null) {
      let favChars = [];
      favChars.push(character.id);
      localStorage.setItem('favChars', JSON.stringify(favChars));
      setFill('on');
    } else if (favChars.includes(character.id)) {
      favChars.splice(favChars.indexOf(character.id), 1);
      localStorage.setItem('favChars', JSON.stringify(favChars));
      setFill('off');
    } else {
      favChars.push(character.id);
      localStorage.setItem('favChars', JSON.stringify(favChars));
      setFill('on');
    }
  };
  return character === undefined ? (
    ''
  ) : (
    <Card>
      <CardImage onClick={() => toggle()} img={character.thumbnail.path} />
      <FavIconWrap onClick={clickStar}>
        <FavIcon fill={fill} starColor={starColor}>
          <polygon
            points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
 62,24 44,38 52,62 "
          ></polygon>
        </FavIcon>
      </FavIconWrap>
      <CharTittle>{character.name}</CharTittle>
      <CharactersModal open={open} toggle={toggle} character={character} />
    </Card>
  );
};

export default CharactersCard;
