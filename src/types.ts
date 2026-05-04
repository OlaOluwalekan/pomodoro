export const TABS_ENUM = {
  FOCUS: 'FOCUS',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK',
} as const

export type Tab = (typeof TABS_ENUM)[keyof typeof TABS_ENUM]

export const THEME_ENUM = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const

export type Theme = (typeof THEME_ENUM)[keyof typeof THEME_ENUM]

export const FOCUS_LENGTHS = {
  '5_MINUTES': 5 * 60 * 1000,
  '10_MINUTES': 10 * 60 * 1000,
  '15_MINUTES': 15 * 60 * 1000,
  '20_MINUTES': 20 * 60 * 1000,
  '25_MINUTES': 25 * 60 * 1000,
  '30_MINUTES': 30 * 60 * 1000,
  '35_MINUTES': 35 * 60 * 1000,
  '40_MINUTES': 40 * 60 * 1000,
  '45_MINUTES': 45 * 60 * 1000,
  '50_MINUTES': 50 * 60 * 1000,
  '55_MINUTES': 55 * 60 * 1000,
  '60_MINUTES': 60 * 60 * 1000,
} as const

export type FocusLength = (typeof FOCUS_LENGTHS)[keyof typeof FOCUS_LENGTHS]

export const SHORT_BREAK_LENGTHS = {
  '1_MINUTE': 1 * 60 * 1000,
  '2_MINUTES': 2 * 60 * 1000,
  '3_MINUTES': 3 * 60 * 1000,
  '4_MINUTES': 4 * 60 * 1000,
  '5_MINUTES': 5 * 60 * 1000,
  '6_MINUTES': 6 * 60 * 1000,
  '7_MINUTES': 7 * 60 * 1000,
  '8_MINUTES': 8 * 60 * 1000,
  '9_MINUTES': 9 * 60 * 1000,
  '10_MINUTES': 10 * 60 * 1000,
} as const

export type ShortBreakLength =
  (typeof SHORT_BREAK_LENGTHS)[keyof typeof SHORT_BREAK_LENGTHS]

export const LONG_BREAK_LENGTHS = {
  '5_MINUTES': 5 * 60 * 1000,
  '10_MINUTES': 10 * 60 * 1000,
  '15_MINUTES': 15 * 60 * 1000,
  '20_MINUTES': 20 * 60 * 1000,
  '25_MINUTES': 25 * 60 * 1000,
  '30_MINUTES': 30 * 60 * 1000,
} as const

export type LongBreakLength =
  (typeof LONG_BREAK_LENGTHS)[keyof typeof LONG_BREAK_LENGTHS]

export const SOUNDS_ENUM = {
  FOCUS_COMPLETE: 'FOCUS_COMPLETE',
  SHORT_BREAK_COMPLETE: 'SHORT_BREAK_COMPLETE',
  LONG_BREAK_COMPLETE: 'LONG_BREAK_COMPLETE',
} as const

export type Sound = (typeof SOUNDS_ENUM)[keyof typeof SOUNDS_ENUM]

export const PROGRESS_BAR_STYLES_ENUM = {
  CIRCLE: 'CIRCLE',
  LINE: 'LINE',
} as const

export type ProgressBarStyle =
  (typeof PROGRESS_BAR_STYLES_ENUM)[keyof typeof PROGRESS_BAR_STYLES_ENUM]

export interface ToastProps {
  show: boolean
  message: string
  type: 'success' | 'error'
}
