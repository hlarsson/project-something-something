import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

export default class MessageBoard extends Component {
    
    static propTypes = {
        title   : React.PropTypes.string.isRequired,
        text    : React.PropTypes.string.isRequired 
    }

    static defaultProps = {
        title   : 'New note',
        text    : ''
    };

    render(){
        return (
            <Card style={{width: '350px'}}>
                <CardTitle
                title={this.props.title}
                />
                <CardText>{this.props.text}</CardText>
            </Card>
        );
    }
}
