import DurationSettings from './components/DurationSettings'
import Modes from './components/Modes'
import Settings from './components/Settings'
import TabHeader from './components/TabHeader'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-background'>
      <div className='w-[90%] max-w-[600px] flex flex-col gap-5'>
        <TabHeader />

        <Modes />

        <DurationSettings />

        <Settings />
      </div>
    </div>
  )
}

export default App
