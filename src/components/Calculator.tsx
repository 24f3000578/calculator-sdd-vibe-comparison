import { useReducer, useCallback } from 'react'
import { Display } from './Display'
import { Keypad } from './Keypad'
import {
  type CalculatorState,
  type Operator,
  initialCalculatorState,
} from '../types'
import { calculate } from '../utils/calculate'
import { formatDisplayValue } from '../utils/formatDisplay'
import './Calculator.css'

type CalculatorAction =
  | { type: 'digit'; digit: string }
  | { type: 'decimal' }
  | { type: 'operator'; operator: Operator }
  | { type: 'equals' }
  | { type: 'clear' }

function parseDisplay(display: string): number {
  return parseFloat(display) || 0
}

function applyOperator(
  state: CalculatorState,
  inputValue: number,
  nextOperator: Operator,
): CalculatorState {
  if (state.operand === null) {
    return {
      ...state,
      operand: inputValue,
      operator: nextOperator,
      waitingForOperand: true,
    }
  }

  if (state.waitingForOperand) {
    return {
      ...state,
      operator: nextOperator,
    }
  }

  if (state.operator === null) {
    return {
      ...state,
      operand: inputValue,
      operator: nextOperator,
      waitingForOperand: true,
    }
  }

  const result = calculate(state.operand, inputValue, state.operator)

  if (result === null) {
    return {
      ...state,
      display: 'Error',
      operand: null,
      operator: null,
      waitingForOperand: false,
      error: true,
    }
  }

  const display = formatDisplayValue(result)

  return {
    display,
    operand: result,
    operator: nextOperator,
    waitingForOperand: true,
    error: false,
  }
}

function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction,
): CalculatorState {
  if (state.error && action.type !== 'clear') {
    return state
  }

  switch (action.type) {
    case 'clear':
      return initialCalculatorState

    case 'digit': {
      const { digit } = action

      if (state.waitingForOperand) {
        return {
          ...state,
          display: digit,
          waitingForOperand: false,
        }
      }

      if (state.display === '0') {
        return {
          ...state,
          display: digit === '0' ? '0' : digit,
        }
      }

      return {
        ...state,
        display: state.display + digit,
      }
    }

    case 'decimal': {
      if (state.waitingForOperand) {
        return {
          ...state,
          display: '0.',
          waitingForOperand: false,
        }
      }

      if (state.display.includes('.')) {
        return state
      }

      return {
        ...state,
        display: state.display + '.',
      }
    }

    case 'operator':
      return applyOperator(state, parseDisplay(state.display), action.operator)

    case 'equals': {
      if (state.operator === null || state.operand === null) {
        return state
      }

      const inputValue = parseDisplay(state.display)
      const result = calculate(state.operand, inputValue, state.operator)

      if (result === null) {
        return {
          display: 'Error',
          operand: null,
          operator: null,
          waitingForOperand: false,
          error: true,
        }
      }

      return {
        display: formatDisplayValue(result),
        operand: null,
        operator: null,
        waitingForOperand: true,
        error: false,
      }
    }

    default:
      return state
  }
}

export function Calculator() {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    initialCalculatorState,
  )

  const onDigit = useCallback((digit: string) => {
    dispatch({ type: 'digit', digit })
  }, [])

  const onDecimal = useCallback(() => {
    dispatch({ type: 'decimal' })
  }, [])

  const onOperator = useCallback((operator: Operator) => {
    dispatch({ type: 'operator', operator })
  }, [])

  const onEquals = useCallback(() => {
    dispatch({ type: 'equals' })
  }, [])

  const onClear = useCallback(() => {
    dispatch({ type: 'clear' })
  }, [])

  return (
    <div className="calculator">
      <Display value={state.display} />
      <Keypad
        onDigit={onDigit}
        onDecimal={onDecimal}
        onOperator={onOperator}
        onEquals={onEquals}
        onClear={onClear}
      />
    </div>
  )
}
