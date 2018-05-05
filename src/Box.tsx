import * as React from 'react'
import { MouseEvent, SFC } from 'react'
import './Box.css'

type Props = { onClick(e: MouseEvent<HTMLElement>): void }

const Box: SFC<Props> = ({ onClick: handleClick}) => (
  <div className="Box" onClick={handleClick}>Box</div>
)

export default Box