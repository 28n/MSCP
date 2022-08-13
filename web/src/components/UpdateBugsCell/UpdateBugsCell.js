export const QUERY = gql`
  query UpdateBugsQuery {
    bugs: nonFixedBugs {
      id
      title
      description
      createdAt
      createdBy
      isValid
      isKnown
      isFixed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <></>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import UpdateBugs from '../UpdateBugs/UpdateBugs'

export const Success = ({ bugs }) => {
  return <UpdateBugs bugs={bugs} />
}
