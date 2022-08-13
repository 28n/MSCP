export const QUERY = gql`
  query HowManyTraineereviewsQuery {
    howManyTraineereviews {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ howManyTraineereviews }) => {
  return (
    <ul>
      {howManyTraineereviews.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
