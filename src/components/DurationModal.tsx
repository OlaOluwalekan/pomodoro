import { useTranslation } from 'react-i18next'
import { TABS_ENUM, type Tab } from '../types'
import { useGlobalContext } from '../providers/store'
import { useMemo } from 'react'

const DurationModal = ({
  data,
  modalContext,
  onClose,
}: {
  data: {
    id: string
    label: string
    value: number
  }[]
  modalContext: Tab
  onClose: () => void
}) => {
  const { t } = useTranslation()
  const {
    setFocusTime,
    setShortBreakTime,
    setLongBreakTime,
    focusTime,
    shortBreakTime,
    longBreakTime,
  } = useGlobalContext()

  const { title, selectedValue } = useMemo(() => {
    let title = ''
    let selectedValue: number
    if (modalContext === TABS_ENUM.FOCUS) {
      title = t('tabs.header.focus')
      selectedValue = focusTime
    } else if (modalContext === TABS_ENUM.SHORT_BREAK) {
      title = t('tabs.header.short_break')
      selectedValue = shortBreakTime
    } else {
      title = t('tabs.header.long_break')
      selectedValue = longBreakTime
    }

    return { title, selectedValue }
  }, [modalContext, focusTime, shortBreakTime, longBreakTime])

  const handleClick = (value: number) => {
    if (modalContext === TABS_ENUM.FOCUS) {
      setFocusTime(value)
    } else if (modalContext === TABS_ENUM.SHORT_BREAK) {
      setShortBreakTime(value)
    } else {
      setLongBreakTime(value)
    }
  }

  return (
    <div
      className='w-screen h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-md z-30 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        className='w-[90%] max-w-[600px] bg-background p-4 rounded-md'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='mb-3'>
          {t('durations.select_duration_for')} {title}
        </h3>

        <div className='flex flex-wrap gap-1'>
          {data.map((item) => {
            return (
              <button
                className={`text-xs border px-2 rounded-sm cursor-pointer ${selectedValue === item.value ? 'bg-primary/70 text-primary-foreground' : ''}`}
                key={item.id}
                onClick={() => handleClick(item.value)}
              >
                {t(item.label)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DurationModal
