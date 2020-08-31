import styled from 'styled-components';
const FavButton = styled.svg.attrs((props) => ({
  fill: props.fill ? props.fill : 'transparent',
  stroke: props.icon ? '#fff' : '#a8a8a8',
  strokeWidth: props.icon ? '3px' : '5px',
  x: '0px',
  y: '0px',
  width: '64px',
  height: '64px',
  viewBox: '0 0 64 64',
  enableBackground: 'new 0 0 64 64',
}))`
  float: left;
  height: ${(props) => (props.icon ? '25px' : '90%')};
  width: ${(props) => (props.icon ? '25px' : '10%')};
  padding: ${(props) => (props.icon ? '' : '10px')};
  transform: translateX(${(props) => (props.icon ? '185px' : '')}); ;
`;
export default FavButton;
