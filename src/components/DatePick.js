import { StyleSheet, Text, View,Button} from 'react-native'
import React,{useState} from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DatePick = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  return (
    <View>
    <Button title="Show Date Picker" onPress={showDatePicker} />
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  </View>
  )
}

export default DatePick

const styles = StyleSheet.create({})