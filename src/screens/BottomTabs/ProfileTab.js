import { Button, StyleSheet, Text, View ,Image,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'


const ProfileTab = ({navigation}) => {
    const nextScreen =() =>{
        navigation.navigate('New User Registeration')
    }
    const logout =() =>{
        navigation.navigate('LogIn')
        Alert.alert("You have been logged out!","Please login again")
    }
  return (
    <View style={{flex:1,backgroundColor:'#eeeeee'}}>  
         <View style={{flex:1,backgroundColor:'white',marginTop:40,marginHorizontal:40,marginBottom:100,borderBottomLeftRadius:40,borderBottomRightRadius:40,}}>
        <View style={{backgroundColor:'#37474f',paddingBottom:20,}}>
        <View style={{alignItems:'center',justifyContent:'center',borderRadius:60,paddingTop:40,paddingBottom:20,}}>
        <Image
              source={require('../../assets/images/profile.png')}
              style={{width:120,height:120,tintColor:'white'}}
              />
        </View >
        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:20}}>
            <Text style={{fontWeight:'900',fontSize:20,color:'white'}}>UserName(Admin)</Text>
            <Text style={{fontWeight:'500',fontSize:17,color:'white'}}>username@gmail.com</Text>
        </View>
        </View>
        <View style={{margin:20}}>
       
       <TouchableOpacity onPress={nextScreen} >
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={require('../../assets/images/newaccount.png')}
            style={{width:40,height:40,tintColor:'#37474f',marginEnd:10}}/>
        <Text style={{color:'#37474f',fontSize:16,fontWeight:'700'}}>Register New User</Text>

        </View>
       </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
            <Image source={require('../../assets/images/power.png')}
            style={{width:40,height:40,tintColor:'#37474f',marginEnd:10}}/>
        <Text style={{color:'#37474f',fontSize:16,fontWeight:'700'}}>Sign Out</Text>

        </View>
       </TouchableOpacity>
        </View>
        {/* <View style={{flex:1,}}>
      <CustomButton title={"Register new User"} onPress={nextScreen} color={'green'}/>
      </View> */}
    </View>

    </View>
 
    
  )
}

export default ProfileTab

const styles = StyleSheet.create({})
