import * as React from 'react'
import { Component, MouseEvent } from 'react'
import Box from './Box'
import './App.css'

type BoxState = {
  id: number
  active: boolean
}
type AppState = {
  boxes: BoxState[]
}

const initialState:AppState = {
  boxes: []
}
for (let i = 0; i < 9; i++) {
  initialState.boxes.push({
    id: i,
    active: false
  })
}

type State = Readonly<typeof initialState>
class App extends Component<object, State> {

  readonly state: State = initialState

  render() {
    const { boxes } = this.state

    return (
      <div className="App">
        <h1>Old Buttons</h1>
        <div className="wrapper">
          {boxes.map(box => {
            return (
              <Box
                key={box.id}
                onClick={() => this.handleClick2(box.id)}
                active={box.active}
              />
            )
          })}
        </div>
      </div>
    )
  }

  private handleClick2 = (e: number) => {
    const boxes = this.state.boxes

    const newBoxes = boxes.map(box => {
      if (box.id === e) {
        box.active = true
      } else {
        box.active = false
      }
      return box
    })

    this.setState({
      boxes: newBoxes
    })
  }
}

export default App
