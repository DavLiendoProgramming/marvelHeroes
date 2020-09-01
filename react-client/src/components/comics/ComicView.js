import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const Viewer = styled.div`
  padding: 74px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 0px;
`;
const ComicView = ({ input }) => {
  console.log(input);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('http://localhost:5000/api');
      setData({ data: response.data });
    };
    fetchData();
  }, []);
  return (
    <Viewer>
      <img src="" alt="" />
      <div className="comic_infor"></div>
    </Viewer>
  );
};

export default ComicView;
