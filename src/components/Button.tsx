import type { ReactNode } from 'react'

const Button = ({
  Icon,
  label,
  onClick,
}: {
  Icon?: ReactNode
  label: string
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className='flex items-center gap-2 border border-outline px-5 py-2 rounded-md cursor-pointer'
    >
      {Icon && Icon}
      {label}
    </button>
  )
}

export default Button
