import React, { Fragment } from 'react';
import styled from 'styled-components';
const Navbar = styled.nav`
  background-color: #fff;
  width: 100%;
  height: 72px;
  background-color: white;
  box-shadow: 0 7px 15px -15px darkgrey;
  margin-bottom: 15px;
  padding: 7px;
`;
const Input = styled.input`
  height: 100%;
  width: 75%;
  font-size: 24px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  border: #dbdbdb;
  color: #a8a8a8;
  padding: 7px 33px;
  cursor: text;
  text-align: left;
  float: left;
  :placeholder {
    color: #a8a8a8;
    outline: none;
  }
  :focus {
    outline: none;
    color: #a8a8a8;
  }
`;
const NavIcon = styled.svg`
  fill: white;
  float: left;
  width: 9%;
  height: 100%;
`;
const NavFav = styled.svg`
  height: 100%;
  width: 10%;
  padding: 10px;
`;
const Header = () => {
  return (
    <Fragment>
      <Navbar>
        <NavIcon
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1000px"
          height="402.473px"
          viewBox="-215.19 -86.608 1000 402.473"
          enable-background="new -215.19 -86.608 1000 402.473"
        >
          <g>
            <rect
              x="-215.19"
              y="-86.608"
              fill="#ED1D24"
              width="1000"
              height="402.473"
            />
            <g>
              <path
                fill="#FFFFFF"
                d="M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915
			c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047
			L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449
			l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063
			l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32
			c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7
			V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417
			V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201
			 M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z"
              />
            </g>
          </g>
        </NavIcon>
        {/* < className="input-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <g stroke-width="2" stroke="#6c6c6c" fill="none">
              <path d="M11.29 11.71l-4-4" />
              <circle cx="5" cy="5" r="4" />
            </g>
          </svg> */}
        <Input type="text" placeholder="Buscar" />

        <NavFav
          fill="white"
          stroke="#A8A8A8"
          strokeWidth="3px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64px"
          height="64px"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
        >
          <polygon
            points="32,47 12,62 20,38 2,24 24,24 32,1 40,24 
         62,24 44,38 52,62 "
          />
        </NavFav>
      </Navbar>
    </Fragment>
  );
};

export default Header;
