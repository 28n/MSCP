export const QUERY = gql`
  query EditableInfopanelsQuery {
    infoPanels {
      id
      name
      createdAt
      createdBy
      changedBy
      side
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ infoPanels }) => {
  return (
    <div className="infocard">
      <div className="header">
        <span>Infopanels</span>
      </div>
      <div className="content gap-1">
        {infoPanels.map((item) => {
          return (
            <div className="infopanel" key={item.id}>
              <div>
                <h2>{item.name + ' #' + item.id}</h2>
                <span>von {item.createdBy + ' | ' + item.createdAt}</span>
                <span>letzte Änderung von {item.changedBy}</span>
                <h3>{item.side}</h3>
              </div>
              <div className="ml-auto flex flex-col justify-start">
                <button className="">Edit</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
