import { newses, news, createNews, updateNews, deleteNews } from './newses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('newses', () => {
  scenario('returns all newses', async (scenario) => {
    const result = await newses()

    expect(result.length).toEqual(Object.keys(scenario.news).length)
  })

  scenario('returns a single news', async (scenario) => {
    const result = await news({ id: scenario.news.one.id })

    expect(result).toEqual(scenario.news.one)
  })

  scenario('creates a news', async () => {
    const result = await createNews({
      input: {
        title: 'String',
        content: 'String',
        createdBy: 'String',
        createdByRole: 'String',
        side: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.createdBy).toEqual('String')
    expect(result.createdByRole).toEqual('String')
    expect(result.side).toEqual('String')
  })

  scenario('updates a news', async (scenario) => {
    const original = await news({ id: scenario.news.one.id })
    const result = await updateNews({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a news', async (scenario) => {
    const original = await deleteNews({ id: scenario.news.one.id })
    const result = await news({ id: original.id })

    expect(result).toEqual(null)
  })
})
