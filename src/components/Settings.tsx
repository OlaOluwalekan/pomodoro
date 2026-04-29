import ProgressStyleSettings from './ProgressStyleSettings'
import Theme from './Theme'

const Settings = () => {
  return (
    <div className='border border-outline rounded-md p-1.5 flex items-center justify-center gap-2 text-foreground'>
      <Theme />

      <ProgressStyleSettings />
    </div>
  )
}

export default Settings
