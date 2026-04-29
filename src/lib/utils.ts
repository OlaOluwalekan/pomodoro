import { soundsData } from '../data'
import { SOUNDS_ENUM, TABS_ENUM, type Tab } from '../types'

export const getNextTab = (
  activeTab: Tab,
  currentSession: number,
  totalSession: number,
) => {
  const audio = new Audio()
  switch (activeTab) {
    case TABS_ENUM.FOCUS:
      audio.src = soundsData[SOUNDS_ENUM.FOCUS_COMPLETE].value
      audio.play()
      if (currentSession === totalSession) {
        return TABS_ENUM.LONG_BREAK
      }
      return TABS_ENUM.SHORT_BREAK
    case TABS_ENUM.SHORT_BREAK:
      audio.src = soundsData[SOUNDS_ENUM.SHORT_BREAK_COMPLETE].value
      audio.play()
      return TABS_ENUM.FOCUS
    case TABS_ENUM.LONG_BREAK:
      audio.src = soundsData[SOUNDS_ENUM.LONG_BREAK_COMPLETE].value
      audio.play()
      return TABS_ENUM.FOCUS
  }
}
