const LastTraineeReview = ({ lastTraineeReview }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Benutzer</th>
          <th>Gesamtbewertung</th>
          <th>Regelkenntnisse</th>
          <th>Kommunikation</th>
          <th>Kommentar</th>
          <th>Datum</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {lastTraineeReview.map((traineeReview) => (
          <tr key={traineeReview.id}>
            <td>{traineeReview.userName}</td>
            <td>{traineeReview.overallRating}</td>
            <td>{traineeReview.rulesRating}</td>
            <td>{traineeReview.communicationRating}</td>
            <td>{traineeReview.commentRating}</td>
            <td>{traineeReview.createdAt}</td>
            <td>{traineeReview.review}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LastTraineeReview
