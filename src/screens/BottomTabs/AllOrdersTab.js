import { View, Text, ScrollView, Button,TextInput } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import TableSheet from '../../components/TableSheet'

export default function AllOrdersTab() {
  const handleSubmitButton =()=>{
    console.warn("Submitted");
  }
  return (
    <ScrollView vertical={true} showsVerticalScrollIndicator={true} >
    <View style={{}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} indicatorStyle='white'>
      
      <View style={{flex:1,flexDirection:'row'}}>
        
        <View style={{marginHorizontal:5}}>
          <Button title='All Orders' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Trading Orders' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Orders Pending' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Orders In Production' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Orders in Testing' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Orders Packed' color='#37474f'/>
        </View>
        <View style={{marginHorizontal:5}}>
          <Button title='Orders Shipped' color='#37474f'/>
        </View>
        

        
      </View>
      </ScrollView>
      <View style={{}}>
       
          
          <View style={{flex:1,flexDirection:'row'}}>
            <TextInput style={{margin:8,borderRadius:8,backgroundColor:'grey',width:200,height:40}}
            placeholder='Search'
            placeholderTextColor={'white'}/>
            {/* <Button
            title='Search'
            color='green'/> */}
            <View style={{height:80,width:80,margin:8,marginLeft:-3}}>
            <CustomButton title="Search" onPress={handleSubmitButton} color="#0277bd"/>
            </View>
          
          </View>
          <View style={{margin:6,marginTop:-40,}}> 
            <TableSheet/>
          </View>

       
      </View>

      </View>
      </ScrollView>
      
   
  )
}