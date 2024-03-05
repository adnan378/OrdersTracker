import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = ({ userName, userEmail, onSignOut, onRegisterNewUser }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text>{userName}</Text>
        <Text>{userEmail}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={onRegisterNewUser}>
          <Text>Register New User</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSignOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Set a fixed height for the drawer
    padding: 20,
    justifyContent: 'space-between',
  },
  userInfo: {
    marginBottom: 20,
  },
  options: {
    flexDirection: 'column',
  },
});

export default DrawerContent;
