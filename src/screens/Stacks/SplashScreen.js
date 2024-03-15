import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {colors} from '../../assets/colors'
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading delay (e.g., fetch data, check authentication, etc.)
    const timeout = setTimeout(() => {
      // Navigate to the main screen after the splash screen
      navigation.replace('LogIn');
    }, 3000); // Adjust the delay as needed (e.g., 3000 milliseconds = 3 seconds)

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Replace 'splash.png' with your splash screen image */}
      <Image source={require('../../assets/images/ee-brand.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: '60%',
    tintColor:'white',
    resizeMode: 'contain',
  },
});

export default SplashScreen;