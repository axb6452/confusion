import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// Action object created  and returned by arrow function with 4 parameters.
export const addComment = (dishID, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishID: dishID,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => { // This thunk returns an inner function that calls/dispatches several actions. 
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});