import { useEffect } from 'react'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'
import { useGlobalContext } from '../providers/store'
import { THEME_ENUM } from '../types'
import { useTranslation } from 'react-i18next'

const Theme = () => {
  const { theme, setTheme } = useGlobalContext()
  const { t } = useTranslation()

  const SIZE = 12

  const toggleTheme = () => {
    if (theme === THEME_ENUM.LIGHT) {
      setTheme(THEME_ENUM.DARK)
    } else {
      setTheme(THEME_ENUM.LIGHT)
    }
  }

  useEffect(() => {
    const isDark = theme === THEME_ENUM.DARK

    document.documentElement.classList.toggle('dark', isDark)
  }, [theme])

  return (
    <div className='flex flex-col gap-0.5'>
      <p className='text-[8px] uppercase text-foreground-muted'>
        {t('settings.theme.title')}
      </p>

      <button
        className='border-[1.5px] border-primary rounded-full cursor-pointer'
        style={{
          width: (SIZE + 5) * 2,
        }}
        onClick={toggleTheme}
      >
        <span
          className={`${theme === THEME_ENUM.DARK ? 'translate-x-[90%]' : 'translate-x-0'} flex justify-center items-center transition-all bg-primary rounded-full`}
          style={{
            width: SIZE + 5,
            height: SIZE + 5,
          }}
        >
          {theme === THEME_ENUM.LIGHT ? (
            <SunIcon size={SIZE} />
          ) : (
            <MoonIcon size={SIZE} />
          )}
        </span>
      </button>
    </div>
  )
}

export default Theme
