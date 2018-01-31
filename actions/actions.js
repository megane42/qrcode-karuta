import { dispatcher }   from '../dispatcher/dispatcher'
import { action_types } from './action_types'

export const actions = {
    change_string(str) {
        dispatcher.dispatch({
            type    : action_types.CHANGE_STRING,
            payload : {
                new_string : str
            }
        });
    }
};
