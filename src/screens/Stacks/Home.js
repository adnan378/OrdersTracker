import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RegisterNewUser from '../DrawerScreen/RegisterNewUser';
import Sidebar from '../Sidebar';
const Drawer=createDrawerNavigator();
export default function Home() {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar{...props}/> }>
      <Drawer.Screen name="RegisterNewUser" component={RegisterNewUser} options={{headerShown:false}}/>
    </Drawer.Navigator>
   
  )
}

