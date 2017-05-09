import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,

  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGES_REQUEST:
      return []
    case LOAD_PAGES_SUCCESS:
      return action.payload
    case LOAD_PAGES_FAILURE:
      return action.payload
    case LOAD_PAGE_SUCCESS:
      return [action.payload]
    default:
      return state
  }
}

export const getPageById = (state, id) => (
  state.pages.find((page) => page.id === +id) || { title: '', content: '' }
)

export const getFlashMessage = (state) => {
  if (state.pages === 'error')
    return 'Error';
  else if (state.pages.length === 0)
    return 'Loading...'
  else
    return ''
}
