import { db } from 'src/lib/db'

export const changelogs = () => {
  return db.changelog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const changelog = ({ id }) => {
  return db.changelog.findUnique({
    where: { id },
  })
}

export const createChangelog = ({ input }) => {
  return db.changelog.create({
    data: input,
  })
}

export const updateChangelog = ({ id, input }) => {
  return db.changelog.update({
    data: input,
    where: { id },
  })
}

export const deleteChangelog = ({ id }) => {
  return db.changelog.delete({
    where: { id },
  })
}
