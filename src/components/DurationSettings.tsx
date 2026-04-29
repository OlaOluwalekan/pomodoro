import { useTranslation } from 'react-i18next'
import { focusLengths, longBreakLengths, shortBreakLengths } from '../data'
import { useGlobalContext } from '../providers/store'
import ModeDuration from './ModeDuration'

const DurationSettings = () => {
  const { focusTime, shortBreakTime, longBreakTime } = useGlobalContext()
  const { t } = useTranslation()

  return (
    <div className='text-foreground grid grid-cols-3 gap-3'>
      <ModeDuration
        label={t('durations.focus_duration')}
        targetModeNumber={focusTime}
        modeLengthData={focusLengths}
      />
      <ModeDuration
        label={t('durations.short_break_duration')}
        targetModeNumber={shortBreakTime}
        modeLengthData={shortBreakLengths}
      />
      <ModeDuration
        label={t('durations.long_break_duration')}
        targetModeNumber={longBreakTime}
        modeLengthData={longBreakLengths}
      />
    </div>
  )
}

export default DurationSettings
