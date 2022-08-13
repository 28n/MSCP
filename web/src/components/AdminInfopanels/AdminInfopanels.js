const AdminInfopanels = ({ infoPanels }) => {
  return (
    <div className="row-5 infoadmin">
      {infoPanels.map((val) => {
        return (
          <div key={val.id}>
            <p className="font-bold">
              {val.name} - {val.side}
            </p>

            <p>
              von {val.createdBy} | {val.createdAt}
            </p>
            <p>Letzte Änderung von {val.changedBy}</p>
            <button>Öffnen</button>
          </div>
        )
      })}
    </div>
  )
}

export default AdminInfopanels
