import DurationSettings from './components/DurationSettings'
import Modes from './components/Modes'
import Settings from './components/Settings'
import TabHeader from './components/TabHeader'
import Toast from './components/Toast'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-background text-foreground'>
      <div className='w-[90%] max-w-[600px] flex flex-col gap-5'>
        <TabHeader />

        <Modes />

        <DurationSettings />

        <Settings />

        <Toast />
      </div>
    </div>
  )
}

export default App
