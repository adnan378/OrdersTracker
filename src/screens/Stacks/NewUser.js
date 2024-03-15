import { StyleSheet, Text, View,StatusBar,Image,TextInput, Alert} from 'react-native'
import React, {useState}from 'react'
import {colors} from '../../assets/colors'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { Dropdown } from 'react-native-element-dropdown';

const NewUser = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false)
  const data = [{ value: 1, label: 'User' }, { value: 2, label: 'Admin', }]
  const goToNextScreen =() =>{
    Alert.alert("New user is being registered","You can share this email and password to the user to login")
    navigation.navigate('E&E Solutions')
}
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.primary}}>
    {/* <Text>LogIn</Text> */}
    {/* <Button
    title='LogIn'
    onPress={goToNextScreen}/> */}
    
    <StatusBar 
    translucent
    backgroundColor="transparent"
    barStyle="light-content"
    />
    <View style={{flex:1,paddingHorizontal:20,paddingBottom:10,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/images/ee-brand.png')}
          style={{width:160,height:100,tintColor:'white'}}
          />
    </View>
    <View style={{flex:3,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:30,paddingHorizontal:22}}>
      <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontStyle:'italic',color:colors.primary,fontWeight:'900',fontSize:30}}>Register New User</Text>
          
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
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Name :</Text>

        <TextInput
          style={{ borderRadius: 5, marginTop: 10, borderRadius: 5,color:'black', borderColor: '#000000', borderWidth: 1, padding: 8 }}
          placeholder="Enter user name"
          placeholderTextColor={"black"}
        />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Role :</Text>


          {/* <TextInput style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
          placeholder="Enter status of order"
          placeholderTextColor={"black"}/> */}
            {/* {renderLabel()} */}
            <Dropdown
              style={[{height: 45,
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 5,
                paddingHorizontal: 8,
                marginTop: 10}, isFocus && { borderColor: 'green' }]}
             // placeholderStyle={styles.placeholderStyle}
              //selectedTextStyle={styles.selectedTextStyle}
              //inputSearchStyle={styles.inputSearchStyle}
              //iconStyle={styles.iconStyle}
              data={data}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder='Select role of the user'
              placeholderStyle={{color:'black', fontSize:14}}
             // placeholder={!isFocus ? 'Select item' : '...'}
             // searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              itemTextStyle={{color:'black',fontSize:14}}
              selectedTextStyle={{color:'black',fontSize:14}}
              // renderLeftIcon={() => (
              //   <AntDesign
              //     style={styles.icon}
              //     color={isFocus ? 'blue' : 'black'}
              //     name="Safety"
              //     size={20}
              //   />
              // )}
            />
            
        </View>
        <View style={{ marginVertical: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Email id :</Text>

        <TextInput
          style={{ borderRadius: 5,color:'black', marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
          placeholder="Enter your email"
          placeholderTextColor={"black"}
        />
        </View>
        <View style={{ marginVertical: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: colors.primary }}>Password :</Text>

        <TextInput
          style={{ borderRadius: 5, marginTop: 10,color:'black', borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
          placeholder="Enter your password"
          placeholderTextColor={"black"}
        />
        </View>
        <View style={{marginVertical:20,marginRight:-8}}>
          <CustomButton title="Register" onPress={goToNextScreen} color={colors.primary}/>

        </View>



    </View>
       
        </SafeAreaView>
  )
}

export default NewUser

const styles = StyleSheet.create({})