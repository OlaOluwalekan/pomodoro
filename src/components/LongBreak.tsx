import { useGlobalContext } from '../providers/store'
import CountDown from './CountDown'

const LongBreak = ({ time }: { time: number }) => {
  const { longBreakTime } = useGlobalContext()

  return (
    <div className='flex flex-col items-center w-full'>
      <CountDown remaining={time} init={longBreakTime} />
    </div>
  )
}

export default LongBreak
