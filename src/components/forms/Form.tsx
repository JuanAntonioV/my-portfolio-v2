interface FormProps {
  children: React.ReactNode
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ children, className, onSubmit }: FormProps) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(e)
  }

  return (
    <form onSubmit={onSubmitHandler} className={`space-y-4 ${className ?? ''}`}>
      {children}
    </form>
  )
}

export default Form
