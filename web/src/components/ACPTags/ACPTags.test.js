import { render } from '@redwoodjs/testing/web'

import AcpTags from './AcpTags'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AcpTags', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AcpTags />)
    }).not.toThrow()
  })
})
