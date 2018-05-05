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
                onClick={this.handleClick}
              />
            )
          })}
        </div>
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLElement>) => {
    const boxes = this.state.boxes;
    console.log('I have been clicked!')
  }
}

export default App
