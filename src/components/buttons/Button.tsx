interface ButtonProps {
  children?: React.ReactNode
  className?: string
  role?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({ children, role, type, onClick }: ButtonProps) => {
  return (
    <button type={type ?? 'button'} className={`btnPrimary`}>
      {children}
    </button>
  )
}

export default Button
