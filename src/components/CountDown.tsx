import { useMemo } from 'react'
import { useGlobalContext } from '../providers/store'
import { PROGRESS_BAR_STYLES_ENUM } from '../types'

const CountDown = ({
  init,
  remaining,
}: {
  init: number
  remaining: number
}) => {
  const minutes = Math.floor(remaining / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)
  const { progressStyle } = useGlobalContext()

  const progress = useMemo(() => (remaining / init) * 100, [remaining, init])

  const radius = 60
  const stroke = 4
  const trackStroke = 8
  const normalizedRadius = radius - trackStroke / 2
  const circumference = 2 * Math.PI * normalizedRadius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className='w-full flex flex-col items-center my-5'>
      <div className='relative flex items-center justify-center'>
        {progressStyle === PROGRESS_BAR_STYLES_ENUM.CIRCLE && (
          <svg
            height={radius * 2}
            width={radius * 2}
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              stroke='currentColor'
              className='text-background'
              fill='transparent'
              strokeWidth={trackStroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke='currentColor'
              className='text-primary transition-all duration-1000 ease-linear'
              fill='transparent'
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap='round'
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>
        )}

        <h1
          className={`font-semibold tracking-tight ${progressStyle === PROGRESS_BAR_STYLES_ENUM.CIRCLE ? 'absolute text-4xl' : 'static text-8xl'}`}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </h1>
      </div>

      {progressStyle === PROGRESS_BAR_STYLES_ENUM.LINE && (
        <div className='w-full bg-background h-2 mt-5 p-0.5 rounded-full'>
          <div
            className='bg-primary h-full transition-all rounded-full'
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  )
}

export default CountDown
