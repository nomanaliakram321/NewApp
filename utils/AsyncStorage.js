import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (userData) => {
    console.log('Async Storage User Data',userData)
    try {
      await AsyncStorage.setItem('USERDATA', userData)
    } catch (e) {
  console.log('Async Storage Error...',e)
    }
  }
  export const getUserData= async () => {
    try {
      const value = await AsyncStorage.getItem('USERDATA')
     
      
return value;
    
    } catch(e) {
      // error reading value
      console.log('error',e)
    }
  }
  
 export const removeUserData = async () => {
    try {
      await AsyncStorage.removeItem('USERDATA')
      console.log('UserData Succefully Removed')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }