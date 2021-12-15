
import LottieView from 'lottie-react-native';
import React,{Component} from 'react';
import { View } from 'react-native';
import { getUserData } from '../utils/AsyncStorage';

class SplashScreen extends Component {
    componentDidMount() {
      
        setTimeout((
            
        )=>{
   getUserData().then((data)=>{
        
        // let res=JSON.parse(data)
         console.log('your data ',data)
        if(data){
          this.props.navigation.replace('HomeScreen')
        }
        else{
          this.props.navigation.replace('Signup')

        }

        // console.log('your data ',res.uid)
      
      })
            
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