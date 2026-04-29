import { useGlobalContext } from '../providers/store'
import { TABS_ENUM } from '../types'
import Focus from './Focus'
import LongBreak from './LongBreak'
import ShortBreak from './ShortBreak'
import Controls from './Controls'
import { useTranslation } from 'react-i18next'

const Modes = () => {
  const { activeTab, totalSessions, currentSession, time } = useGlobalContext()
  const { t } = useTranslation()

  const sessionsList = Array.from({ length: totalSessions }, (_, i) => i + 1)

  return (
    <div className='bg-background-muted text-foreground-muted p-3 rounded-md flex flex-col items-center w-full'>
      <div className='uppercase text-xs'>
        {t('session.session')} {currentSession} {t('session.of')}{' '}
        {totalSessions}
      </div>

      {activeTab === TABS_ENUM.FOCUS && <Focus time={time} />}
      {activeTab === TABS_ENUM.SHORT_BREAK && <ShortBreak time={time} />}
      {activeTab === TABS_ENUM.LONG_BREAK && <LongBreak time={time} />}

      <Controls />

      <div className='mt-8 flex items-center gap-2'>
        <div className='flex gap-1'>
          {sessionsList.map((session) => {
            const isCompleted = currentSession > session

            return (
              <div
                className={`w-2 aspect-square rounded-full ${isCompleted ? 'bg-primary' : 'bg-background'}`}
                key={session}
              ></div>
            )
          })}
        </div>

        <p className='text-xs'>
          {currentSession > 1 && currentSession - 1}{' '}
          <span>
            {currentSession === 1
              ? t('session.none_done')
              : t('session.pomodoros_done')}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Modes
