import { useTranslation } from 'react-i18next'

const ModeDuration = ({
  targetModeNumber,
  modeLengthData,
  label,
  onClick,
}: {
  targetModeNumber: number
  modeLengthData: {
    id: string
    label: string
    value: number
  }[]
  label: string
  onClick: () => void
}) => {
  const { t } = useTranslation()

  const selectedModeMinutes = modeLengthData.find(
    (item) => item.value === targetModeNumber,
  )
  const selectedLabel =
    selectedModeMinutes?.label ?? modeLengthData[0]?.label ?? ''

  return (
    <div className='flex flex-col gap-2 justify-center items-center py-4 rounded-md bg-background-muted'>
      <span className='text-xs text-foreground-muted'>{label}</span>
      <button
        className='text-foreground rounded-xs cursor-pointer text-xl'
        onClick={onClick}
      >
        {t(selectedLabel)}
      </button>
    </div>
  )
}

export default ModeDuration
