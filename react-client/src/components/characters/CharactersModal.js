import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import ComicMin from './ComicMin';
// import PropTypes from "prop-types";

const ModalWrapper = styled.div`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  width: 440px;
  height: 460px;
  z-index: 10;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
`;
// const CloseButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   border: none;
//   background: transparent;
//   padding: 10px;
//   &:hover {
//     cursor: pointer;
//   }
// `;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
  }, [modalRoot.appendChild(el)]);
  useEffect(() => {
    return () => modalRoot.removeChild(el);
  });
  return createPortal(children, el);
};

const CharacterModal = ({ children, open, toggle, character }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:5000/api/character/comics',
        data: {
          id: character.id,
        },
      });
      setData({ data: response.data });
    };
    fetchData();
  }, []);

  return (
    <Portal>
      {open && (
        <ModalWrapper>
          <ModalCard>
            <h1>{character.name}</h1>
            {/* {children} */}
            <ComicMin comics={data} name={character.name} />
          </ModalCard>
          <Background onClick={() => toggle} />
        </ModalWrapper>
      )}
    </Portal>
  );
};

export default CharacterModal;
{
  /* 
Modal.propTypes = {  
 children: PropTypes.arrayOf(PropTypes.object).isRequired,
 toggle: PropTypes.func.isRequired,
 on: PropTypes.bool.isRequired
};  */
}
