import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// Receive action type and act on it. 
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload
            comment.id = state.length; //In future, server will generate comment ID for us. 
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment); // We cannot modify state sent in as a parameter. Therefore, we use the concat() function on an array that JS supports. This will push in a new element into the array and generates a new object that is returned. Therefore, state is not mutated, but concatenated. 
                                            // We are adding the comment in memory. When application is restarted, any comments will be lost as we are not persisting the comments in a storage source. 
            break;
        default:
            return state
            break;
    }
}