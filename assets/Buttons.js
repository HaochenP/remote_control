import React from "react";
import PropTypes from "prop-types";
import io from 'socket.io-client';
import { StyleSheet, Text, View, Button} from 'react-native';



export default Buttons = (props) => {
  const ipAddress = props.ipAddress;
  
  /*
  var socket = io.connect(ipAddress);
    console.log('check 1', socket.connected);
    socket.on('connect', function() {
      console.log('check 2', socket.connected);
    });*/

  //const socket = io();
  const sendData = () => {
    /*
    const socket = io(ipAddress);
    socket.emit('data', { data: 'Hello, server!' });
    console.log(props.name);*/
    fetch(ipAddress, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: props.name,
      }),
    });
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Button title = {props.name} onPress = {sendData}/>
    </View>
  )
}

