import * as FaIcons from 'react-icons/fa'

const AdminVacation = ({ vacationRequests }) => {
  return (
    <div>
      {vacationRequests.map((val) => {
        return (
          <div className="article" key={val.id}>
            <div className="content-wrap">
              <span>
                <h1 className="font-bold">Urlaubsantrag</h1>&nbsp;
                <p>{val.createdAt}</p>
              </span>
              <span>
                <FaIcons.FaUser /> {val.userName}
              </span>
              <span>
                <FaIcons.FaClock /> {val.lengthInDays}{' '}
                {val.lengthInDays === 1 ? 'Tag' : 'Tage'}
              </span>
              <span>
                <FaIcons.FaCalendarCheck />{' '}
                <p className={processColor(val.status)}>{val.status}</p>
              </span>
            </div>
            <div className="btn-wrap">
              <button className="hover:bg-green-500">
                <FaIcons.FaCheck />
              </button>
              <button className="hover:bg-red-500">
                <FaIcons.FaTimes />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function processColor(status) {
  switch (status.toUpperCase()) {
    case 'APPROVED':
      return 'text-green-500'
    case 'PENDING':
      return 'text-orange-500'
    case 'DENIED':
      return 'text-red-500'
    default:
      return 'text-gray-500'
  }
}
export default AdminVacation
