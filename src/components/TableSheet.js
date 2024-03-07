import React, { Component } from 'react';
import { StyleSheet, View, ScrollView ,Alert} from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import CustomButton from './CustomButton';
import { color } from 'react-native-tailwindcss';
import { log } from 'echarts/types/src/util/log.js';

const handleEditButton =()=>{
    
  // console.log("Submitted");
   Alert.alert("Your order is editted")
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
      widthArr: [40, 100, 60, 60, 140, 140, 100, 60, 140,180]
      
    }
  }
  // deleteRow = (index) => {
  //   // Delete the row from tableData
  //   const updatedData = [...this.state.tableData];
  //   updatedData.splice(index, 1);
  //   this.setState({ tableData: updatedData });
  // }
  // handleEdit=(rowData)=>{
  //   this.setState({editableRow:rowData})
  // }
  renderActionsCell=() =>{
    // deleteRow = (index) => {
    //   // Delete the row from tableData
    //   const updatedData = [...this.state.tableData];
    //   updatedData.splice(index, 1);
    //   this.setState({ tableData: updatedData });
    // }
    // handleEdit=(rowData)=>{
    //   this.setState({editableRow:rowData})
    // }
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <CustomButton title="  Edit  " onPress={handleEditButton} color="#0277bd"/>
        <CustomButton title="Delete" onPress={handleDeleteButton} color="#e53935"/>
      </View>
    )
  }
  

  render() {
    // handleEdit=(rowData)=>{
    //   this.setState({editableRow:rowData})
    // }
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < this.state.tableHead.length; j += 1) {
        if(j=== this.state.tableHead.length-1){
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
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
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
                      style={{ ...styles.row, ...(index % 2 === 0 && { backgroundColor: '#F7F6E7' }) }}
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
  header: { height: 50, backgroundColor: '#37474f' },
  textHeader:{textAlign: 'center', fontWeight: '500',color:'white'},
  text: { textAlign: 'center', fontWeight: '500',color:'black' },
  dataWrapper: { marginTop: 5,marginBottom:80 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});