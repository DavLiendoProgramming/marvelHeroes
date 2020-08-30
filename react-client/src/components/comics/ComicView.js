import React from 'react';
import styled from 'styled-components';

const Viewer = styled.div`
  padding: 74px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 0px;
`;
const ComicView = () => {
  return (
    <Viewer>
      <img src="" alt="" />
      <div className="comic_infor"></div>
    </Viewer>
  );
};

export default ComicView;
