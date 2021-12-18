/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
const List = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
`;

const Box = ({ background, left, top }) => {
  const [warning, setWarning] = useState(false);
  left = left - 80;
  top = top - 80;
  useEffect(() => {
    if (left < 0 || top < 0 || left > 1100 || top > 510) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [left, top]);

  return (
    <>
      <List
        css={css`
          background: ${background};
          left: ${left}px;
          top: ${top}px;
        `}
      />
      {warning ? (
        <div
          css={css`
            text-align: center;
            font-size: 4em;
            color: #dd2c00;
          `}
        >
          Do not overflow this area
        </div>
      ) : null}
    </>
  );
};

export default Box;
