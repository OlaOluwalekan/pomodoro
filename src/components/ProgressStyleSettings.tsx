import { useTranslation } from 'react-i18next'
import { PROGRESS_BAR_STYLES_ENUM } from '../types'
import { useGlobalContext } from '../providers/store'
import { progressBarStyles } from '../data'

const ProgressStyleSettings = () => {
  const { t } = useTranslation()
  const { progressStyle, setProgressStyle } = useGlobalContext()

  const handleClick = () => {
    if (progressStyle === PROGRESS_BAR_STYLES_ENUM.CIRCLE) {
      setProgressStyle(PROGRESS_BAR_STYLES_ENUM.LINE)
    } else {
      setProgressStyle(PROGRESS_BAR_STYLES_ENUM.CIRCLE)
    }
  }
  return (
    <div className='flex flex-col gap-0.5'>
      <p className='text-[8px] uppercase text-foreground-muted'>
        {t('settings.progress_bar_style.title')}
      </p>

      <button
        className='flex w-32 relative cursor-pointer border border-primary rounded-sm overflow-hidden'
        onClick={handleClick}
      >
        <div
          className={`h-full w-16 absolute bg-primary transition-all rounded-xs ${progressStyle === PROGRESS_BAR_STYLES_ENUM.CIRCLE ? 'translate-x-0' : 'translate-x-full'}`}
        ></div>
        {progressBarStyles.map((item) => {
          return (
            <div
              key={item.id}
              className={`w-16 z-10 text-sm ${progressStyle === item.value ? 'text-primary-foreground' : 'text-foreground'}`}
            >
              {t(item.label)}
            </div>
          )
        })}
      </button>
    </div>
  )
}

export default ProgressStyleSettings
