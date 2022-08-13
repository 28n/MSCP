import { db } from 'src/lib/db'

export const summaries = () => {
  return db.summary.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export const sideSummaries = ({ side }) => {
  return db.summary.findMany({
    where: { side },
    orderBy: { createdAt: 'desc' },
  })
}

export const summary = ({ id }) => {
  return db.summary.findUnique({
    where: { id },
  })
}

export const createSummary = ({ input }) => {
  return db.summary.create({
    data: input,
  })
}

export const updateSummary = ({ id, input }) => {
  return db.summary.update({
    data: input,
    where: { id },
  })
}

export const deleteSummary = ({ id }) => {
  return db.summary.delete({
    where: { id },
  })
}
