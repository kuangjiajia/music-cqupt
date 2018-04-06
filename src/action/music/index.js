import API from '../../api/api.js'

export const ADD_MUSIC = 'add-music'

export const addMusic = (data) => {
    return {
        type: ADD_MUSIC,
        data
    }
}

export const subMusic = json => dispatch => {
    dispatch(addMusic(json))
    // API.subMusic(json).then(res => {
    //     dispatch(addMusic(json))
    // })
}