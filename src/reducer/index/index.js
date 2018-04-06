import { ADD_PAGE  } from '../../action/index/index.js'
import { ADD_MUSIC } from '../../action/music/index.js'
const initialState = []

export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_PAGE: {
            return [...state,...action.data]
        }
        case ADD_MUSIC: {
            return [action.data,...state]
        }
        default:
            return state
    }
}



