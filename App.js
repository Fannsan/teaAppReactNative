import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import Black from './screens/Blacktea';
import Green from './screens/Greentea';
import Matcha from './screens/Matchatea';
import Oolong from './screens/Oolong';
import White from './screens/White';
import Puehr from './screens/Puehr';



export default function App() {

  //Here I create a Stack variable that is a createStackNavigation.
  const Stack = createStackNavigator();

  return (
   //Here is the NavigationContainer wich holds my navigation components with my different screens.
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= "Home" component={Home} 
      options={{
        headerShown:false, //here I hide the navigation on the Home screen
        }}/>
        
      <Stack.Screen name= "About" component={About} 
      //In options I can change how the navigation looks
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:90,
        }
      }}/>

      <Stack.Screen name = "Black tea" component={Black}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      <Stack.Screen name = "Green tea" component={Green}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      <Stack.Screen name = "Matcha tea" component={Matcha}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      <Stack.Screen name = "Oolong tea" component={Oolong}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      <Stack.Screen name = "White tea" component={White}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      <Stack.Screen name = "Puehr" component={Puehr}
      options={{
        headerTintColor:'white', 
        headerStyle:{
          backgroundColor:'#6FA379',
          height:80,
        }}}/>

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

  