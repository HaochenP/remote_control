import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import io from 'socket.io-client';
//import React, { useState } from 'react';
import Buttons from './assets/Buttons';
import PopUpInput from './assets/PopUpInput';
import { AntDesign } from '@expo/vector-icons'; 
import MouseMove from './assets/MouseMove';

//const socket = io();


export default function App() {
  const ipAddress = 'https://ad32-86-146-175-208.eu.ngrok.io'
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: "aliceblue",
    },
    top: {
      justifyContent:'center',
      flexDirection: "row",
      flexWrap: "wrap",
    },
    row: {
      justifyContent: 'center',
      flexDirection: "row",
      flexWrap: "wrap",
    },
   
  });

   

  return (
    <>
    
    <View style={styles.container}>
      <View style= {styles.top}>
    <MouseMove direction = "up" ipAddress = {ipAddress} url = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-up-arrow-icon-png-image_956434.jpg"/>
    </View>
    <View style={styles.row}>
    
    <MouseMove direction = "left" ipAddress = {ipAddress} url = "https://toppng.com/uploads/preview/arrow-pointing-to-the-left-115501167743epfu1fapc.png"/>
    <MouseMove style = {{ flex: 0 }} direction = "click" ipAddress = {ipAddress} url = "https://image.similarpng.com/very-thumbnail/2021/06/Design-of-click-icon-with-hand-cursor.-Hand-is-pushing-the-button.png"/>
       <MouseMove style = {{ flex: 0 }} direction = "right" ipAddress = {ipAddress} url = "data:image/png;base64,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"/>
      
    </View>
    <View style={styles.row}>
      <MouseMove style = {{ flex: 0 }} direction = "down" ipAddress = {ipAddress} url = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-down-arrow-icon-png-image_956433.jpg"/>
      
      </View>
      
      <View style={styles.row}>
      <Buttons name='ctrl-w' ipAddress = {ipAddress}/>
      <Buttons name='new page' ipAddress = {ipAddress}/>
      <Buttons name='new youtube page' ipAddress = {ipAddress} />
      <PopUpInput ipAddress = {ipAddress}/>
      <MouseMove style = {{ flex: 0 }} direction = "enter" ipAddress = {ipAddress} url = "https://png.pngtree.com/png-clipart/20190613/original/pngtree-enter-button-png-image_3549576.jpg"/>
      
      </View>
     
      
      

      
    
    </View>
    
    </>
  );



}
