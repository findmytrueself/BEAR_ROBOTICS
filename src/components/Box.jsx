/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
const List = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
`;

const Box = ({ background, left, top }) => {
  left = left - 80;
  top = top - 80;
  return (
    <List
      css={css`
        background: ${background};
        left: ${left}px;
        top: ${top}px;
      `}
    />
  );
};

export default Box;
