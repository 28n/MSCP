import { db } from 'src/lib/db'

export const pricelists = () => {
  return db.pricelist.findMany({
    orderBy: {
      sortOrder: 'asc',
    },
  })
}

export const pricelist = ({ id }) => {
  return db.pricelist.findUnique({
    where: { id },
  })
}

export const createPricelist = ({ input }) => {
  return db.pricelist.create({
    data: input,
  })
}

export const updatePricelist = ({ id, input }) => {
  return db.pricelist.update({
    data: input,
    where: { id },
  })
}

export const deletePricelist = ({ id }) => {
  return db.pricelist.delete({
    where: { id },
  })
}
