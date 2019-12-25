// Configure store in this file and export 
import { createStore, combineReducers, applyMiddleware } from 'redux'; //allows creation of redux store; combineReducers enables individual reducers to be combined.
import { createForms } from 'react-redux-form'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer,
        // initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback // React-Redux form brings in its own set of support on our behalf. Therefore, we do not need to write our own reducers, action creators and so on..
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
