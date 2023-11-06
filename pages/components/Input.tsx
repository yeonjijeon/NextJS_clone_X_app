import type { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
  placeholder: string
  type: string
  autoComplete?: string
  register: UseFormRegisterReturn
  required: boolean
}

export default function Input({
  placeholder,
  type,
  autoComplete,
  register,
  required,
}: InputProps) {
  return (
    <input
      {...register}
      required={required}
      type={type}
      autoComplete={autoComplete}
      className="appearance-none w-full h-14 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
      placeholder={placeholder}
    />
  )
}
