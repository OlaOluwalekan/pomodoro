import { useEffect, useState, type ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useGlobalContext } from '../providers/store'

const MINIMUM_ALLOWABLE_SESSION = 1
const MAXIMUM_ALLOWABLE_SESSION = 10

const SessionsSetting = () => {
  const { t } = useTranslation()
  const { totalSessions, setTotalSessions, toast } = useGlobalContext()
  const [value, setValue] = useState(totalSessions)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyStroke = e.target.value
    const num = Number(keyStroke)
    if (num > MAXIMUM_ALLOWABLE_SESSION) {
      setValue(MAXIMUM_ALLOWABLE_SESSION)
      return
    }
    if (num < MINIMUM_ALLOWABLE_SESSION) {
      setValue(MINIMUM_ALLOWABLE_SESSION)
      return
    }
    if (num) {
      setValue(num)
    }
  }

  const handleIncrease = () => {
    if (value !== MAXIMUM_ALLOWABLE_SESSION) {
      setValue((prev) => prev + 1)
      return
    }
    toast.error(
      t('settings.sessions.toasts.max_value_error', {
        max: MAXIMUM_ALLOWABLE_SESSION,
      }),
    )
  }

  const handleDecrease = () => {
    if (value !== MINIMUM_ALLOWABLE_SESSION) {
      setValue((prev) => prev - 1)
      return
    }
    toast.error(
      t('settings.sessions.toasts.min_value_error', {
        min: MINIMUM_ALLOWABLE_SESSION,
      }),
    )
  }

  useEffect(() => {
    setTotalSessions(value)
  }, [value])

  return (
    <div className='flex flex-col gap-0.5'>
      <p className='text-[8px] uppercase text-foreground-muted'>
        {t('settings.sessions.title')}
      </p>

      <section className='border border-primary rounded-sm overflow-hidden'>
        <button
          className='bg-primary text-primary-foreground px-2 cursor-pointer'
          onClick={handleDecrease}
        >
          -
        </button>
        <input
          type='text'
          inputMode='numeric'
          className='max-w-10 rounded-sm focus:outline-none px-2 text-sm text-center'
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <button
          className='bg-primary text-primary-foreground px-2 cursor-pointer'
          onClick={handleIncrease}
        >
          +
        </button>
      </section>
    </div>
  )
}

export default SessionsSetting
