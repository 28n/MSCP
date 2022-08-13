export const QUERY = gql`
  query SideMessagesQuery($side: String!) {
    sideMessages(side: $side) {
      id
      title
      content
      createdAt
      createdBy
      createdByRole
      side
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import SideMessages from '../SideMessages/SideMessages'

export const Success = ({ sideMessages }) => {
  return <SideMessages sideMessages={sideMessages} />
}
