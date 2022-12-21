import { Alert } from 'react-native'; 
import {View, Button} from 'react-native';

export default function PopUpInput(props){

    const ipAddress = props.ipAddress;
    const sendText = (text) => {
        console.log("sending text");
        console.log(text);
        fetch(ipAddress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: text,
          }),
        });
      }


const onButtonPress = () => {
    Alert.prompt('Enter what you want to type', null, [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: password => sendText(password)
        }
      ]
  );
    

  };


  return (
    <View style={{alignItems: 'center'}}>
      <Button title = 'Search' onPress = {onButtonPress}/>
    </View>
  )

}
