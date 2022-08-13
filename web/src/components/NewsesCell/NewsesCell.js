export const QUERY = gql`
  query NewsesQuery {
    newses {
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

import Newses from 'src/components/Newses'

export const Success = ({ newses }) => {
  return <Newses newses={newses} />
}
