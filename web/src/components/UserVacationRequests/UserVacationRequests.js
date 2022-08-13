import * as FaIcons from 'react-icons/fa'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

const UPDATE_VACATIONREQUEST_MUTATION = gql`
  mutation UpdateVacationRequestMutation(
    $id: Int!
    $input: UpdateVacationRequestInput!
  ) {
    updateVacationRequest(id: $id, input: $input) {
      id
    }
  }
`

const CREATE_COMMENT_MUTATION = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const UserVacationRequests = ({ userVacationRequests, refetch }) => {
  const { currentUser } = useAuth()
  const [updateVacationRequest, { loading, error }] = useMutation(
    UPDATE_VACATIONREQUEST_MUTATION,
    {
      onCompleted: () => {
        refetch()
      },
    }
  )
  const [createComment, { loadingcomment, errorcomment }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        window.location.reload()
      },
    }
  )
  const approveVacReq = (id) => {
    updateVacationRequest({
      variables: {
        id: id,
        input: {
          status: 'approved',
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `Vacation Request (#${id}) approved.`,
          createdBy: `System + ${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: String(userVacationRequests[0].userName),
        },
      },
    })
  }
  const rejectVacReq = (id) => {
    updateVacationRequest({
      variables: {
        id: id,
        input: {
          status: 'denied',
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `Vacation Request (#${id}) denied.`,
          createdBy: `System + ${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: String(userVacationRequests[0].userName),
        },
      },
    })
  }
  const pendingVacReq = (id) => {
    updateVacationRequest({
      variables: {
        id: id,
        input: {
          status: 'pending',
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `Vacation Request (#${id}) set to pending.`,
          createdBy: `System + ${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: String(userVacationRequests[0].userName),
        },
      },
    })
  }
  return (
    <div className="citation-list">
      {userVacationRequests.map((val) => {
        let startdate = new Date(val.startDate)
        let enddate = new Date(val.endDate)
        let startDateString = startdate.toLocaleDateString()
        let endDateString = enddate.toLocaleDateString()
        return (
          <div className="citation" key={val.id}>
            <div>{val.reason}</div>
            <div className="text-sm text-gray-400 ml-auto flex flex-col items-end gap-1">
              <div className="flex flex-row gap-1 items-center">
                {val.status === 'pending' && (
                  <FaIcons.FaExclamationTriangle className="text-red-500 mr-6" />
                )}
                <button
                  onClick={() => {
                    approveVacReq(val.id)
                  }}
                >
                  <FaIcons.FaCheck
                    className={val.status === 'approved' && 'text-green-500'}
                  />
                </button>
                <button
                  onClick={() => {
                    rejectVacReq(val.id)
                  }}
                >
                  <FaIcons.FaTimes
                    className={val.status === 'denied' && 'text-red-500'}
                  />
                </button>
                <button
                  onClick={() => {
                    pendingVacReq(val.id)
                  }}
                >
                  <FaIcons.FaHourglass
                    className={val.status === 'pending' && 'text-orange-500'}
                  />
                </button>
              </div>
              {startDateString} - {endDateString}
              <span>{val.id}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserVacationRequests
