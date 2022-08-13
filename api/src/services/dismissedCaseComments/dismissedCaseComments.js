import { db } from 'src/lib/db'

export const dismissedCaseComments = () => {
  return db.dismissedCaseComment.findMany()
}

export const dismissedCaseComment = ({ id }) => {
  return db.dismissedCaseComment.findUnique({
    where: { id },
  })
}

export const dismissedCaseCommentsPerCase = ({ caseId }) => {
  return db.dismissedCaseComment.findMany({
    where: { caseId },
    orderBy: { createdAt: 'asc' },
  })
}

export const createDismissedCaseComment = ({ input }) => {
  return db.dismissedCaseComment.create({
    data: input,
  })
}

export const updateDismissedCaseComment = ({ id, input }) => {
  return db.dismissedCaseComment.update({
    data: input,
    where: { id },
  })
}

export const deleteDismissedCaseComment = ({ id }) => {
  return db.dismissedCaseComment.delete({
    where: { id },
  })
}
