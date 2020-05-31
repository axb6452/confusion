import * as ActionTypes from './ActionTypes';

// reducer
export const Dishes = (state =
    {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload } //action.payload carries dishes information. 

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] } // spread operator; whatever the state is, the same state will be taken and added to. 
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, dishes: [] }  // action.payload contains the error message
        default:
            return state
    }
}