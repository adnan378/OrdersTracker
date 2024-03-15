import { View, Text, ScrollView, Button,TextInput, Alert } from 'react-native'
import React,{useState} from 'react'
import {colors} from '../../assets/colors'

import CustomButton from '../../components/CustomButton'
import TableSheet from '../../components/TableSheet'
import MyButton from '../../components/MyButton';
//import { color } from 'react-native-tailwindcss';

export default function AllOrdersTab({navigation}) {
  const [activeButton, setActiveButton]=useState('All Orders')
  //const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };
  //const [activeButton, setActiveButton] = useState('');
  const handleSubmitButton =(title)=>{
    Alert.alert(`${title} Button is clicked`);
  }
  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={true} >
    <View style={{backgroundColor:'#E9EFE5'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} indicatorStyle='white'>
      
      <View style={{flex:1,flexDirection:'row'}}>
        
        <View style={{marginHorizontal:5}}>
          {/* <MyButton title={'All Order'} onPress={Alert.alert("Showing all orders")}/> */}
          {/* <Button title='All Orders' style={{borderRadius:20}} color={activeButton==='All Orders' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("All Orders");setActiveButton('All Orders');}}/> */}
       <MyButton title={'All Orders'} onPress={() =>{handleSubmitButton('All Orders');setActiveButton('All Orders')}} active={activeButton==='All Orders'}/>
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Trading Orders'} onPress={() =>{handleSubmitButton('Trading Orders');setActiveButton('Trading Orders')}} active={activeButton==='Trading Orders'}/>

          {/* <Button title='Trading Orders' color={activeButton==='Trading Orders' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Trading Orders");setActiveButton('Trading Orders');}}/> */}
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Orders Pending'} onPress={() =>{handleSubmitButton('Orders Pending');setActiveButton('Orders Pending')}} active={activeButton==='Orders Pending'}/>

          {/* <Button title='Orders Pending' color={activeButton==='Orders Pending' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Orders Pending");setActiveButton('Orders Pending');}}/> */}
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Orders In Production'} onPress={() =>{handleSubmitButton('Orders In Production');setActiveButton('Orders In Production')}} active={activeButton==='Orders In Production'}/>

          {/* <Button title='Orders In Production' color={activeButton==='Orders In Production' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Orders In Production");setActiveButton('Orders In Production');}}/> */}
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Orders In Testing'} onPress={() =>{handleSubmitButton('Orders In Testing');setActiveButton('Orders In Testing')}} active={activeButton==='Orders In Testing'}/>

          {/* <Button title='Orders in Testing' color={activeButton==='Orders in Testing' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Orders in Testing");setActiveButton('Orders in Testing');}}/> */}
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Orders Packed'} onPress={() =>{handleSubmitButton('Orders Packed');setActiveButton('Orders Packed')}} active={activeButton==='Orders Packed'}/>

          {/* <Button title='Orders Packed' color={activeButton==='Orders Packed' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Orders Packed");setActiveButton('Orders Packed');}}/> */}
        </View>
        <View style={{marginHorizontal:5}}>
        <MyButton title={'Orders Shipped'} onPress={() =>{handleSubmitButton('Orders Shipped');setActiveButton('Orders Shipped')}} active={activeButton==='Orders Shipped'}/>

          {/* <Button title='Orders Shipped' color={activeButton==='Orders Shipped' ? '#1402D5':'#27614C'} onPress= {() =>{handleSubmitButton("Orders Shipped");setActiveButton('Orders Shipped');}}/> */}
        </View>
        

        
      </View>
      </ScrollView>
      <View style={{}}>
       
          
          <View style={{flex:1,flexDirection:'row'}}>
            <TextInput style={{margin:8,borderRadius:8,backgroundColor:'white',color:'black',width:200,height:40,paddingLeft:10}}
            placeholder='Search'
            placeholderTextColor={'#27614C'}/>
            {/* <Button
            title='Search'
            color='green'/> */}
            <View style={{height:80,width:80,margin:8,marginLeft:-3}}>
            <CustomButton title="Search" onPress={handleSubmitButton} color={colors.primary}/>
            </View>
          
          </View>
          <View style={{margin:6,marginTop:-40,marginBottom:100}}> 
            <TableSheet navigation={navigation}/>

          </View>

       
      </View>

      </View>
      </ScrollView>
      
   
  )
}