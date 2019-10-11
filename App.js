/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import Login from './src/login/loging.js';

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        currentView: 'Login',
      };
    }


    render(){

      var  activeView  = this.state.currentView;
      if (activeView == 'Login') {
        return(
          <Login 
          press={this.pressEvent}
          />
        );
      }else{
        return(
          <Text>
            Hola
          </Text>
        );
      }
    }

    pressEvent = ()=> {
      this.setState({
        currentView:'Home',
      });
    }    
  
  }
export default App;
