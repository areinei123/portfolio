export const CHANGE_THEME = 'CHANGE_THEME'

export const themeTypes = {
  dark: 'dark',
  light: 'light',
  overdrive: 'overdrive'
}

export function changeTheme(theme){
  return {
    type: 'CHANGE_THEME',
    theme: theme
  }
}
