import { ADD_INFOR } from '../../action/infor/index.js'
import { ADD_MUSIC } from '../../action/music/index.js'

const initialState = []

export default (state = initialState,action) => {
    switch (action.type) {
        case ADD_INFOR: {
            return [...state,...action.data]
        }
        case ADD_MUSIC: {
            return [action.data,...state]
        }
        default:
            return state
    }
}