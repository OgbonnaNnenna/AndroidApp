/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
   StyleSheet, 
   Text,
    View,
    Button,
    TextInput
  } from 'react-native';

  function func2(){
    console.log(this)
  }
import { blue } from 'ansi-colors';


export default class App extends Component {

  constructor(){
    super()

  }


  render() {
    return (
      <View style={styles.container}>
      <Text>Username</Text>
        <TextInput
        
        /> 
      <Text>password</Text>
        <TextInput 
        /> 
        <Button title={'Hello'}/>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20
  }
})
