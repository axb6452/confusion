// Configure store in this file and export 
import { createStore } from 'redux'; //allows creation of redux store
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}
