export const NAVIGATE_TO_PAGE = 'NAVIGATE_TO_PAGE'

export const pageTypes = {
  home: 'home',
  resume: 'resume',
  projects: 'projects',
  blog: 'blog'
}

export function navigateToPage(page){
  return {
    type: NAVIGATE_TO_PAGE,
    page: page
  }
}