const AdminTraineereview = ({ traineeReviews }) => {
  return (
    <div>
      {traineeReviews.map((val) => {
        return (
          <div className="article" key={val.id}>
            <p className="font-bold">{val.userName}</p>
            <p>Overall: {val.overallRating}</p>
            <p>Rules: {val.rulesRating}</p>
            <p>Communication: {val.communicationRating}</p>
            <p>Comment: {val.commentRating}</p>
            <p>Review: {val.review}</p>
            <p>Created by: {val.creator}</p>
            <p>Created at: {val.createdAt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AdminTraineereview
