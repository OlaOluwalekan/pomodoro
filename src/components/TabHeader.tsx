import { useTranslation } from 'react-i18next'
import { tabsData } from '../data'
import { useGlobalContext } from '../providers/store'

const TabHeader = () => {
  const { t } = useTranslation()
  const { activeTab, setActiveTab } = useGlobalContext()

  return (
    <div className='grid grid-cols-3 gap-2 border border-outline rounded-md p-0.5'>
      {tabsData.map((item) => {
        const isActive = activeTab === item.value

        return (
          <button
            key={item.id}
            className={`${isActive ? 'bg-primary/70 cursor-default text-primary-foreground' : 'text-foreground'} py-1.5 rounded-md`}
            onClick={() => setActiveTab(item.value)}
            disabled
          >
            {t(item.label)}
          </button>
        )
      })}
    </div>
  )
}

export default TabHeader
