export const QUERY = gql`
  query FindAdminVacationQuery {
    vacationRequests {
      id
      userName
      startDate
      endDate
      status
      createdAt
      reason
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import AdminVacation from '../AdminVacation/AdminVacation'

export const Success = ({ vacationRequests }) => {
  return <AdminVacation vacationRequests={vacationRequests} />
}
