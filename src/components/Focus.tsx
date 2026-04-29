import { useGlobalContext } from '../providers/store'
import CountDown from './CountDown'

const Focus = ({ time }: { time: number }) => {
  const { focusTime } = useGlobalContext()

  return (
    <div className='flex flex-col items-center w-full'>
      <CountDown remaining={time} init={focusTime} />
    </div>
  )
}

export default Focus
