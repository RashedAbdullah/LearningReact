import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';

class MainPage extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         LoggedIn: false
      }
    }

  render() {
    
    //     //if else (whit multple returns):
    //    if(this.state.LoggedIn){
    //     return <Home />
    //    } else {
    //     return <Login />
    //    }



    //    //with one return:
       let Element;
       if(this.state.LoggedIn){
        Element  = <Home />
       } else {
        Element = <Login />
       }



    //with turnery Operator
    // Element = LoggedIn ? <Home /> : <Login /> (it's not working, why?)



       return (
        <div>
            {Element}
        </div>
       )



  }
}

export default MainPage;
