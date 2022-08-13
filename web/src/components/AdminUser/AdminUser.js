import * as FaIcons from 'react-icons/fa'
import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextAreaField,
  Submit,
  SelectField,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import UserCommentsCell from 'src/components/UserCommentsCell'
import UserVacationRequestsCell from 'src/components/UserVacationRequestsCell'
import UserTraineeReviewsCell from '../UserTraineeReviewsCell'
import { useEffect } from 'react'
import AdminUserCitationsCell from '../AdminUserCitationsCell'

const CREATE_CITATION_MUTATION = gql`
  mutation CreateCitationMutation($input: CreateCitationInput!) {
    createCitation(input: $input) {
      id
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
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

const AdminUser = ({ user, refetch }) => {
  const { currentUser } = useAuth()
  const comfm = useForm()
  useEffect(() => {
    if (user.id === 1 && currentUser.id !== 1) {
      for (let index = 0; index < 5; index++) {
        toast(
          'Willkommen auf meinem Profil! Da du hier nie seien solltest, loggen wir das alles mal!'
        )
      }
      createCitation({
        variables: {
          input: {
            content:
              'Danke für den Besuch auf meinem Profil! Liebe Grüße von Gage :)',
            createdBy: `System`,
            createdByRole: 'System',
            userName: String(currentUser.email),
          },
        },
      })
    }
  }, [])
  const [createCitation] = useMutation(CREATE_CITATION_MUTATION)
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      refetch()
      window.location.reload()
    },
  })
  const [createComment, { loadingcomment, errorcomment }] = useMutation(
    CREATE_COMMENT_MUTATION,
    {
      onCompleted: () => {
        comfm.reset()
        refetch()
        window.location.reload()
      },
    }
  )
  const changeRole = (data) => {
    updateUser({
      variables: {
        id: user.id,
        input: {
          roles: data.roles,
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `Rolechange! from ${user.roles} to ${data.roles}`,
          createdBy: `${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: user.email,
          userId: user.id,
        },
      },
    })
  }
  const sendComment = (data) => {
    createComment({
      variables: {
        input: {
          content: data.comment,
          createdBy: currentUser.email,
          createdByRole: currentUser.roles,
          userName: user.email,
          userId: user.id,
        },
      },
    })
  }
  const activateUser = () => {
    updateUser({
      variables: {
        id: user.id,
        input: {
          isActive: true,
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `User ${user.email} wurde aktiviert`,
          createdBy: `${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: user.email,
          userId: user.id,
        },
      },
    })
  }
  const deactivateUser = () => {
    updateUser({
      variables: {
        id: user.id,
        input: {
          isActive: false,
        },
      },
    })
    createComment({
      variables: {
        input: {
          content: `User ${user.email} wurde deaktiviert`,
          createdBy: `${currentUser.email}`,
          createdByRole: currentUser.roles,
          userName: user.email,
          userId: user.id,
        },
      },
    })
  }
  const sendCitation = (data) => {
    let citationobj = {
      content: data.content,
      createdBy: currentUser.email,
      createdByRole: currentUser.roles,
      userName: String(user.email),
    }
    createCitation({
      variables: {
        input: citationobj,
      },
    })
    let commentobj = {
      content: "Citation created",
      createdBy: `${currentUser.email}`,
      createdByRole: currentUser.roles,
      userName: user.email,
      userId: user.id,
    }
    createComment({
      variables: {
        input: commentobj,
      },
    })
  }

  return (
    <>
      <div className="dashboard-content">
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>
                Benutzerid: {user.id === 1 ? '69420' : user.id} - Profil
                geöffnet mit Berechtigungen: {currentUser.roles}
              </span>
            </div>
            <div className="content">
              <div className="w-full">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    className="relative rounded-full w-16"
                    src="https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"
                    alt="profile"
                  ></img>
                  <h1>{user.email}</h1>
                  <span className="role" id={user.roles.toLowerCase()}>
                    {user.roles}
                  </span>
                </div>
                <div className="flex flex-col mt-1">
                  <p>
                    <span className="font-bold">MSCP-ID:</span>{' '}
                    {user.id === 1 ? 'immer die Nummer 1' : user.id}
                  </p>
                  <p>
                    <span className="font-bold">Benutzer aktiviert?</span>{' '}
                    {user.id === 1
                      ? 'immer aktiv'
                      : user.isActive
                        ? 'Ja'
                        : 'Nein'}
                  </p>
                  <p>
                    <span className="font-bold">Benutzer eingerichtet?</span>{' '}
                    {user.id === 1
                      ? 'ich bin nicht eingerichtet, ich bin der Einrichter!'
                      : user.setUp
                        ? 'Ja'
                        : 'Nein'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Rolle von Benutzer: {user.email} ändern.</span>
            </div>
            <div className="content">
              {user.id === 1 ? (
                <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </>
              ) : (
                <>
                  <div className="flex flex-row gap-2 items-center w-full mb-1">
                    <button
                      onClick={() => activateUser()}
                      fluid
                      className="button w-full"
                      id="green"
                    >
                      Benutzer aktivieren
                    </button>
                    <button
                      onClick={() => deactivateUser()}
                      fluid
                      className="button w-full"
                      id="red"
                    >
                      Benutzer deaktivieren
                    </button>
                  </div>

                  <div className="formwrap">
                    <Form onSubmit={changeRole}>
                      <SelectField name="roles">
                        <option selected hidden>
                          Bitte wählen
                        </option>
                        {currentUser.roles === 'Entwickler' && (
                          <>
                            <option value="Entwickler">Entwickler</option>
                            <option value={'Administrator'}>
                              Administrator
                            </option>
                            <option value={'Operator'}>Operator</option>
                            <option value={'Supportleitung'}>
                              Supportleitung
                            </option>
                            <option value={'Moderatorleitung'}>
                              Moderatorleitung
                            </option>
                            <option value={'Supporter'}>Supporter</option>
                            <option value={'Moderator'}>Moderator</option>
                            <option value={'Probe-Supporter'}>
                              Probe-Supporter
                            </option>
                            <option value={'Probe-Moderator'}>
                              Probe-Moderator
                            </option>
                          </>
                        )}
                        {currentUser.roles === 'Moderatorleitung' && (
                          <>
                            <option value={"Moderator"}>Moderator</option>
                            <option value={"Probe-Moderator"}>Probe-Moderator</option>
                          </>
                        )}
                        {/* {currentUser.roles === 'Supportleitung' ? () : null} */}
                      </SelectField>

                      <Submit>Rolle ändern</Submit>
                    </Form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='infocard'>
            <div className='header'>
              <span>Citation hinzufügen</span>
            </div>
            <div className='content'>
              {user.id === 1 ? (
                              <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </>
              ) : (
              <div className='formwrap'>
                <Form onSubmit={sendCitation}>
                  <Label name='content'>Inhalt</Label>
                  <TextAreaField name='content' placeholder='Place a citation on me! :-)' />
                  <Label name="length">Reaktionszeit wählen (im Moment nicht aktiviert)</Label>
                  <SelectField name='length' disabled>
                    <option selected hidden>Länge auswählen</option>
                  </SelectField>
                  <Submit>Erstellen</Submit>
                </Form>
              </div>
              )}
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Kommentar hinzufügen</span>
            </div>
            <div className="content">
              {user.id === 1 ? (
                               <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </> 
              ) : (
                <div className="formwrap">
                  <Form formMethods={comfm} onSubmit={sendComment}>
                    <Label name="comment">Comment</Label>
                    <TextAreaField
                      name="comment"
                      placeholder="Place a comment on me! :-)"
                    />
                    <Submit>Submit</Submit>
                  </Form>
                </div>
              )}
            </div>
          </div>
          {user.id === 1 ? (
            <div className="infocard">
              <div className="header">
                <span>Letzte Kommentare... Oder doch nicht?</span>
              </div>
              <div className="content">
                              <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </> 
                
              </div>
            </div>
          ) : (
            <UserCommentsCell userName={user.email} />
          )}
        </div>
        <div className="col">
          <div className="infocard">
            <div className="header">
              <span>Urlaubsanträge von: {user.email}</span>
            </div>
            <div className="content">
              {user.id === 1 ? (
                               <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </> 
              ) : (
                <UserVacationRequestsCell userName={user.email} />
              )}
            </div>
          </div>
          <div className="infocard">
            <div className="header">
              <span>Probe-Bewertungen über {user.email}</span>
            </div>
            <div className="content">
              {user.id === 1 ? (
                               <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </> 
              ) : (
                <UserTraineeReviewsCell userName={user.email} />
              )}
            </div>
          </div>
          <div className='infocard'>
            <div className='header'>
              <span>Citations von {user.email}</span>
            </div>
            <div className='content'>
              {user.id === 1 ? (
                              <>
                  <div className='flex flex-row items-center gap-2 text-red-500'>
                    <FaIcons.FaTimes size={50} />
                    <b className='text-3xl'>Blocked</b>
                    <FaIcons.FaTimes size={50} />
                  </div>
                  </>
              ) : (<AdminUserCitationsCell userName={user.email} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminUser
