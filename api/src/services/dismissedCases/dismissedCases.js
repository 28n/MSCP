import { db } from 'src/lib/db'

export const dismissedCases = () => {
  return db.dismissedCase.findMany({ orderBy: { id: 'desc' } })
}

export const dismissedCase = ({ id }) => {
  return db.dismissedCase.findUnique({
    where: { id },
  })
}

export const createDismissedCase = ({ input }) => {
  return db.dismissedCase.create({
    data: input,
  })
}

export const updateDismissedCase = ({ id, input }) => {
  return db.dismissedCase.update({
    data: input,
    where: { id },
  })
}

export const deleteDismissedCase = ({ id }) => {
  return db.dismissedCase.delete({
    where: { id },
  })
}
