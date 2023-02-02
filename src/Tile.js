import React, {useContext} from 'react';
import './style.css';
import {observer} from 'mobx-react';
import BoardStore from './BoardStore';

const Tile = observer((prop) => {
  const { handleTileChange } = useContext(BoardStore)

  const handleChange = (event) => {
    handleTileChange(event.target.value, prop.index)
  }
  return (
    <div>
      <input type="number" min="1" max="9" className='tile' placeholder={prop.value} disabled={prop.disabled} onChange={handleChange}/>
    </div>
  );
})

export default Tile;
