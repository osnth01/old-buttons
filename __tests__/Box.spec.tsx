import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Box from '../src/Box'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Box />)
  const output = renderer.getRenderOutput()
  return output
}

describe('Box', () => {
  it('should render', () => {
    const output = setup()
    expect(output.props.children).toBe('Box')
  })
})