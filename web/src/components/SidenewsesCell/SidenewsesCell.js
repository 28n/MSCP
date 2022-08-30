export const QUERY = gql`
  query SidenewsesQuery($side: String!) {
    sidenewses(side: $side) {
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

export const Empty = () => <>Es gibt keine Neuigkeiten.</>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

import Sidenews from 'src/components/Sidenews'

export const Success = ({ sidenewses }) => {
  return <Sidenews sidenewses={sidenewses} />
}
