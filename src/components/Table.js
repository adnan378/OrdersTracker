import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Alert } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import CustomButton from './CustomButton';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Sr.No', 'Product Name', 'Quantity', 'Days Elapsed', 'Firm Name', 'Customer Name', 'Order Status', 'Priority', 'Payment Status', 'Actions'],
      widthArr: [40, 100, 60, 60, 140, 140, 100, 60, 140, 180],
      tableData: [] // Array to hold data
    };
  }

  componentDidMount() {
    // Simulated data for demonstration
    const tableData = [];
    for (let i = 0; i < 30; i++) {
      const rowData = [];
      for (let j = 0; j < this.state.tableHead.length; j++) {
        if(j=== this.state.tableHead.length-1){
            rowData.push(this.renderActionsCell())
          }else{
        rowData.push(`${i}${j}`);}
      }
      tableData.push(rowData);
    }
    this.setState({ tableData });
  }

  handleEdit = (rowData) => {
    // Handle edit action here
    console.log("Editing:", rowData);
    // For demonstration, you can update the row's data in state with the edited values
    // For example, if rowData[0] is the Sr.No column, you can update it as follows:
    // const updatedTableData = this.state.tableData.map(row => {
    //   if (row[0] === rowData[0]) { // Assuming Sr.No is unique
    //     // Update the row with edited values
    //     return [...editedRowData]; // Replace editedRowData with the actual edited values
    //   }
    //   return row;
    // });
    // this.setState({ tableData: updatedTableData });
  }

  handleDelete = (rowData) => {
    // Handle delete action here
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this row?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            // Delete the row from tableData
            const updatedTableData = this.state.tableData.filter(row => row !== rowData);
            this.setState({ tableData: updatedTableData });
          }
        },
      ],
      { cancelable: true }
    );
  }

  renderActionsCell = (rowData) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton title="  Edit  " onPress={() => this.handleEdit(rowData)} color="#0277bd" />
        <CustomButton title="Delete" onPress={() => this.handleDelete(rowData)} color="#e53935" />
      </View>
    )
  }

  render() {
    const { tableHead, widthArr, tableData } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.textHeader} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={[
                        ...rowData,
                        this.renderActionsCell(rowData) // Add actions cell at the end
                      ]}
                      widthArr={widthArr}
                      style={{ ...styles.row, ...(index % 2 === 0 && { backgroundColor: '#F7F6E7' }) }}
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
  textHeader: { textAlign: 'center', fontWeight: '500', color: 'white' },
  text: { textAlign: 'center', fontWeight: '500', color: 'black' },
  dataWrapper: { marginTop: 5, marginBottom: 80 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
