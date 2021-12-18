/** @jsxImportSource @emotion/react */
import { useRef, useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Box from './Box';

const Draggable = ({ background }) => {
  const ref = useRef();
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const userPressed = useCallback((event) => {
    let target = event.target.className.split('-')[1];
    const children = [...ref.current.children];
    // eslint-disable-next-line array-callback-return
    children.map((el) => {
      let styleKey = el.className.split('-');
      if (target === styleKey[1]) {
        setStartX(event.clientX);
        setStartY(event.clientY);
        ref.current.addEventListener('pointermove', userMoved, {
          passive: true,
        });
        ref.current.addEventListener('pointerup', userEndMove, {
          passive: true,
        });
        ref.current.addEventListener('pointercancel', userEndMove, {
          passive: true,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    ref.current?.addEventListener('pointerdown', userPressed, {
      passive: true,
    });
  }, [userPressed]);
  const userMoved = (event) => {
    setDeltaX(event.clientX - startX);
    setDeltaY(event.clientY - startY);
  };
  const userEndMove = () => {
    ref.current.removeEventListener('pointermove', userMoved);
    ref.current.removeEventListener('pointerup', userEndMove);
    ref.current.removeEventListener('pointercancel', userEndMove);
  };

  return (
    <Container ref={ref}>
      <Box left={deltaX} top={deltaY} background={background} />
    </Container>
  );
};

export default Draggable;

const Container = styled.div`
  height: 100vh;
  touch-action: none;
`;
