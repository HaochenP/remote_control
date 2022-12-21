import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
import io from 'socket.io-client';
//import React, { useState } from 'react';
import Buttons from './assets/Buttons';
import PopUpInput from './assets/PopUpInput';
import { AntDesign } from '@expo/vector-icons'; 
import MouseMove from './assets/MouseMove';

//const socket = io();


export default function App() {
  const ipAddress = 'https://95ee-109-149-104-156.eu.ngrok.io'
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

   

  return (
    <View style={styles.container}>
      <Buttons name='ctrl-w' ipAddress = {ipAddress}/>
        <Buttons name='new page' ipAddress = {ipAddress}/>
      <Buttons name='new youtube page' ipAddress = {ipAddress} />
      <PopUpInput ipAddress = {ipAddress}/>
      <MouseMove direction = "up" ipAddress = {ipAddress}/>
      <MouseMove direction = "down" ipAddress = {ipAddress}/>
      <MouseMove direction = "left" ipAddress = {ipAddress}/>
      <MouseMove direction = "right" ipAddress = {ipAddress}/>
      <MouseMove direction = "click" ipAddress = {ipAddress}/>
      <MouseMove direction = "enter" ipAddress = {ipAddress}/>
    </View>
  );



}
