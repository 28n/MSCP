export const QUERY = gql`
  query FindInfopanelQuery($id: Int!) {
    infoPanel(id: $id) {
      id
      name
      content
      createdAt
      createdBy
      changedBy
      side
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Infopanel from '../Infopanel/Infopanel'

export const Success = ({ infoPanel }) => {
  return <Infopanel infoPanel={infoPanel} />
}
