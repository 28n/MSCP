import { db } from 'src/lib/db'

export const bugs = () => {
  return db.bug.findMany()
}
export const nonFixedBugs = () => {
  return db.bug.findMany({
    where: {
      isFixed: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const knownBugs = () => {
  return db.bug.findMany({
    where: {
      AND: [{ isValid: true }, { isKnown: true }, { isFixed: false }],
    },
  })
}

export const bug = ({ id }) => {
  return db.bug.findUnique({
    where: { id },
  })
}

export const createBug = ({ input }) => {
  return db.bug.create({
    data: input,
  })
}

export const updateBug = ({ id, input }) => {
  return db.bug.update({
    data: input,
    where: { id },
  })
}

export const deleteBug = ({ id }) => {
  return db.bug.delete({
    where: { id },
  })
}
