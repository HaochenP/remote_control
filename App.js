import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
import io from 'socket.io-client';
//import React, { useState } from 'react';
import Buttons from './assets/Buttons';
//const socket = io();


export default function App() {
    
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
      <Buttons name='ctrl-w' />
        <Buttons name='new page' />
      <Buttons name='new youtube page' />
    </View>
  );



}
