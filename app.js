import React           from 'react';
import { Component }   from 'react';
import { render }      from 'react-dom';
import { Dispatcher }  from 'flux';
import { ReduceStore } from 'flux/utils';
import { Container }   from 'flux/utils';

const dispatcher = new Dispatcher();

const action_types = {
  CHANGE_STRING: 'change_string'
};

const actions = {
    change_string(str) {
        dispatcher.dispatch({
            type    : action_types.CHANGE_STRING,
            payload : {
                new_string : str
            }
        });
    }
};
        
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

const store = new Store(dispatcher);

class AppRoot extends Component {
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

class FormInput extends Component {
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

class FormDisplay extends Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
};

const AppContainer = Container.create(AppRoot);

// ReactDom
render(
  <AppContainer />,
  document.getElementById('content')
);
