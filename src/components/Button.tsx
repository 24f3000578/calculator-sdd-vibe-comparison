import './Button.css'

export type ButtonVariant = 'digit' | 'operator' | 'action'

interface ButtonProps {
  label: string
  variant?: ButtonVariant
  wide?: boolean
  className?: string
  onClick: () => void
}

export function Button({
  label,
  variant = 'digit',
  wide = false,
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`calc-button calc-button--${variant}${wide ? ' calc-button--wide' : ''}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
