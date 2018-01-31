import React           from 'react';
import { Component }   from 'react';
import { render }      from 'react-dom';

import { store }       from '../store/store';
import { FormInput }   from './form/input';
import { FormDisplay } from './form/display';

export class AppRoot extends Component {
    static getStores() {
        return [ store ];
    }

    static calculateState(prev_state) {
        return store.getState();
    }

    render() {
        return (
            <div>
                <FormInput />
                <FormDisplay data={this.state.string} />
            </div>
        );
    }
}
