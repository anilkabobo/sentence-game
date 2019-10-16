export type State = {
  questions: Map,
  step: number,
  result: string,
}

export type Question = {
  type: string,
  label: string,
  name: string,
  position: number
}