import React from 'react';
import Title from './Title';
import Block from './Block';
import Problems from './Problems';
import CheckerButton from './CheckerButton';

function App() {
  return (
    <div className="App">
      <Title title="Sudoku For Coil"/>
      <Problems />
      <CheckerButton/>
      <br/><br/>
      <Block />

    </div>
  );
}

export default App;
