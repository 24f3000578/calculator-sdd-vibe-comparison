import { Button } from './Button'
import type { Operator } from '../types'
import './Keypad.css'

interface KeypadProps {
  onDigit: (digit: string) => void
  onDecimal: () => void
  onOperator: (operator: Operator) => void
  onEquals: () => void
  onClear: () => void
}

export function Keypad({
  onDigit,
  onDecimal,
  onOperator,
  onEquals,
  onClear,
}: KeypadProps) {
  return (
    <div className="calc-keypad">
      <Button label="C" variant="action" onClick={onClear} />
      <Button label="÷" variant="operator" onClick={() => onOperator('/')} />
      <Button label="×" variant="operator" onClick={() => onOperator('*')} />
      <Button label="−" variant="operator" onClick={() => onOperator('-')} />

      <Button label="7" onClick={() => onDigit('7')} />
      <Button label="8" onClick={() => onDigit('8')} />
      <Button label="9" onClick={() => onDigit('9')} />
      <Button label="+" variant="operator" onClick={() => onOperator('+')} />

      <Button label="4" onClick={() => onDigit('4')} />
      <Button label="5" onClick={() => onDigit('5')} />
      <Button label="6" onClick={() => onDigit('6')} />
      <Button
        label="="
        variant="operator"
        onClick={onEquals}
        className="calc-button--equals"
      />

      <Button label="1" onClick={() => onDigit('1')} />
      <Button label="2" onClick={() => onDigit('2')} />
      <Button label="3" onClick={() => onDigit('3')} />

      <Button label="0" wide onClick={() => onDigit('0')} />
      <Button label="." onClick={onDecimal} />
    </div>
  )
}
