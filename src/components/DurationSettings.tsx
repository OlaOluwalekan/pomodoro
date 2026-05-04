import { useTranslation } from 'react-i18next'
import { focusLengths, longBreakLengths, shortBreakLengths } from '../data'
import { useGlobalContext } from '../providers/store'
import ModeDuration from './ModeDuration'
import DurationModal from './DurationModal'
import { useState } from 'react'
import { TABS_ENUM, type Tab } from '../types'

const DurationSettings = () => {
  const { focusTime, shortBreakTime, longBreakTime } = useGlobalContext()
  const { t } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState(focusLengths)
  const [modalContext, setModalContext] = useState<Tab>(TABS_ENUM.FOCUS)

  const handleModalDataChange = (
    data: {
      id: string
      label: string
      value: number
    }[],
    context: Tab,
  ) => {
    setModalData(data)
    setModalContext(context)
    setModalIsOpen(true)
  }

  return (
    <div className='text-foreground grid grid-cols-3 gap-3'>
      <ModeDuration
        label={t('durations.focus_duration')}
        targetModeNumber={focusTime}
        modeLengthData={focusLengths}
        onClick={() => handleModalDataChange(focusLengths, TABS_ENUM.FOCUS)}
      />
      <ModeDuration
        label={t('durations.short_break_duration')}
        targetModeNumber={shortBreakTime}
        modeLengthData={shortBreakLengths}
        onClick={() =>
          handleModalDataChange(shortBreakLengths, TABS_ENUM.SHORT_BREAK)
        }
      />
      <ModeDuration
        label={t('durations.long_break_duration')}
        targetModeNumber={longBreakTime}
        modeLengthData={longBreakLengths}
        onClick={() =>
          handleModalDataChange(longBreakLengths, TABS_ENUM.LONG_BREAK)
        }
      />
      {modalIsOpen && (
        <DurationModal
          data={modalData}
          modalContext={modalContext}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </div>
  )
}

export default DurationSettings
