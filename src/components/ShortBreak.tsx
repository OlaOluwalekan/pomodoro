import { useGlobalContext } from '../providers/store'
import CountDown from './CountDown'

const ShortBreak = ({ time }: { time: number }) => {
  const { shortBreakTime } = useGlobalContext()

  return (
    <div className='flex flex-col items-center w-full'>
      <CountDown remaining={time} init={shortBreakTime} />
    </div>
  )
}

export default ShortBreak
