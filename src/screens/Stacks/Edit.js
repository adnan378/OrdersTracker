import { View,Pressable, Text, Image, ScrollView,Platform, TextInput, Button, Modal, TouchableOpacity ,StyleSheet, Alert} from 'react-native'
import React, { useState } from 'react'
import {colors} from '../../assets/colors'
import { Dropdown } from 'react-native-element-dropdown';
import CustomButton from '../../components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DocumentPicker from 'react-native-document-picker';
//import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
//import { DateTimePicker } from '@react-native-community/datetimepicker';

 



// const handleOptionSelect = (option) => {
//   setSelectedOption(option);
//   setModalVisible(false);
//   console.warn("option is registered");
// };
const handleSubmitButton =({navigation})=>{
    
  // console.log("Submitted");
   Alert.alert("Your order is submitted")
   //navigation.navigate('All Orders')
 }
 const selectDoc =async () =>{
  try{
    const doc= await DocumentPicker.pick({
      type:[DocumentPicker.types.pdf]
    });
    console.log(doc)
  }catch(err){
    if(DocumentPicker.isCancel(err))
    console.log("User cancelled the upload",err)
  else
  console.log(err)
  }

 }
//  const handleDateChange = (selectedDate) => {
//   // Handle date change here
//   setDate(selectedDate);
//   Alert.alert("Date is selected")
// };





export default function EditOrder({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false)
  
 
  const data = [{ value: 1, label: 'Trading' }, { value: 2, label: 'Pending', }, { value: 3, label: 'In Production' }, { value: 4, label: 'Testing' }, { value: 5, label: 'Packed' }, { value: 6, label: 'Shipped' }]
  const [deadline,setDeadline] = useState("")
  const [date, setDate] = useState(new Date());
  const [showPicker,setShowPicker]=useState(false);
  const handleSubmitButton =()=>{
    
    // console.log("Submitted");
     Alert.alert("Your order is submitted")
     navigation.navigate('Show All')
   }

  const toggleDatePicker =() =>{
    setShowPicker(!showPicker);
  }
  // const onChange =({type},selectedDate) =>{
  //   if(type=="set"){
  //     const currentDate=selectedDate;
  //     setDate(currentDate)
  //    // toggleDatePicker();
      
  //     if(Platform.OS ==="android"){
  //       toggleDatePicker();
  //       //setDeadline(currentDate.toDateString());
  //       setDeadline(formatDate(currentDate));

  //     }

  //   }
  //   else{
  //     toggleDatePicker();
  //   }
  
  // }
  const onChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      toggleDatePicker();
      setDate(currentDate);
      setDeadline(formatDate(currentDate)); // Assuming formatDate is a function that formats the date
    } else if (event.type === 'dismissed') {
      toggleDatePicker();
    }
  };
  const formatDate=(rawDate) =>{
    let date=new Date(rawDate);

    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    month=month < 10 ? `0${month}`:month;
    day=day < 10 ? `0${day}`:day;

    return `${day}-${month}-${year}`;
  }
 
  return (
    <View style={{flex:1 ,backgroundColor:'#E9EFE5'}}>
    <KeyboardAwareScrollView >
      
      <View style={{ marginHorizontal: 26 ,paddingBottom:80,paddingTop:20}}>
        <View style={{padding:20,backgroundColor:'white',borderRadius:8,}}>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Product Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, color:'black',borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of product"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Quantity</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, color:'black',borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter number of quantity"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Firm Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, color:'black',borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of firm"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Customer Name</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10, borderRadius: 5, color:'black',borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter name of customer"
            placeholderTextColor={"black"}
          />



        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Order Status</Text>


         
            <Dropdown
              style={[{height: 45,
                borderColor: '#000000',
                borderWidth: 1,
                
                placeholderTextColor:'black',
                //color:'blue',
                borderRadius: 5,
                paddingHorizontal: 8,
                marginTop: 10}, isFocus && { borderColor: 'green' }]}
             
              data={data}
              //search
              maxHeight={300}
              labelField="label"
              
              valueField="value"
              placeholder='Select Order Status'
              placeholderStyle={{color:'black', fontSize:14,}}
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
             
            />
            
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Payment Status</Text>

          <TextInput
            style={{ borderRadius: 5, marginTop: 10,color:'black', borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            placeholder="Enter status of payment"
            placeholderTextColor={"black"}
          />
        </View >

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold',  fontSize: 17, color: 'black' }}>Deadline</Text>
         
         {!showPicker ? (
          <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={{ borderRadius: 5, marginTop: 10,color:'red', borderRadius: 5, borderColor: 'red', borderWidth: 1, padding: 8 }}
            placeholder="DD-MM-YYYY"
            value={deadline}
            onChangeText={setDeadline}
            placeholderTextColor={"black"}
            editable={false}
          />
          </Pressable>
         ): (
          <View>
            <TextInput
            style={{ borderRadius: 5, marginTop: 10,color:'red', borderRadius: 5, borderColor: 'red', borderWidth: 1, padding: 8 }}
            placeholder="DD-MM-YYYY"
            value={deadline}
            onChangeText={setDeadline}
            placeholderTextColor={"black"}
            editable={false}
          />
           <DateTimePicker
           mode="date"
           display="calendar"
           value={date}
           onChange={onChange}
           
           minimumDate={new Date()}
           />
           </View>
           
         )}
         
        </View >

        

       


        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>Upload file</Text>

          <TouchableOpacity onPress={selectDoc}>
          <View
            style={{ height:35,width:60,borderRadius: 5,justifyContent:'center',alignItems:'center', marginTop: 10, borderRadius: 5, borderColor: '#000000', borderWidth: 1, padding: 8 }}
            //placeholder="Enter status of payment"
            >
               <Image 
              source={require('../../assets/images/fileupload.png')}
              style={{width:20,height:20,tintColor:'grey',marginLeft:30,}}
              />
            </View>
            </TouchableOpacity>
        </View >
        {/* <View style={{ marginVertical: 10 }}>
          <Button title='Submit' color='green' />
        </View> */}
        <View style={{marginTop:10,marginRight:-8}}>
          <CustomButton title="Update" onPress={handleSubmitButton} color={colors.primary}/>
        </View>




      </View>
      </View>
      
    </KeyboardAwareScrollView>
    </View>
    
  )
}
const styles = StyleSheet.create({})
