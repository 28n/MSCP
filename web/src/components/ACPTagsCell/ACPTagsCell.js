export const QUERY = gql`
  query ACPTagsQuery {
    acpTags {
      id
      email
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AcpTags from '../ACPTags/ACPTags'

export const Success = ({ acpTags }) => {
  return <AcpTags acpTags={acpTags} />
}
