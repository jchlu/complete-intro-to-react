import { SET_SERACH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  // .assign merges objects with last things added  in the chain getting precedence in a clash
  const newState = {}
  Object.assign(newState, state, {
    searchTerm: action.searchTerm
  })
  return newState
  /*
   * could be written w/o the initial var declaration in the following single line:
   * return Object.assign({}, state, { searchTerm: action.searchTerm })
   * */
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case:
      SET_SERACH_TERM:
        return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
