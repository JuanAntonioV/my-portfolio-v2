interface ErrorAlertProps {
  message?: string
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div
      className="bg-red-100 border text-red-700 px-4 py-3 rounded relative space-x-1"
      role="alert"
    >
      <span className="block sm:inline text-sm font-medium">
        {message ?? 'Error Message'}
      </span>
    </div>
  )
}

export default ErrorAlert
