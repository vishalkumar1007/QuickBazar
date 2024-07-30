import {View,Text} from 'react-native';

const Signup = () =>{
    return(
      <View style={{flex:1 ,justifyContent:'center' ,alignItems:'center'}}>
        <Text style={{color:'black'}}>Hello from Signup</Text>
        {/* <Button title='go to Home' onPress={()=>{props.navigation.navigate("About")}}/> */}
      </View>
    )
}
export default Signup;