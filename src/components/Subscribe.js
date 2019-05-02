import React, {Component} from 'react';

export default class Form extends Component{
    render(){
        return(
            <div className="subscribe">
                <form onSubmit= {this.props.onFormSubmit} >
                    <label> Email</label>
                    <input type='text' id='inputEmail' placeholder='email'/>
                    <button>Subscribe</button>
                </form>
                {/*if the state of subscribe is true, display message 1 if not, message 2*/}
                <p className='text-success'>{this.props.subscribed ? 'Thanks for Subscribing!' : ''}</p>
            </div>
        )
    }
}