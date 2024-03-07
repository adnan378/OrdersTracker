import { Button, StatusBar, StyleSheet, Text, View ,TextInput,Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';

const LogIn = ({navigation}) => {
    const goToNextScreen =() =>{
        navigation.navigate('E&E Solutions')
    }
   return (
    <SafeAreaView style={{flex:1,backgroundColor:'#37474f'}}>
      
      <StatusBar hidden/>
      <View style={{flex:1,paddingHorizontal:20,paddingBottom:10,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../assets/images/ee-brand.png')}
            style={{width:160,height:100,tintColor:'white'}}
            />
      </View>
      <View style={{flex:3,backgroundColor:'#eeeeee',borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:30,paddingHorizontal:22}}>
        <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontStyle:'italic',color:'#37474f',fontWeight:'900',fontSize:50}}>Login</Text>
            
        </View>
      {/* <View style={{ marginVertical: 5}}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#37474f' }}>Name :</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter your name"
            placeholderTextColor={"black"}
          />
          </View> */}
          <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#37474f' }}>Email id :</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter your email"
            placeholderTextColor={"black"}
          />
          </View>
          <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#37474f' }}>Password :</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter your password"
            placeholderTextColor={"black"}
          />
          </View>
          <View style={{marginVertical:20,marginRight:-8}}>
            <CustomButton title="Login" onPress={goToNextScreen} color='#37474f'/>

          </View>



      </View>
         
          </SafeAreaView>
    
  )
}

export default LogIn

const styles = StyleSheet.create({})