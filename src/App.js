import React, {Component} from 'react';
//import './App.css';
import Layout from './components/Layout';

export default class App extends Component{
  constructor(props){
    super (props);
    this.state = {
      subscribed: false,
    }
  }

//Java Script event handler 
onFormSubmit(e){
  e.preventDefault();
  console.log(e);
}

render(){
  return(
    <div className="App">
    <Layout 
    formSubmit={(e)=> this.onFormSubmit(e)} 
    subscribed={this.state.subscribed}/>
    </div>
  );
}
}


