import { atom } from 'recoil'

export const isDarkModeState = atom({
  key: 'isDarkModeState', // unique ID (with respect to other atoms/selectors)
  default: (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)), // default value (aka initial value)
})
