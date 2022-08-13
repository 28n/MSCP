import { db } from 'src/lib/db'

export const citations = () => {
  return db.citation.findMany()
}

export const citation = ({ id }) => {
  return db.citation.findUnique({
    where: { id },
  })
}

export const userCitations = ({ userName }) => {
  return db.citation.findMany({
    where: { userName },
    orderBy: { createdAt: 'desc' },
  })
}

export const createCitation = ({ input }) => {
  return db.citation.create({
    data: input,
  })
}

export const updateCitation = ({ id, input }) => {
  return db.citation.update({
    data: input,
    where: { id },
  })
}

export const deleteCitation = ({ id }) => {
  return db.citation.delete({
    where: { id },
  })
}
