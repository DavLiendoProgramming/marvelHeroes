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
const ComicImage = styled.img.attrs((props) => ({
  src: props.img + '.jpg',
}))``;
const ComicInfo = styled.div`
  text-align: left;
  font-family: sans-serif;
  font-size: 25px;
  & h1 {
    font-size: 25px;
    margin-bottom: 40px;
  }
  & h2,
  h3 {
    font-size: 18px;
  }
  h3 {
    color: grey;
  }
`;
const ComicView = ({ input }) => {
  console.log(input, 'im trying to be the input');
  console.log(input.split('/')[5], 'i should be the id');
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log('hi input, get hereplease', input);
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/comic',
        data: {
          id: input.split('/')[5],
        },
      });
      setData({ data: response.data });
    };
    fetchData();
  }, []);
  console.log('im the data for the comic', data);
  return input === undefined || input === '' || data === undefined ? (
    <h1>
      Write something in the search bar either an Id or a whole comic issue link
      ( only links of the form
      https://www.marvel.com/comics/issue/70718/the_amazing_spider-man_2018_22){' '}
    </h1>
  ) : data.data.error ? (
    'error : 404'
  ) : (
    <Viewer>
      <ComicImage img={data.data.results[0].thumbnail.path} />
      <ComicInfo>
        <h1>{data.data.results[0].title}</h1>
        <h2>Published:{data.data.results[0].dates[0].date}</h2>
        {data.data.results[0].creators.items.map((creator) => (
          <div>
            <h2>
              {creator.role}:{creator.name}{' '}
            </h2>
          </div>
        ))}
        <h3>{data.data.results[0].description}</h3>
      </ComicInfo>
    </Viewer>
  );
};

export default ComicView;
