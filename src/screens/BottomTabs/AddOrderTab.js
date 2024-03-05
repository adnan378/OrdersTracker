import { View, Text, Image, ScrollView, TextInput, Button, Modal, TouchableOpacity ,StyleSheet, Alert} from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from '../../components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



// const handleOptionSelect = (option) => {
//   setSelectedOption(option);
//   setModalVisible(false);
//   console.warn("option is registered");
// };
const handleSubmitButton =()=>{
    
  // console.log("Submitted");
   Alert.alert("Your order is submitted")
 }

export default function AddOrderTab() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false)
  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');
  // const options = ['Trading', 'Pending', 'In Production', 'Testing', 'Packed','Shipped'];
 
  const data = [{ value: 1, label: 'Trading' }, { value: 2, label: 'Pending', }, { value: 3, label: 'In Production' }, { value: 4, label: 'Testing' }, { value: 5, label: 'Packed' }, { value: 6, label: 'Shipped' }]

  return (
    <View style={{flex:1 ,backgroundColor:'#eeeeee'}}>
    <KeyboardAwareScrollView >
      
      <View style={{ marginHorizontal: 40 ,}}>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Product Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of product"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Quantity</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter number of quantity"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Firm Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of firm"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Customer Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of customer"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Order Status</Text>


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
                marginTop: 10}, isFocus && { borderColor: 'blue' }]}
             // placeholderStyle={styles.placeholderStyle}
              //selectedTextStyle={styles.selectedTextStyle}
              //inputSearchStyle={styles.inputSearchStyle}
              //iconStyle={styles.iconStyle}
              data={data}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder='Select Order Status'
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
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Payment Status</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter status of payment"
            placeholderTextColor={"black"}
          />



        </View >
        {/* <View style={{ marginVertical: 10 }}>
          <Button title='Submit' color='green' />
        </View> */}
        <View style={{marginTop:10,marginRight:-8}}>
          <CustomButton title="Submit" onPress={handleSubmitButton} color="#37474f"/>
        </View>




      </View>
      
    </KeyboardAwareScrollView>
    </View>
  )
}
const styles = StyleSheet.create({})
