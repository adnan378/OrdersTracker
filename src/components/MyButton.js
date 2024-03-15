import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React  from 'react'
import {colors} from '../assets/colors'

const MyButton = ({title,onPress,active}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: active ? colors.primary : 'white',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 5,
      }}>
      <Text style={{ color: active ? 'white' : colors.primary, textAlign: 'center',fontWeight:500 }}>{title}</Text>
    </TouchableOpacity>
  );
};
  


export default MyButton

const styles = StyleSheet.create({})