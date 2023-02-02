import React, {useContext} from 'react';
import BoardStore from './BoardStore';
import {observer} from 'mobx-react';

const Toast = (props) => {
  return (
    <div style={{"width": "300px", "height": "50px", "backgroundColor": props.color, "color": "white"}}>
      <h4>{props.text}</h4>
    </div>
  )
}

const Problems = observer(() => {
  const { notifications } = useContext(BoardStore)
  return  (
    <div>
      {notifications.map(notification => {
        switch (notification){
          case 'row':
            return <Toast text="There are duplicate rows!" color="red"/>
          case 'col':
            return <Toast text="There are duplicate columns!!" color="red"/>
          case 'subGrid':
            return <Toast text="There are duplicate elements in a subGrid!!!" color="red"/>
          case 'done':
            return <Toast text="Congratulations, you finished" color="green"/>
          default:
            console.log("No errors found woohoo!")
        }
        return {}
      })}
    </div>
  )
})

export default Problems;
