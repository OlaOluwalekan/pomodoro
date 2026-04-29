import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import {
  FOCUS_LENGTHS,
  LONG_BREAK_LENGTHS,
  PROGRESS_BAR_STYLES_ENUM,
  SHORT_BREAK_LENGTHS,
  TABS_ENUM,
  THEME_ENUM,
  type ProgressBarStyle,
  type Tab,
  type Theme,
} from '../types'

const StoreContext = createContext<{
  activeTab: Tab
  setActiveTab: (val: Tab) => void
  theme: Theme
  setTheme: (val: Theme) => void
  focusTime: number
  setFocusTime: (val: number) => void
  shortBreakTime: number
  setShortBreakTime: (val: number) => void
  longBreakTime: number
  setLongBreakTime: (val: number) => void
  currentSession: number
  setCurrentSession: (val: number) => void
  totalSessions: number
  setTotalSessions: (val: number) => void
  isPaused: boolean
  setIsPaused: (val: boolean) => void
  isStarted: boolean
  setIsStarted: (val: boolean) => void
  time: number
  setTime: (val: number) => void
  start: (initialTime?: number) => void
  intervalRef: RefObject<any>
  remainingRef: RefObject<any>
  clearTimer: () => void
  setAutoStartMode: (val: boolean) => void
  progressStyle: ProgressBarStyle
  setProgressStyle: (val: ProgressBarStyle) => void
}>(null)

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<Tab>(TABS_ENUM.FOCUS)
  const [theme, setTheme] = useState<Theme>(THEME_ENUM.DARK)
  const [focusTime, setFocusTime] = useState(FOCUS_LENGTHS['5_MINUTES'])
  const [shortBreakTime, setShortBreakTime] = useState(
    SHORT_BREAK_LENGTHS['1_MINUTE'],
  )
  const [longBreakTime, setLongBreakTime] = useState(
    LONG_BREAK_LENGTHS['5_MINUTES'],
  )
  const [currentSession, setCurrentSession] = useState(1)
  const [totalSessions, setTotalSessions] = useState(4)
  const [isPaused, setIsPaused] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const remainingRef = useRef(null)
  const intervalRef = useRef(null)
  const [time, setTime] = useState(focusTime)
  const [autoStartMode, setAutoStartMode] = useState(true)
  const [progressStyle, setProgressStyle] = useState<ProgressBarStyle>(
    PROGRESS_BAR_STYLES_ENUM.LINE,
  )

  const clearTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const start = (initialTime = time) => {
    clearTimer()
    setIsStarted(true)
    setIsPaused(false)
    const startedAt = Date.now()
    const initialRemaining = initialTime
    remainingRef.current = initialRemaining

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startedAt
      const next = Math.max(0, initialRemaining - elapsed)
      remainingRef.current = next
      setTime(next)

      if (next <= 0) {
        clearTimer()
        setIsStarted(false)
      }
    }, 16)
  }

  useEffect(() => {
    const modeTime =
      activeTab === TABS_ENUM.FOCUS
        ? focusTime
        : activeTab === TABS_ENUM.SHORT_BREAK
          ? shortBreakTime
          : longBreakTime

    setTime(modeTime)

    if (
      autoStartMode &&
      (currentSession !== 1 || activeTab !== TABS_ENUM.FOCUS)
    ) {
      start(modeTime)
    }
  }, [
    activeTab,
    autoStartMode,
    currentSession,
    focusTime,
    shortBreakTime,
    longBreakTime,
  ])

  return (
    <StoreContext.Provider
      value={{
        activeTab,
        setActiveTab,
        theme,
        setTheme,
        focusTime,
        setFocusTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
        currentSession,
        setCurrentSession,
        totalSessions,
        setTotalSessions,
        isPaused,
        setIsPaused,
        isStarted,
        setIsStarted,
        start,
        time,
        setTime,
        intervalRef,
        remainingRef,
        clearTimer,
        setAutoStartMode,
        progressStyle,
        setProgressStyle,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useGlobalContext = () => useContext(StoreContext)
