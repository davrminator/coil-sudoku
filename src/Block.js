import React, { useContext } from 'react';
import Tile from './Tile';
import BoardStore from './BoardStore';
import {observer} from 'mobx-react';

const Row = observer((props) => {
  const { initial_state, current_state } = useContext(BoardStore)
  const elements = current_state[props.idx].map((element, colIndex) => {
    const isZero = element === 0
    const isDisabled = initial_state[props.idx][colIndex] !== 0
    return <Tile key={`[${props.idx}][${colIndex}]`} value={isZero ? "" : element} disabled={isDisabled} index={[props.idx, colIndex]}/>
  })
  return (
    <div key={"row" + props.idx} style={{"display":"flex"}}>
      {elements}
    </div>
  )
});

const Block = observer(() => {
  const { current_state } = useContext(BoardStore)
  return (
    <div className="Block">
      {current_state.map((row, idx) => {
        return <Row idx={idx}/>
      })}
    </div>
  );
})

export default Block;
