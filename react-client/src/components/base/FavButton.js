import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
const FavStar = styled.svg.attrs((props) => ({
  fill: props.fill === 'on' ? props.starColor : 'transparent',
  stroke: props.starColor,
  strokeWidth: '2px',
  x: '0px',
  y: '0px',
  width: '64px',
  height: '64px',
  viewBox: '0 0 64 64',
  enableBackground: 'new 0 0 64 64',
}))`
  float: left;
  height: ${(props) => (props.icon ? '25px' : '100%')};
  padding: ${(props) => (props.icon ? '' : '10px')};
  cursor: pointer;
`;

const FavButton = () => {
  const starColor = '#a8a8a8';
  return (
    <Link to="/favorites">
      <FavStar starColor={starColor}>
        <polygon
          points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
           62,24 44,38 52,62 "
        />
      </FavStar>
    </Link>
  );
};

export { FavButton, FavStar };
