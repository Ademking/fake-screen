import React from 'react';
import styled from 'styled-components';
import dead from 'src/assets/dead.png';
import smile from 'src/assets/smile.png';
import win from 'src/assets/win.png';
import empty from 'src/assets/empty.png';
import open1 from 'src/assets/open1.png';
import open2 from 'src/assets/open2.png';
import open3 from 'src/assets/open3.png';
import open4 from 'src/assets/open4.png';
import open5 from 'src/assets/open5.png';
import open6 from 'src/assets/open6.png';
import open7 from 'src/assets/open7.png';
import open8 from 'src/assets/open8.png';
import flag from 'src/assets/flag.png';
import mine from 'src/assets/mine2.png';
import misFlagged from 'src/assets/misflagged.png';
import question from 'src/assets/question.png';

function MineSweeperView({
  ceils,
  className,
  changeCeilState,
  onReset,
  openCeil,
  mines,
  status,
  seconds,
}) {
  function remainMines() {
    return mines - ceils.filter(ceil => ceil.state === 'flag').length;
  }
  function statusFace() {
    switch (status) {
      case 'died':
        return <img alt="dead" src={dead} />;
      case 'won':
        return <img alt="win" src={win} />;
      default:
        return <img alt="smile" src={smile} />;
    }
  }
  return (
    <div className={className}>
      <div className="mine__top-bar">
        {['Game', 'Help'].map(text => (
          <div key={text} className="mine__top-bar__text">
            {text}
          </div>
        ))}
      </div>
      <section className="mine__content">
        <div className="mine__score-bar">
          <div className="mine__digits__outer">{remainMines()}</div>
          <button className="mine__face" onClick={() => onReset()}>
            {statusFace()}
          </button>
          {/* <button onClick={() => onReset('Beginner')}>Be</button>
          <button onClick={() => onReset('Intermediate')}>In</button>
          <button onClick={() => onReset('Expert')}>Ex</button> */}
          <div className="mine__digits__outer">{seconds}</div>
        </div>
        <div className="mine__content__inner">
          {status === 'died' ? (
            <DeadCeils ceils={ceils} />
          ) : (
            <Ceils
              ceils={ceils}
              onLeftClickCeil={openCeil}
              onRightClickCeil={changeCeilState}
            />
          )}
        </div>
      </section>
    </div>
  );
}
function getTextImg(index) {
  return [empty, open1, open2, open3, open4, open5, open6, open7, open8][index];
}
function Ceils({ ceils, onLeftClickCeil, onRightClickCeil }) {
  function renderContent(ceil) {
    const { state, minesAround } = ceil;
    switch (state) {
      case 'open':
        return <img alt="mines-around" src={getTextImg(minesAround)} />;
      case 'unknown':
        return <img alt="question" src={question} />;
      case 'flag':
        return <img alt="flag" src={flag} />;
      case 'die':
        return <img className="mine__die" alt="mine" src={mine} />;
      default:
        return null;
    }
  }

  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      state={ceil.state}
      index={index}
      onLeftClick={onLeftClickCeil}
      onRightClick={onRightClickCeil}
    >
      {renderContent(ceil)}
    </Ceil>
  ));
}

function DeadCeils({ ceils }) {
  function noop() {}
  function renderContent(ceil) {
    const { state, minesAround } = ceil;
    switch (state) {
      case 'open':
        if (minesAround < 0) return <img alt="mine" src={mine} />;
        else return <img alt="mines-around" src={getTextImg(minesAround)} />;
      case 'unknown':
        return <img alt="question" src={question} />;
      case 'flag':
        return <img alt="misFlagged" src={misFlagged} />;
      case 'die':
        return <img className="mine__die" alt="mine" src={mine} />;
      default:
        return null;
    }
  }
  return ceils.map((ceil, index) => (
    <Ceil
      key={index}
      state={ceil.state}
      index={index}
      onLeftClick={noop}
      onRightClick={noop}
    >
      {renderContent(ceil)}
    </Ceil>
  ));
}

function Ceil({ state, children, index, onLeftClick, onRightClick }) {
  function _onLeftClick() {
    onLeftClick(index);
  }
  function _onRightClick(e) {
    e.preventDefault();
    onRightClick(index);
  }
  function getLeftTopBorderStyle() {
    if (state === 'open' || state === 'die')
      return 'rgb(120, 120, 120) solid 1px';
    return 'rgb(245, 245, 245) solid 2px';
  }
  function getBottomRightBorderStyle() {
    if (state === 'open' || state === 'die') return 'transparent solid 0px';
    return 'rgb(120, 120, 120) solid 2px';
  }
  return (
    <div
      className="mine__ceil"
      onClick={_onLeftClick}
      style={{
        borderLeft: getLeftTopBorderStyle(),
        borderTop: getLeftTopBorderStyle(),
        borderRight: getBottomRightBorderStyle(),
        borderBottom: getBottomRightBorderStyle(),
      }}
      onContextMenu={_onRightClick}
    >
      {children}
    </div>
  );
}

export default styled(MineSweeperView)`
  .mine__top-bar {
    display: flex;
    height: 20px;
    padding: 5px;
    background-color: #dfded5;
  }
  .mine__top-bar__text {
    line-height: 100%;
    font-size: 11px;
    margin-right: 8px;
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 3.5px;
    background-color: rgb(180, 180, 180);
    padding: 5px;
  }
  .mine__score-bar {
    height: 34px;
    border-radius: 1px;
    border-top: rgb(120, 120, 120) solid 2px;
    border-left: rgb(120, 120, 120) solid 2px;
    border-right: rgb(245, 245, 245) solid 2px;
    border-bottom: rgb(245, 245, 245) solid 2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 7px 3px 4px;
  }
  .mine__digits__outer {
    background: black;
    width: 42px;
    height: 100%;
    color: red;
    border-width: 0 1px 1px 0;
    border-style: solid;
    border-color: #fff;
    font-size: 22px;
    line-height: 22px;
    text-align: right;
  }
  .mine__face {
    width: 25px;
    height: 25px;
    background-color: rgb(180, 180, 180);
    outline: none;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 16px);
    grid-template-rows: repeat(${({ rows }) => rows}, 16px);
    border-top: rgb(120, 120, 120) solid 3px;
    border-left: rgb(120, 120, 120) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
    font-size: 14px;
  }
  .mine__ceil {
    text-align: center;
    border-bottom: rgb(120, 120, 120) solid 2px;
    border-right: rgb(120, 120, 120) solid 2px;
    border-top: rgb(245, 245, 245) solid 2px;
    border-left: rgb(245, 245, 245) solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: relative;
  }
  .mine__die {
    background-color: red;
    width: 100%;
    height: 100%;
    line-height: 13px;
  }
`;
