import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {colors} from '../assets/colors'
import { NavigationContainer, useNavigation,useIsFocused } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Stacks/Home'
import HomeTab from '../screens/BottomTabs/HomeTab'
import AddOrderTab from '../screens/BottomTabs/AddOrderTab'
import AllOrdersTab from '../screens/BottomTabs/AllOrdersTab'
import { SearchSource } from 'jest'
import LogIn from '../screens/Stacks/LogIn'
import 'react-native-gesture-handler';
import NewUser from '../screens/Stacks/NewUser'
import Splash from '../screens/Stacks/SplashScreen'
import { StatusBar } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'
//import RegisterNewUser from '../DrawerScreen/RegisterNewUser';
import Sidebar from '../screens/Sidebar';
import ProfileTab from '../screens/BottomTabs/ProfileTab'
import Edit from '../screens/Stacks/Edit'
import EditOrder from '../screens/Stacks/Edit'
const Drawer=createDrawerNavigator();


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Dropdown=({showDropdown,goToNewRegisterScreen,goTologinScreen}) => {
  
// return (
//   <>
//   {showDropdown && (
//     <View style={{ position: 'absolute', top: 60, right: 10, backgroundColor: 'white', borderRadius: 5, padding: 10 }}>
//       {/* Dropdown content goes here */}
//       <View style={{flex:1,backgroundColor:'#37474f',marginBottom:10,paddingStart:10,paddingEnd:10}}>
//        <View style={{flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10,paddingHorizontal:5,alignItems:'center'}}>
//        <Image
//                source={require('../assets/images/profile.png')}
//                style={{width:40,height:40,tintColor:'white'}}
//                />
//                <View style={{paddingStart:5,}}>
//                  <Text style={{color:'white',fontSize:16}}>Name</Text>
//       <Text  style={{color:'white',fontSize:14}}>user.gmail.com</Text></View>
//        </View>
//       {/* <Text style={{color:'white',fontSize:20}}>Name</Text>
//       <Text  style={{color:'white',fontSize:17}}>user.gmail.com</Text> */}
//       </View>
//       <TouchableOpacity onPress={goToNewRegisterScreen}>
//        <View style={{flexDirection:'row',alignItems:'center',paddingBottom:6}}>
//        <Image
//                source={require('../assets/images/newaccount.png')}
//                style={{width:25,height:25,tintColor:'#37474f'}}
//                />
//        <Text style={{color:'#37474f',fontWeight:'bold',fontSize:16,paddingStart:5}}>Register new User</Text>
//        </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={goTologinScreen}>
//       <View style={{flexDirection:'row',alignItems:'center'}}>
//        <Image
//                source={require('../assets/images/power.png')}
//                style={{width:25,height:25,tintColor:'#37474f'}}
//                />
//        <Text style={{color:'#37474f',fontWeight:'bold',fontSize:16,paddingStart:5}}>Sign Out</Text>
//        </View>
        
//       </TouchableOpacity>
     
//     </View>
//   )}
//   </>
// )
// }



// const MyStack=()=> {
//  // const [showDropdown, setShowDropdown] = useState(false);
  

//   return (
    
//     <Stack.Navigator>
//       <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
      
//       <Stack.Screen name="E&E Solutions" component={MyTabs} options={
//         {
//           headerTitleAlign:'center',
//           headerLeft:()=>(
//             <Image
//             source={require('../assets/images/ee-brand.png')}
//             style={{width:50,height:35,tintColor:'white'}}
//             />
           
//           ),
//           headerRight:()=>(
           
//             <TouchableOpacity onPress={setShowDropdown(!showDropdown)}>
//             <Image
//             source={require('../assets/images/profile.png')}
//             style={{width:35,height:35,tintColor:'white'}}
//             />
//             </TouchableOpacity>



//           ),
//           headerStyle: { backgroundColor: '#37474f' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }
          
//         }

        
//       } 
//       />
//       <Stack.Screen name='New User Registeration' component={NewUser} options={{headerShown:false}}/>
      
      

//     </Stack.Navigator>
//   );
// }
// function MyTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: 'false',headerTintColor:'#37474f', headerStyle:{backgroundColor:'#eeeeee',borderBottomWidth:2},tabBarActiveTintColor: 'white',tabBarHideOnKeyboard: true, tabBarInactiveTintColor: '#9e9e9e', tabBarShowLabel: true, tabBarStyle:
//         {
//           backgroundColor: '#37474f',
//           position: 'absolute',
//           //borderRadius: 30,
//           //bottom: 20,
//          // marginHorizontal: 10,
//           padding: 8,
//           paddingBottom: 8,
//           height: 60
//         }
//       }}>
//       <Tab.Screen name="Home" component={HomeTab} options={{
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image source={require('../assets/images/home.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#9e9e9e' }} />
//           )

//         }
//       }} />
//       <Tab.Screen name="Create New" component={AddOrderTab} options={{
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image source={require('../assets/images/add.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#9e9e9e' }} />
//           )

//         }
//       }} />
//       <Tab.Screen name="Show All" component={AllOrdersTab} options={{
//         tabBarIcon: ({ focused }) => {
//           return (
//             <Image source={require('../assets/images/eye.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#9e9e9e' }} />
//           )

//         }
//       }} />
//     </Tab.Navigator>
//   );
// }




export default function AppNavigation({navigation}) {
 //const [showDropdown, setShowDropdown] = useState(false);
  //navigation.navigate('New User Registeration');
//const next = useNavigation();
  
//  const goToNewRegisterScreen =({navigation}) =>{
// console.log(navigation)
//   console.log("knndv")
//   setShowDropdown(false);
//  // navigation.navigate('New User Registeration');
// }

 
//const navigation=useNavigation();

// const goTologinScreen =({navigation}) =>{

//   navigation.navigate('New User Registeration')
//   console.log("signout")
//   setShowDropdown(false);
//   //next.navigate('New User Registeration');
// }

// const openDrawer = ({navigation}) => {
//   navigation.dispatch(DrawerActions.openDrawer());
// };

  const MyStack=()=> {
    return (
      
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
        
        <Stack.Screen name="E&E Solutions" component={MyTabs}  options={{headerShown:false}}
        // options={({navigation})=>({
          
        //     headerTitleAlign:'center',
        //     headerRight:()=>(
        //       <TouchableOpacity> 
        //         {/* onPress={openDrawer}              */}
        //        <Image 
        //       source={require('../assets/images/ee-brand.png')}
        //       style={{width:50,height:35,tintColor:'white'}}
        //       />
        //       </TouchableOpacity>

             
        //     ),
        //     // headerRight:()=>(
             
        //     //   <TouchableOpacity onPress={(event) => {event.preventDefault();setShowDropdown(!showDropdown)}}>
        //     //   <Image
        //     //   source={require('../assets/images/profile.png')}
        //     //   style={{width:35,height:35,tintColor:'white'}}
        //     //   />
        //     //   </TouchableOpacity>



        //     // ),
        //     headerStyle: { backgroundColor: '#27614C' }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }
            
         // }

          
   // )} 
        />
   
        <Stack.Screen name='New User Registeration' component={NewUser} options={{headerShown:false}}/>
        
        <Stack.Screen name='Edit Order' 
        // component={props => <Edit {...props} />} 
        component={EditOrder}
        options={{headerShown:true,headerStyle: { backgroundColor: colors.primary }, headerTintColor: 'white', headerTitleStyle: { fontWeight: 'bold' }
}}/>


      </Stack.Navigator>
    );
  }
  function MyTabs({navigation}) {
    return (
      <Tab.Navigator 
        screenOptions={{
          headerShown: 'false',headerTintColor:'white', headerStyle:{backgroundColor:colors.primary,borderBottomWidth:2,borderColor:'white'},tabBarActiveTintColor: 'white',tabBarHideOnKeyboard: true, tabBarInactiveTintColor: '#C9C9C9', tabBarShowLabel: true, tabBarStyle:
          {
            backgroundColor: colors.primary,
            position: 'absolute',
            //borderRadius: 30,
            //bottom: 20,
           // marginHorizontal: 10,
            padding: 8,
            paddingBottom: 8,
            height: 60
          }
        }}>
        <Tab.Screen name="Home" component={HomeTab} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('../assets/images/home.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#C9C9C9' }} />
            )

          }
        }} />
        <Tab.Screen name="Create New" component={AddOrderTab} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('../assets/images/add.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#C9C9C9' }} />
            )

          }
        }} />
        <Tab.Screen name="Show All" component={AllOrdersTab} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('../assets/images/eye.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#C9C9C9' }} />
            )

          }
        }} />
         <Tab.Screen name="Profile" component={ProfileTab} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image source={require('../assets/images/profile.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : '#C9C9C9' }} />
            )

          }
        }} />

      </Tab.Navigator>
    );
  }
  // function MyDrawerWithTabs(){
  //   return(
  //     <Drawer.Navigator drawerContent={props => <Sidebar{...props}/> }>
  //     <Drawer.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}}/>
  //   </Drawer.Navigator>
  //   )
  // }
 
  return (
     <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // Change to 'dark-content' if needed
      />
    
    
      <MyStack/>
      

      {/* <Dropdown showDropdown={showDropdown}
      goToNewRegisterScreen={goToNewRegisterScreen}
      goTologinScreen={goTologinScreen}/> */}
      
    
     
     </NavigationContainer> 
  )
}


 