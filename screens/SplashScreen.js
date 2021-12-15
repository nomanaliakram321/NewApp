
import LottieView from 'lottie-react-native';
import React,{Component} from 'react';
import { View } from 'react-native';
class SplashScreen extends Component {
    componentDidMount() {
        setTimeout((
            
        )=>{
            this.props.navigation.replace('Signup')
        },3000)
     
    }
  
    render() {
      return (
        <View style={{flex:1,backgroundColor:'white'}}>
        <LottieView
         
          autoPlay loop
          source={require('../assets/animation.json')}
        />
        </View>
      );
    }
  }
  export default  SplashScreen;