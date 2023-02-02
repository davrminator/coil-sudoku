import React, { useContext } from 'react';
import BoardStore from './BoardStore';
import {observer} from 'mobx-react';

const CheckerButton = observer(() => {
  const {current_state, answer, addNotification, clearNotifications} = useContext(BoardStore)

  const noDuplicate = (board) => {
    for(let i=0; i < board.length; i++){
      const filtered = board[i].filter(elem => elem !== 0)
      const rowSet = new Set(filtered)
      if (rowSet.size !== filtered.length) return false
    }
    return true
  }

  const noDuplicateRow = () => {
    return noDuplicate(current_state)
  }

  const noDuplicateColumn = () => {
    const transposed = current_state[0].map((_, colIndex) => current_state.map(row => row[colIndex]));
    return noDuplicate(transposed)
  }

  const checkGrid = (rows, colums) => {
    let grid = []
    rows.forEach(i => {
      colums.forEach(j => {
        if(current_state[i][j] !== 0) grid.push(current_state[i][j])
      })
    });
    return grid.length === new Set(grid).size
  }

  const noDuplicateSubGrid = () => {
    const grid1 = [0,1,2]
    const grid2 = [3,4,5]
    const grid3 = [6,7,8]
    const result = checkGrid(grid1, grid1) && checkGrid(grid1, grid2) && checkGrid(grid1, grid3) &&
      checkGrid(grid2, grid1) && checkGrid(grid2, grid2) && checkGrid(grid2, grid3) &&
      checkGrid(grid3, grid1) && checkGrid(grid3, grid2) && checkGrid(grid3, grid3)
    return result
  }

  const checkCompleted = () => {
    return JSON.stringify(current_state) === JSON.stringify(answer)
  }

  const handleCheck = () => {
    clearNotifications()
    !noDuplicateRow() && addNotification("row")
    !noDuplicateColumn() && addNotification("col")
    !noDuplicateSubGrid() && addNotification("subGrid")
    checkCompleted() && addNotification("done")
  }


  return (
    <button onClick={handleCheck}>
      <h3>Check answers</h3>
    </button>
  );
})

export default CheckerButton;
