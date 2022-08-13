export const QUERY = gql`
  query ChangelogsQuery {
    changelogs {
      id
      type
      content
      createdAt
      createdBy
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <>Im Moment sind keine Changelogs vorhanden!</>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Changelog from 'src/components/Changelog'

export const Success = ({ changelogs }) => {
  return <Changelog changelogs={changelogs} />
}
