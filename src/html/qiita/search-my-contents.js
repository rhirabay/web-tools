const GET_ITEMS = 'get items'
const CHANGE_FILTER = 'change filter'

const getItemsAction = (items) => ({
    type: GET_ITEMS,
    items
})

const changeFilterAction = (filter) => ({
    type: CHANGE_FILTER,
    filter
})

const getItemsMiddleware = () => {
    return (dispatch) => {
        let url = 'https://qiita.com/api/v2/users/rhirabay/items'
        return axios.get(url).then(res => {
            console.log(typeof res.data)
            let items = res.data.map((value) => ({
                title: value.title,
                url: value.url,
                lowerTitle: value.title.toLowerCase()
            }))
            dispatch(getItemsAction(items))
        })
    }
}

const initialState = {
    debug: 'hello world',
    items: [],
    filter: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return Object.assign({}, state, {
                items: action.items
            })
        case CHANGE_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            })
        default:
            return state
    }
}

function mapStateToFilteredItems(state) {
    let items = state.items
    let filters = state.filter.split(' ')
    return items.filter(item => {
        for (let filter of filters) {
            if (item.lowerTitle.indexOf(filter) == -1) {
                return false
            }
        }
        return true
    })
}