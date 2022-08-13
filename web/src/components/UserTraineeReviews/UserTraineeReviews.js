import * as FaIcons from 'react-icons/fa'

const UserTraineeReviews = ({ userTraineeReviews }) => {
  return (
    <div className="citation-list">
      {userTraineeReviews.map((val) => {
        let date = new Date(val.createdAt)
        let dateString =
          date.toLocaleDateString() +
          ' | ' +
          date.toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
          })
        return (
          <div key={val.id} className="citation">
            <div>
              {val.review}
              <br />
              <br />
              <p>
                Allgemeine Bewertung: {val.overallRating} von 10 <br />
                Regelkenntnisse: {val.rulesRating} von 10 <br />
                Kommunikationskompetenz: {val.communicationRating} von 10
                <br />
                Kommentar: {val.commentRating} von 10
              </p>
            </div>
            <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
              <div className="flex flex-row gap-1 items-center">
                <FaIcons.FaUser />
                {val.creator}
              </div>
              {dateString}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserTraineeReviews
