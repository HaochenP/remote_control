import {View, Button} from 'react-native';

export default function MouseMove(props){

    const ipAddress = props.ipAddress;
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
        <View style={{alignItems: 'center'}}>
          <Button title = {props.direction} onPress = {sendMouse}/>
        </View>
      )
  };

