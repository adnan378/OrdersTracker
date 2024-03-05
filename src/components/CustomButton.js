import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//import { color } from 'react-native-tailwindcss'

const CustomButton = ({ title, onPress,color}) => {
    return (
        
        <TouchableOpacity style={[styles.button ,{backgroundColor:color}]} onPress={onPress} >
            <Text style={styles.buttonText}>{title}</Text>

        </TouchableOpacity>
        
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
       // backgroundColor: color,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginRight:8
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})