import * as ActionTypes from './ActionTypes'
// import { actionTypes } from 'react-redux-form';

// import { LEADERS } from '../shared/leaders';

// export const Leaders = (state = LEADERS, action) => {
//     switch (action.type) {
//         default:
//             return state
//             break;
//     }
// }

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload}
            break;
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}
            break;
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, leaders: []}
            break;
        default:
            return state
            break;
    }
}