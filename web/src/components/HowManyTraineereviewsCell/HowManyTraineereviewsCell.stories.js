import { Loading, Empty, Failure, Success } from './HowManyTraineereviewsCell'
import { standard } from './HowManyTraineereviewsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/HowManyTraineereviewsCell' }
