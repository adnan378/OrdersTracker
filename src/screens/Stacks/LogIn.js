import { Button, StatusBar, StyleSheet, Text, View ,TextInput,Image, ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {colors} from '../../assets/colors'

const LogIn = ({navigation}) => {
    const goToNextScreen =() =>{
        navigation.navigate('E&E Solutions')
    }
   return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
      
      <StatusBar 
          barStyle="light-content"
          />
           {/* <ScrollView style={{}}> */}
      <View style={{flex:1,paddingHorizontal:20,paddingBottom:20,justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../assets/images/ee-brand.png')}
            style={{width:160,height:100,tintColor:'white'}}
            />
      </View>
     
      <View style={{flex:3,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:30,paddingHorizontal:22}}>
        <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontStyle:'italic',color:colors.primary,fontWeight:'900',fontSize:50}}>Login</Text>
            
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
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Email id :</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10,color:'black', borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter your email"
            placeholderTextColor={"black"}
          />
          </View>
          <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Password :</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5,color:'black', borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter your password"
            placeholderTextColor={"black"}
          />
          </View>
          <View style={{marginVertical:20,marginRight:-8}}>
            <CustomButton title="Login" onPress={goToNextScreen} color={colors.primary}/>

          </View>



      </View>
      {/* </ScrollView> */}
         
          </SafeAreaView>
    
  )
}

export default LogIn

const styles = StyleSheet.create({})