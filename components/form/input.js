import React           from 'react';
import { Component }   from 'react';
import { render }      from 'react-dom';

import { actions }     from '../../actions/actions'

export class FormInput extends Component {
    _send(e) {
        e.preventDefault();
        actions.change_string(this.refs.myInput.value.trim());
        this.refs.myInput.value = '';
        return;
    }

    render() {
        return (
            <form>
                <input type="text" ref="myInput" defaultValue="" />
                <button onClick={this._send.bind(this)}>Send</button>
            </form>
        );
    }
};
