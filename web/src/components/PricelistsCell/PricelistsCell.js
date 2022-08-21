export const QUERY = gql`
  query PricelistsQuery {
    pricelists {
      id
      title
      content
      createdAt
      createdBy
      createdByRole
      sortOrder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Pricelists from 'src/components/Pricelists'

export const Success = ({ pricelists }) => {
  return (
    <Pricelists pricelists={pricelists} />
  )
}
