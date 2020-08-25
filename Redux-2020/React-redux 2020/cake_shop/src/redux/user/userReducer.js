import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './userTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: true,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: true,
                users: [],
                error: action.payload
            }
    }
}
export default reducer