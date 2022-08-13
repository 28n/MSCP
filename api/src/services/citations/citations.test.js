import {
  citations,
  citation,
  createCitation,
  updateCitation,
  deleteCitation,
} from './citations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('citations', () => {
  scenario('returns all citations', async (scenario) => {
    const result = await citations()

    expect(result.length).toEqual(Object.keys(scenario.citation).length)
  })

  scenario('returns a single citation', async (scenario) => {
    const result = await citation({ id: scenario.citation.one.id })

    expect(result).toEqual(scenario.citation.one)
  })

  scenario('creates a citation', async () => {
    const result = await createCitation({
      input: {
        content: 'String',
        createdBy: 'String',
        createdByRole: 'String',
        userName: 'String',
      },
    })

    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
    expect(result.createdByRole).toEqual('String')
    expect(result.userName).toEqual('String')
  })

  scenario('updates a citation', async (scenario) => {
    const original = await citation({ id: scenario.citation.one.id })
    const result = await updateCitation({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a citation', async (scenario) => {
    const original = await deleteCitation({ id: scenario.citation.one.id })
    const result = await citation({ id: original.id })

    expect(result).toEqual(null)
  })
})
