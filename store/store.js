import { ReduceStore }  from 'flux/utils';
import { action_types } from '../actions/action_types'
import { dispatcher }   from '../dispatcher/dispatcher'

class Store extends ReduceStore {
    getInitialState() {
        return {
            'string': null
        };
    }
    
    reduce(state, act) {
        switch (act.type) {
        case action_types.CHANGE_STRING:
            return {
                'string': act.payload.new_string
            };
        }
    }
};

export const store = new Store(dispatcher);
