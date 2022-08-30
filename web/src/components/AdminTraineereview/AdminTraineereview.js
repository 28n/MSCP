import * as FaIcons from 'react-icons/fa'

const AdminTraineereview = ({ traineeReviews }) => {
  return (
    traineeReviews.map((val)=>{
      let date = new Date(val.createdAt)
      let dateString = date.toLocaleString()
      function getRecommendation()  {
        let num = val.overallRating + val.rulesRating + val.communicationRating + val.commentRating;
        let avr = num / 4
        let result = ""
        if (avr < 5) {
          result = "Der Probe-Nutzer scheint etwas Anleitung zu benötigen."
        }
        if (avr = 5) {
          result = "Der Probe-Nutzer liegt im gesunden Mittelfeld."
        }
        if (avr > 5) {
          result = "Der Probe-Nutzer scheint gute Leistungen zu erbringen."
        }
          return result
      }
      function getAverage() {
        let average = val.overallRating + val.rulesRating + val.communicationRating + val.commentRating
        let result = average / 4
        return result
        }
      return (
        <>
          <h2 className="font-bold">{val.creator} hat am {dateString} einen Probenutzer bewertet.</h2>
          <p>Bewerteter Nutzer: <span className="font-bold">{val.userName}</span></p>
          <h2 className="font-bold">Bewertung</h2>
          <table>
            <thead>
              <tr>
                <th>Kriterium</th>
                <th>Bewertung</th>
              </tr>
            </thead>
              <tbody>
              <tr>
                <td>Gesamtbewertung</td>
                <td>{val.overallRating}</td>
              </tr>
                <tr>
                <td>Regelkenntnisse</td>
                <td>{val.rulesRating}</td>
              </tr>
                <tr>
                <td>Kommunikationswertung</td>
                <td>{val.communicationRating}</td>
              </tr>
                <tr>
                <td>Kommentarbewertung</td>
                <td>{val.commentRating}</td>
              </tr>
                <tr>
                <td>Kommentar zur Bewertung</td>
                <td>{val.review}</td>
              </tr>
            </tbody>
          </table>
            <span> Ø {getAverage()}</span>
          <span className='my-2 bg-gray-600 py-0.5 text-gray-400 text-center font-bold w-full'>Ende der Bewertung</span>
          </>
      )
    })
  )
}

export default AdminTraineereview
