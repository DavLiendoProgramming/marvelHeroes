import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  text-align: left;
  max-height: 345px;
  overflow-y: auto;
  margin-top: 10px;
`;

const ComicWrapper = styled.div`
  margin-top: 10px;
  height: 100px;
  & div {
    margin-left: 10px;
    transform: translateX(16px);
  }
  & div h2 {
    color: grey;

    font-size: 14px;
    display: inline-block;
  }
  & div h3 {
    color: #a8a8a8;
    font-size: 12px;
    font-weight: 500;
    max-width: 250px;
    margin-top: 5px;
    max-height: 60px;
    overflow: hidden;
  }
`;

const ComicImage = styled.img.attrs((props) => ({
  src: props.img + '/standard_medium.jpg',
}))`
  float: left;
  height: 85px;
  width: 85px;
  border-radius: 5px;
`;

const ComicDescription = styled.h3`
  font-size: 14px;
  font-weight: 300;
  width: 300px;
  float: right;
  margin-top: 5px;
  transform: translate(-10px, 1.5px);
`;

const ComicMin = ({ comics, name }) => {
  console.log(comics, 'im the modals comic');
  return comics === undefined || comics.data.error ? (
    ' '
  ) : (
    <ListWrapper>
      {console.log(comics, 'dude, you in')}
      {comics.data.map((comic) => (
        <ComicWrapper key={comic.id}>
          <ComicImage img={comic.images[0].path} />
          <div>
            <h2>{name}</h2>
            {comic.description === null ? (
              <h3>No description Available </h3>
            ) : (
              <h3>{comic.description}</h3>
            )}
          </div>
        </ComicWrapper>
      ))}
    </ListWrapper>
  );
};

export default ComicMin;
