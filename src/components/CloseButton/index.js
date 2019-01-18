import React from 'react';
import styled from 'styled-components';

import { isRoot } from 'src/lib';
import { themes } from 'src/themes';

const CloseButton = ({ history, location }) => {
  function goRoot() {
    if (!isRoot(location.pathname)) history.push('/');
  }
  return (
    <Div show={isRoot(location.pathname)} dark={isDark(location.pathname)}>
      <button onClick={goRoot} />
    </Div>
  );
};

export function isDark(name) {
  const theme = themes.find(theme => `/${theme.name}` === name);
  return theme && theme.isBackgroundDark;
}

export function getColor({ dark }) {
  return dark ? 'white' : 'rgb(22, 22, 22)';
}

const Div = styled.div`
  position: absolute;
  z-index: 10;
  button {
    opacity: ${({ show }) => (show ? 0.5 : 0)};
    font-size: 2em;
    width: 50px;
    background-color: transparent;
    outline-color: transparent;
    cursor: ${({ show }) => (show ? 'auto' : 'pointer')};
    border-radius: 1px;
    height: 50px;
    border: 0;
    transition: all 0.3s;
  }
  button:hover {
    opacity: 1;
  }
  button:before {
    content: '';
    position: absolute;
    left: 23px;
    top: 14px;
    transform: rotate(45deg);
    height: 23px;
    width: 2px;
    background: ${getColor};
  }
  button:after {
    content: '';
    position: absolute;
    left: 23px;
    top: 14px;
    transform: rotate(-45deg);
    height: 23px;
    width: 2px;
    background: ${getColor};
  }
`;

export default CloseButton;
