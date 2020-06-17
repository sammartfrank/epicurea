import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Burger = () => {
  const [active, setActive] = useState(false);

  const BarContainer = styled.div`
    display: inline-block;
    flex-direction: column;
    cursor: pointer;
  `;

  const rotate1 = keyframes`
    from {
      transform: rotate(0deg) translate(0px, 0px);
    }
    to {
      transform: rotate(45deg) translate(-8px, -8px);
    }
  `;

  const rotate2 = keyframes`
    from {
      transform: rotate(0deg) translate(0px, 0px);
    }
    to {
      transform: rotate(-45deg) translate(-9px, 6px);
    }
  `;
  const opacity = keyframes`
        from {
            opacity: 100
        } to {
            opacity: 0
        }
    `;

  const Bar2 = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ff0099;
    margin: 6px 0;
    animation-name: ${rotate1};
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
  `;

  const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: #ff0099;
    margin: 6px 0;
    transition: 0.4s;
    animation-name: ${rotate2};
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
  `;

  const MiddleBar = styled.div`
    width: 25px;
    height: 5px;
    background-color: #ff0099;
    margin: 6px 0;
    margin-left: 10px;
    animation-name: ${opacity};
    animation-duration: 0.4s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
  `;
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <BarContainer onClick={handleClick}>
      <Bar1 />
      <MiddleBar />
      <Bar2 />
    </BarContainer>
  );
};

export default Burger;
