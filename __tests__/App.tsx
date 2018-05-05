import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import App from '../src/App'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('Hello', () => {
  it('should render', () => {
    const output = setup()
    expect(output.props.children).toBe('Hello World')
  })
})