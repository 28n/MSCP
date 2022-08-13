import { db } from 'src/lib/db'

export const vacationRequests = () => {
  return db.vacationRequest.findMany({
    orderBy: { id: 'desc' },
  })
}

export const vacationRequest = ({ id }) => {
  return db.vacationRequest.findUnique({
    where: { id },
  })
}

export const userVacationRequests = ({ userName }) => {
  return db.vacationRequest.findMany({
    where: { userName },
    orderBy: { id: 'desc' },
  })
}

export const createVacationRequest = ({ input }) => {
  return db.vacationRequest.create({
    data: input,
  })
}

export const updateVacationRequest = ({ id, input }) => {
  return db.vacationRequest.update({
    data: input,
    where: { id },
  })
}

export const deleteVacationRequest = ({ id }) => {
  return db.vacationRequest.delete({
    where: { id },
  })
}
