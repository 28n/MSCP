const AdminMeetingSignoff = ({ meetingSignOffs }) => {
  return (
    meetingSignOffs.map((val) => {
      return (
        JSON.stringify(val)
      )
    })
  )
}

export default AdminMeetingSignoff
