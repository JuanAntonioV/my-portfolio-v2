interface FormInputProps {
  label?: string
  type?: string
  name?: string
  id?: string
  classNameLabel?: string
  classNameInput?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const FormInput = ({
  label,
  type,
  name,
  id,
  classNameLabel,
  classNameInput,
  onChange,
  value,
}: FormInputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium ${classNameLabel ?? ''}`}
        >
          {label ?? 'Label'}
        </label>
      )}

      <input
        type={type ?? 'text'}
        name={name}
        id={id}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
          classNameInput ?? ''
        }`}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default FormInput
