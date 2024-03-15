import React, { Component } from 'react';
import {colors} from '../assets/colors'
import { StyleSheet, View, ScrollView ,Alert} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import CustomButton from './CustomButton';
//import { color } from 'react-native-tailwindcss';
//import { log } from 'echarts/types/src/util/log.js';
//import { useNavigation } from '@react-navigation/native'; // Import navigation hook

// const handleEditButton =()=>{
  
//navigation.navigate('Edit')
//   //console.log("Submitted");
//    Alert.alert("Your order is editted")
//  }
const handleEditButton = () => {
  Alert.alert("Your order is edited")
 // this.props.navigation.navigate('Edit Order');

  //const { navigation } = this.props;
 // navigation.navigate('Edit Order');
}
 const handleDeleteButton =()=>{
    
  // console.log("Submitted");
   Alert.alert("Your order is deleted")
 }

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Sr.No', 'Product Name', 'Quantity', 'Days Elapsed', 'Firm Name', 'Customer Name', 'Order Status', 'Priority', 'Payment Status','Actions'],
      widthArr: [50, 100, 80, 90, 140, 140, 120, 80, 140,180]
      
    }
    this.handleEditButton = this.handleEditButton.bind(this);

  }
   handleEditButton () {
    // Use the navigation prop to navigate to the Edit Order screen
    this.props.navigation.navigate('Edit Order');
  }
  // handleEditButton = () => {
  //   Alert.alert("Your order is edited");
  //   // Use navigation prop to navigate to "Edit Order" screen
  //   this.props.navigation.navigate('EditOrder');
  // };
  
  renderActionsCell=() =>{
    
  
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <CustomButton title="  Edit  " onPress={this.handleEditButton} color="#200FE0"/>
        <CustomButton title="Delete" onPress={this.handleDeleteButton} color="#e53935"/>
      </View>
    )
  }
  

  render() {
    const state = this.state;
    const tableData = [];
    let count=0;
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < this.state.tableHead.length; j += 1) {
        if(j==0){
          count++;
          rowData.push(`${count}`)
        }
        else if(j=== this.state.tableHead.length-1){
          rowData.push(this.renderActionsCell())
        }else{
        rowData.push(`${i}${j}`);
        }
      }
      tableData.push(rowData);
    }
   
    

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#5D967A'}}>
              <Row data={state.tableHead} 
              widthArr={state.widthArr} 
              style={styles.header} 
              textStyle={styles.textHeader}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={{ ...styles.row, ...(index % 2 === 0 && { backgroundColor: 'white' }) }}
                    //  style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: colors.primary },
  textHeader:{textAlign: 'center', fontWeight: '500',color:'white'},
  text: { textAlign: 'center', fontWeight: '500',color:'black' },
  dataWrapper: { marginTop: 5,marginBottom:6 },
  row: { height: 40, backgroundColor: colors.secondary }
});