import {
  summaries,
  summary,
  createSummary,
  updateSummary,
  deleteSummary,
} from './summaries'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('summaries', () => {
  scenario('returns all summaries', async (scenario) => {
    const result = await summaries()

    expect(result.length).toEqual(Object.keys(scenario.summary).length)
  })

  scenario('returns a single summary', async (scenario) => {
    const result = await summary({ id: scenario.summary.one.id })

    expect(result).toEqual(scenario.summary.one)
  })

  scenario('creates a summary', async () => {
    const result = await createSummary({
      input: { content: 'String', side: 'String', title: 'String' },
    })

    expect(result.content).toEqual('String')
    expect(result.side).toEqual('String')
    expect(result.title).toEqual('String')
  })

  scenario('updates a summary', async (scenario) => {
    const original = await summary({ id: scenario.summary.one.id })
    const result = await updateSummary({
      id: original.id,
      input: { content: 'String2' },
    })

    expect(result.content).toEqual('String2')
  })

  scenario('deletes a summary', async (scenario) => {
    const original = await deleteSummary({ id: scenario.summary.one.id })
    const result = await summary({ id: original.id })

    expect(result).toEqual(null)
  })
})
