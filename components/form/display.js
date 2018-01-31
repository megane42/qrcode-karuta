import React           from 'react';
import { Component }   from 'react';
import { render }      from 'react-dom';

export class FormDisplay extends Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
};
