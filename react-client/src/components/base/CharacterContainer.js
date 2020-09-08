// A grid system that contains 2 rows of 4 elements

import styled from 'styled-components';

const CharacterContainer = styled.div`
  padding: 74px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 36px;
`;

export { CharacterContainer };
