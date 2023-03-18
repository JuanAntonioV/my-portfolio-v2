interface WrapperProps {
    children: React.ReactNode
    className?: string
}

const Wrapper = ({children, className}: WrapperProps) => {
  return (
    <div className={`p-4 ${className ?? ''}`}>
        {children}
    </div>
  )
}

export default Wrapper