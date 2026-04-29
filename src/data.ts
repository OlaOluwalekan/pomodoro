import {
  FOCUS_LENGTHS,
  LONG_BREAK_LENGTHS,
  PROGRESS_BAR_STYLES_ENUM,
  SHORT_BREAK_LENGTHS,
  SOUNDS_ENUM,
  TABS_ENUM,
} from './types'
import focusCompleteSound from './assets/sounds/FOCUS_COMPLETE.mp3'
import shortBreakCompleteSound from './assets/sounds/SHORT_BREAK_COMPLETE.mp3'
import longBreakCompleteSound from './assets/sounds/LONG_BREAK_COMPLETE.mp3'

export const tabsData = [
  {
    id: TABS_ENUM.FOCUS,
    label: 'tabs.header.focus',
    value: TABS_ENUM.FOCUS,
  },
  {
    id: TABS_ENUM.SHORT_BREAK,
    label: 'tabs.header.short_break',
    value: TABS_ENUM.SHORT_BREAK,
  },
  {
    id: TABS_ENUM.LONG_BREAK,
    label: 'tabs.header.long_break',
    value: TABS_ENUM.LONG_BREAK,
  },
]

export const soundsData = {
  [SOUNDS_ENUM.FOCUS_COMPLETE]: {
    id: SOUNDS_ENUM.FOCUS_COMPLETE,
    label: 'sounds.focus_complete',
    value: focusCompleteSound,
  },
  [SOUNDS_ENUM.SHORT_BREAK_COMPLETE]: {
    id: SOUNDS_ENUM.SHORT_BREAK_COMPLETE,
    label: 'sounds.short_break_complete',
    value: shortBreakCompleteSound,
  },
  [SOUNDS_ENUM.LONG_BREAK_COMPLETE]: {
    id: SOUNDS_ENUM.LONG_BREAK_COMPLETE,
    label: 'sounds.long_break_complete',
    value: longBreakCompleteSound,
  },
}

export const focusLengths = Array.from(Object.keys(FOCUS_LENGTHS), (key) => ({
  id: key,
  label: `durations.minutes.${key}`,
  value: FOCUS_LENGTHS[key as keyof typeof FOCUS_LENGTHS],
}))

export const shortBreakLengths = Array.from(
  Object.keys(SHORT_BREAK_LENGTHS),
  (key) => ({
    id: key,
    label: `durations.minutes.${key}`,
    value: SHORT_BREAK_LENGTHS[key as keyof typeof SHORT_BREAK_LENGTHS],
  }),
)

export const longBreakLengths = Array.from(
  Object.keys(LONG_BREAK_LENGTHS),
  (key) => ({
    id: key,
    label: `durations.minutes.${key}`,
    value: LONG_BREAK_LENGTHS[key as keyof typeof LONG_BREAK_LENGTHS],
  }),
)

export const progressBarStyles = Array.from(
  Object.keys(PROGRESS_BAR_STYLES_ENUM),
  (key) => ({
    id: key,
    label: `settings.progress_bar_style.${key}`,
    value:
      PROGRESS_BAR_STYLES_ENUM[key as keyof typeof PROGRESS_BAR_STYLES_ENUM],
  }),
)
