const AdminVacation = ({ vacationRequests }) => {
  return (
    vacationRequests.map((val)=>{
      let date = new Date(val.createdAt)
      let dateString = date.toLocaleString()
      let startDate = new Date(val.startDate)
      let endDate = new Date(val.endDate)
      function getStatus(status) {
        switch (status) {
          case pending:
            
            break;

          default:
            break;
        }
      }
      return (
        <>
          <h2 className="font-bold">{val.userName} hat am {dateString} Urlaub beantragt.</h2>
          <p>Zeitraum: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
        <h2 className="font-bold">Status: </h2>
          {JSON.stringify(val)}
        </>
      )
    })
  )
}

export default AdminVacation
