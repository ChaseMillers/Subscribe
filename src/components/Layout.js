import React, {Component} from 'react';
import Form from './Subscribe';

export default class Layout extends Component{
    render(){
        return(
            <div className="Layout">
                <Form formSubmit={this.props.onFormSubmit} subscribed={this.props.subscribeded}/>
            </div>
        )
    }
}