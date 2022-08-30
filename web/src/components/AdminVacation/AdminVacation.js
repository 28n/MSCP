const AdminVacation = ({ vacationRequests }) => {
  return (
    vacationRequests.map((val)=>{
      return (
        JSON.stringify(val)
      )
    })
  )
}

export default AdminVacation
