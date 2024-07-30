import {View,Text} from 'react-native';

const Home = () =>{
    return(
      <View style={{flex:1 ,justifyContent:'center' ,alignItems:'center'}}>
        <Text style={{color:'black'}}>Hello from Home</Text>
        {/* <Button title='go to Home' onPress={()=>{props.navigation.navigate("About")}}/> */}
      </View>
    )
}
export default Home;