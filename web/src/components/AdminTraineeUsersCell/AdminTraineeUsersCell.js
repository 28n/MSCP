export const QUERY = gql`
  query User {
    traineeusers {
      id
      email
      roles
    }
  }
`

export const Loading = () => <option>Loading...</option>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ traineeusers }) => {
  return (
    <>
      {traineeusers.map((item) => {
        return (
          <option value={item.email} key={item.id}>
            {'@' + item.email + ' - ' + item.roles}
          </option>
        )
      })}
    </>
  )
}
