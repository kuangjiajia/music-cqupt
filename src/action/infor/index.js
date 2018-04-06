import API from '../../api/api.js'

export const ADD_INFOR = 'add-infor'

export const add_infor = data => {
    return {
        type: ADD_INFOR,
        data
    }
}

export const addPublish = num => dispatch => {
    API.getPublish(num).then(({data: {data}}) => {
        dispatch(add_infor(data))
    })
}

export const addAdopt = num => dispatch => {
    API.getPublish(num).then(({data: {data}}) => {
        dispatch(add_infor(data))
    })
}