import React, { useReducer, useEffect, useRef } from 'react';
import Footer from './Footer';
import styled from 'styled-components';

import { defaultAppSettings } from './apps';
import Windows from './Windows';
import Icons from './Icons';

const initState = {
  apps: [],
  nextAppID: 0,
  focusing: 'window',
  icons: defaultAppSettings,
};
const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'ADD_APP':
      return {
        ...state,
        apps: [...state.apps, { ...action.payload, id: state.nextAppID }],
        nextAppID: state.nextAppID + 1,
        focusing: 'window',
      };
    case 'DEL_APP':
      return {
        ...state,
        apps: state.apps.filter(app => app.id !== action.payload),
        focusing:
          state.apps.length > 1
            ? 'window'
            : state.icons.find(icon => icon.isFocus)
            ? 'icon'
            : 'desktop',
      };
    case 'FOCUS_APP':
      const app = state.apps.find(app => app.id === action.payload);
      const apps = [...state.apps.filter(app => app.id !== action.payload)];
      return {
        ...state,
        apps: app ? [...apps, app] : apps,
        focusing: 'window',
      };
    case 'FOCUS_ICON':
      const icons = state.icons.map(icon => {
        if (icon.component === action.payload)
          return {
            ...icon,
            isFocus: true,
          };
        else
          return {
            ...icon,
            isFocus: false,
          };
      });
      return {
        ...state,
        focusing: 'icon',
        icons,
      };
    case 'FOCUS_DESKTOP':
      return {
        ...state,
        focusing: 'desktop',
        icons: state.icons.map(icon => ({
          ...icon,
          isFocus: false,
        })),
      };
    default:
      return state;
  }
};

function WinXP() {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(reducer, initState);
  function onClickApp(id) {
    dispatch({ type: 'FOCUS_APP', payload: id });
  }
  function onCloseApp(id) {
    // delete if is focus
    if (state.apps[state.apps.length - 1].id === id) {
      dispatch({ type: 'DEL_APP', payload: id });
    }
  }
  function onMouseDownIcon(payload) {
    dispatch({ type: 'FOCUS_ICON', payload });
  }
  function onDoubleClickIcon(payload) {
    dispatch({ type: 'ADD_APP', payload });
  }
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    function onMouseDown(e) {
      if (e.target !== target) return;
      dispatch({ type: 'FOCUS_DESKTOP' });
    }
    window.addEventListener('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);
  useEffect(() => {
    dispatch({ type: 'ADD_APP', payload: defaultAppSettings[1] });
  }, []);
  return (
    <Container ref={ref}>
      <Icons
        icons={state.icons}
        onMouseDown={onMouseDownIcon}
        onDoubleClick={onDoubleClickIcon}
        displayFocus={state.focusing === 'icon'}
      />
      <Windows
        apps={state.apps}
        onMouseDown={onClickApp}
        onCloseWindow={onCloseApp}
      />
      <Footer apps={state.apps} onClickApp={onClickApp} />
    </Container>
  );
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  font-family: 'Noto Sans', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url(https://i.imgur.com/Zk6TR5k.jpg) no-repeat center center fixed;
  background-size: cover;
  * {
    user-select: none;
  }
  .icon__test {
    width: 60px;
    margin: 60px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    &__text {
      width: 100%;
      font-size: 10px;
      color: white;
      text-shadow: 0.5px 0.5px 1px black;
      text-align: center;
    }
  }
  .button__test {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 0;
  }
`;

export default WinXP;
