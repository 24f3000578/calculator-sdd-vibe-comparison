export type Operator = '+' | '-' | '*' | '/'

export interface CalculatorState {
  display: string
  operand: number | null
  operator: Operator | null
  waitingForOperand: boolean
  error: boolean
}

export const initialCalculatorState: CalculatorState = {
  display: '0',
  operand: null,
  operator: null,
  waitingForOperand: false,
  error: false,
}
