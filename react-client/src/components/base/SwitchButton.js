import React /*, { useContext }*/ from 'react';
import styled from 'styled-components';
// import { ThemeContext } from 'styled-components';

const Switch = styled.div`
  height: 100%;
  float: left;
  padding-top: 0.9%;
  margin-left: 10px;
  .tgl {
    display: none;
  }
  .tgl,
  .tgl:after,
  .tgl:before,
  .tgl *,
  .tgl *:after,
  .tgl *:before,
  .tgl + .tgl-btn {
    box-sizing: border-box;
  }
  .tgl::selection,
  .tgl:after::selection,
  .tgl:before::selection,
  .tgl *::selection,
  .tgl *:after::selection,
  .tgl *:before::selection,
  .tgl + .tgl-btn::selection {
    background: none;
  }
  .tgl + .tgl-btn {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  .tgl + .tgl-btn:after,
  .tgl + .tgl-btn:before {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
  }
  .tgl + .tgl-btn:after {
    left: 0;
  }
  .tgl + .tgl-btn:before {
    display: none;
  }
  .tgl:checked + .tgl-btn:after {
    left: 50%;
  }
  .tgl-light + .tgl-btn {
    background: #a8a8a8;
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
  }
  .tgl-light + .tgl-btn:after {
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;
  }
  .tgl-light:checked + .tgl-btn {
    background: #3e3e3e;
  }
`;
const SwitchButton = ({ setTheme, themeVal }) => {
  // const theme = useContext(ThemeContext);
  const themeToggler = () => {
    themeVal === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <Switch>
      <input
        className="tgl tgl-light"
        id="1"
        type="checkbox"
        onClick={themeToggler}
      />
      <label className="tgl-btn" htmlFor="1"></label>
    </Switch>
  );
};

export default SwitchButton;
