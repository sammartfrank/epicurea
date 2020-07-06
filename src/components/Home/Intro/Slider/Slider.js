import React, { useState, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import SliderContent from './SliderContent';

const SliderContainer = styled.div`
  border: 1px solid red;
  height: 100px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const getWidth = () => window.innerWidth;

const Slider = memo(({ slides, autoPlay }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  console.group('Slides');
  console.log('[firstSlide]', firstSlide);
  console.log('[secondSlide]', secondSlide);
  console.log('[lastSlide]', lastSlide);
  console.groupEnd();

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });
  const { translate, transition, activeSlide, _slides } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const smooth = (e) => {
      transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };
    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    let interval = null;

    if (autoPlay) {
      interval = setInterval(play, autoPlay * 1000);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
      if (autoPlay) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const smoothTransition = () => {
    let _slodes = [..._slides];
    // We're at the last slide.
    if (activeSlide === slides.length - 1) {
      _slodes = [slides[slides.length - 2], lastSlide, firstSlide];
      console.log('[power1]', _slides);
      return setState({
        ...state,
        _slodes,
        transition: 0,
        translate: getWidth(),
      });
    }
    // We're back at the first slide. Just reset to how it was on initial render
    if (activeSlide === 0) {
      _slodes = [lastSlide, firstSlide, secondSlide];

      console.log('[power2]', _slodes);

      return setState({
        ...state,
        _slodes,
        transition: 0,
        translate: getWidth(),
      });
    }

    // Create an array of the previous last slide, and the next two slides that follow it.\
    _slodes = slides.slice(activeSlide - 1, activeSlide + 2);
    console.log('[power3]', _slodes);

    return setState({
      ...state,
      _slodes,
      transition: 0,
      translate: getWidth(),
    });
  };

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });

  return (
    <SliderContainer>
      <SliderContent
        id="sliderContent"
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => {
          return <Slide width={getWidth()} key={_slide} content={_slide} />;
        })}
      </SliderContent>
    </SliderContainer>
  );
});

export default Slider;
