import React from 'react';
import Draggable from './components/Draggable';

const boxColor = [
  '#82b1ff',
  '#ea80fc',
  '#ff80ab',
  '#b388ff',
  '#ffe57f',
  '#ccff90',
];

function App() {
  return <Draggable background={boxColor[2]} />;
}

export default App;
