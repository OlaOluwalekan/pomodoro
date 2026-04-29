import { useEffect, useMemo } from 'react'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import ResetIcon from '../icons/ResetIcon'
import SkipIcon from '../icons/SkipIcon'
import { useGlobalContext } from '../providers/store'
import Button from './Button'
import { getNextTab } from '../lib/utils'
import { TABS_ENUM } from '../types'
import { useTranslation } from 'react-i18next'

const Controls = () => {
  const {
    setActiveTab,
    focusTime,
    activeTab,
    currentSession,
    totalSessions,
    setCurrentSession,
    shortBreakTime,
    longBreakTime,
    isStarted,
    setIsStarted,
    isPaused,
    setIsPaused,
    clearTimer,
    start,
    time,
    setTime,
  } = useGlobalContext()
  const { t } = useTranslation()

  const nextTab = useMemo(
    () => getNextTab(activeTab, currentSession, totalSessions),
    [activeTab, currentSession, totalSessions],
  )

  const reset = () => {
    clearTimer()
    setIsPaused(false)
    setIsStarted(false)

    if (activeTab === TABS_ENUM.FOCUS) {
      setTime(focusTime)
    } else if (activeTab === TABS_ENUM.SHORT_BREAK) {
      setTime(shortBreakTime)
    } else {
      setTime(longBreakTime)
    }
  }

  const handleNext = () => {
    clearTimer()
    setActiveTab(nextTab)
    if (activeTab === TABS_ENUM.SHORT_BREAK) {
      setCurrentSession(currentSession + 1)
    }
    if (activeTab === TABS_ENUM.LONG_BREAK) {
      setCurrentSession(1)
    }
  }

  useEffect(() => {
    if (time === 0) {
      setIsPaused(false)
      setIsStarted(false)
      clearTimer()

      setTimeout(() => {
        handleNext()
      }, 2000)
    }
  }, [time])

  return (
    <div className='flex gap-2'>
      <Button label={t('buttons.reset')} Icon={<ResetIcon />} onClick={reset} />
      <Button
        label={t(
          isStarted
            ? isPaused
              ? 'buttons.continue'
              : 'buttons.pause'
            : 'buttons.start',
        )}
        Icon={!isStarted || isPaused ? <PlayIcon /> : <PauseIcon />}
        onClick={() => {
          if (!isStarted || isPaused) {
            start()
          } else {
            clearTimer()
            setIsPaused(true)
          }
        }}
      />
      <Button
        label={t('buttons.skip')}
        Icon={<SkipIcon />}
        onClick={handleNext}
      />
    </div>
  )
}
export default Controls
