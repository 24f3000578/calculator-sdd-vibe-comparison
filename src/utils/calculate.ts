import type { Operator } from '../types'

export function calculate(
  a: number,
  b: number,
  operator: Operator,
): number | null {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b === 0 ? null : a / b
    default:
      return null
  }
}
