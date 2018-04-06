import API from '../../api/api.js'
export const ADD_PAGE = 'add-page'
export const add_page = (data) => ({
    type: ADD_PAGE,
    data
})

export const loadNewest = num => dispatch => {
    // API.getNewest(num).then(({ data: { data }}) => {
    //     dispatch(add_page(data))
    // })
    API.getNewest(num).then((res) => {
        dispatch(add_page(res.data))
        console.log(res)
    })
}

export const loadReview = num => dispatch => {
    API.getReview(num).then(({ data: {data }}) => {
        dispatch(add_page(data))
    })
}