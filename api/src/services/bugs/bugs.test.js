import { bugs, bug, createBug, updateBug, deleteBug } from './bugs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bugs', () => {
  scenario('returns all bugs', async (scenario) => {
    const result = await bugs()

    expect(result.length).toEqual(Object.keys(scenario.bug).length)
  })

  scenario('returns a single bug', async (scenario) => {
    const result = await bug({ id: scenario.bug.one.id })

    expect(result).toEqual(scenario.bug.one)
  })

  scenario('creates a bug', async () => {
    const result = await createBug({
      input: { title: 'String', description: 'String', createdBy: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.createdBy).toEqual('String')
  })

  scenario('updates a bug', async (scenario) => {
    const original = await bug({ id: scenario.bug.one.id })
    const result = await updateBug({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a bug', async (scenario) => {
    const original = await deleteBug({ id: scenario.bug.one.id })
    const result = await bug({ id: original.id })

    expect(result).toEqual(null)
  })
})
