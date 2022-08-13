import {
  changelogs,
  changelog,
  createChangelog,
  updateChangelog,
  deleteChangelog,
} from './changelogs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('changelogs', () => {
  scenario('returns all changelogs', async (scenario) => {
    const result = await changelogs()

    expect(result.length).toEqual(Object.keys(scenario.changelog).length)
  })

  scenario('returns a single changelog', async (scenario) => {
    const result = await changelog({ id: scenario.changelog.one.id })

    expect(result).toEqual(scenario.changelog.one)
  })

  scenario('creates a changelog', async () => {
    const result = await createChangelog({
      input: { type: 'String', content: 'String', createdBy: 'String' },
    })

    expect(result.type).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
  })

  scenario('updates a changelog', async (scenario) => {
    const original = await changelog({ id: scenario.changelog.one.id })
    const result = await updateChangelog({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a changelog', async (scenario) => {
    const original = await deleteChangelog({ id: scenario.changelog.one.id })
    const result = await changelog({ id: original.id })

    expect(result).toEqual(null)
  })
})
