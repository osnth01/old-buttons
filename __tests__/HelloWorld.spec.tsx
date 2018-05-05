import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import HelloWorld from '../src/HelloWorld'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<HelloWorld />)
  const output = renderer.getRenderOutput()
  return output
}

describe('Hello', () => {
  it('should render', () => {
    const output = setup()
    expect(output.props.children).toBe('Hello World')
  })
})
