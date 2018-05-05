import * as React from 'react'
import { MouseEvent, SFC } from 'react'
import './Box.css'

type Props = {
  onClick(e: MouseEvent<HTMLElement>): void
  active: boolean
}

const Box: SFC<Props> = ({ onClick: handleClick, active}) => {
  const divStyle = {
    color: 'blue'
  }

  if (active) {
    divStyle.color = 'red'
  }
  return (
    <div
      className='Box'
      style={divStyle}
      onClick={handleClick}>
      Box
    </div>
  )
}

export default Box