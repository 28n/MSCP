import { db } from 'src/lib/db'

export const meetingSignOffs = () => {
  return db.meetingSignOff.findMany()
}

export const meetingSignOff = ({ id }) => {
  return db.meetingSignOff.findUnique({
    where: { id },
  })
}

export const createMeetingSignOff = ({ input }) => {
  return db.meetingSignOff.create({
    data: input,
  })
}

export const updateMeetingSignOff = ({ id, input }) => {
  return db.meetingSignOff.update({
    data: input,
    where: { id },
  })
}

export const deleteMeetingSignOff = ({ id }) => {
  return db.meetingSignOff.delete({
    where: { id },
  })
}
