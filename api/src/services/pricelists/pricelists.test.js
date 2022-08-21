import {
  pricelists,
  pricelist,
  createPricelist,
  updatePricelist,
  deletePricelist,
} from './pricelists'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pricelists', () => {
  scenario('returns all pricelists', async (scenario) => {
    const result = await pricelists()

    expect(result.length).toEqual(Object.keys(scenario.pricelist).length)
  })

  scenario('returns a single pricelist', async (scenario) => {
    const result = await pricelist({ id: scenario.pricelist.one.id })

    expect(result).toEqual(scenario.pricelist.one)
  })

  scenario('creates a pricelist', async () => {
    const result = await createPricelist({
      input: {
        title: 'String',
        content: 'String',
        createdBy: 'String',
        createdByRole: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
    expect(result.createdByRole).toEqual('String')
  })

  scenario('updates a pricelist', async (scenario) => {
    const original = await pricelist({ id: scenario.pricelist.one.id })
    const result = await updatePricelist({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a pricelist', async (scenario) => {
    const original = await deletePricelist({ id: scenario.pricelist.one.id })
    const result = await pricelist({ id: original.id })

    expect(result).toEqual(null)
  })
})
