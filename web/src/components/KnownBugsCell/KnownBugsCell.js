export const QUERY = gql`
  query KnownBugsQuery {
    knownBugs {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Im Moment sind keine Bugs bekannt!</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ knownBugs }) => {
  return (
    <ul className="ml-5 list-disc">
      {knownBugs.map((bug) => (
        <li key={bug.id}>{bug.title}</li>
      ))}
    </ul>
  )
}
