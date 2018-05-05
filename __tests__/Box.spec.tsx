import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Box from '../src/Box'

const setup = () => {
  const props = {
    active: false,
    onClick: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <Box {...props}/>
  )

  const output = renderer.getRenderOutput()

  return {
    props,
    output
  }
}

describe('Box', () => {
  it('should render', () => {
    const { output } = setup()
    expect(output.props.children).toBe('Box')
  })
})