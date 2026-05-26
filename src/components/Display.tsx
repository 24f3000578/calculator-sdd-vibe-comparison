import './Display.css'

interface DisplayProps {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <div className="calc-display" role="status" aria-live="polite" aria-label="Calculator display">
      {value}
    </div>
  )
}
