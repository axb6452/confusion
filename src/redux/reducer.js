import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = { // initial configuration for state. 
    dishes: DISHES,
    promotions: PROMOTIONS,
    comments: COMMENTS,
    leaders: LEADERS
}

//Reducer function that receives current state and an action. 
// State is not modified directly. Only an immutable change is made resulting in an updated state returned from the reducer function below. 
export const Reducer = (state = initialState, action) => {
    return state;
};
