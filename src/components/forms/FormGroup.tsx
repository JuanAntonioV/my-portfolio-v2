interface FormGroupProps {
  children: React.ReactNode
  classname?: string
}

const FormGroup = ({ children, classname }: FormGroupProps) => {
  return <div className={`space-y-3 ${classname ?? ''}`}>{children}</div>
}

export default FormGroup
