import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { themes } from 'src/themes';
import Option from 'src/components/Options/Option';
import githubLogo from 'src/assets/github-logo.svg';
import { isStr } from 'src/lib';

const Options = ({ location, className }) => {
  return (
    <div className={className}>
      <header>
        <a href="https://github.com/ShizukuIchi/fake-screen">
          <span className="title">Fake Screen</span>
          <img className="logo" src={githubLogo} alt="github-logo" />
        </a>
      </header>
      <div className="grid">
        {themes.map(({ id, fullScreen, name, ...rest }) => (
          <Link
            className="area"
            key={id}
            to={{ pathname: `/${name}`, state: { fullScreen } }}
          >
            <Option
              name={name}
              {...rest}
              zoom={location.pathname.startsWith(`/${name}`)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default styled(Options)`
  height: 100%;
  position: absolute;
  width: 100%;
  overflow: auto;
  z-index: ${({ location }) => (isStr('/')(location.pathname) ? 1 : 0)};
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    filter: drop-shadow(rgba(61, 193, 211, 0.8) 1px 1px 1.5px);
    .title {
      color: #63cdda;
      text-align: center;
      font-size: 2em;
    }
    a {
      text-decoration: none;
    }
  }
  .logo {
    width: 2em;
    height: 2em;
    margin-left: 10px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 288px);
    grid-auto-rows: 162px;
    grid-gap: 40px 40px;
    justify-content: center;
  }
  .area {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
