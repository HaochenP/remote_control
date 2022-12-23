import {View, Button, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import React, {useRef} from "react";
import Icon from 'react-native-ionicons'
import * as Svg from 'react-native-svg';
import { Path } from 'react-native-svg';
import { SvgUri } from "react-native-svg";

export default function MouseMove(props){
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });



    const ipAddress = props.ipAddress;
    const increment = useRef(null);

    const handleStart = () => {
    increment.current = setInterval(() => {
    sendMouse()
    }, 300)
    }
    const handleReset = () => {
    clearInterval(increment.current);
    }
    


    const sendMouse = () => {
        console.log("sending mouse");
        fetch(ipAddress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: props.direction,
          }),
        });
      }
    
      return (
        <View style= {props.style} >
          <TouchableOpacity onPressIn={handleStart} onPressOut={handleReset}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: props.url,
        }}
      />
      </TouchableOpacity>
      
     
        </View>
        
      )
  };

