export type State = {
  questions: Map,
  result: string,
  step: number
}

export type Question = {
  label: string,
  name: string,
  placeholder?: string,
  position: number,
  type: string
}