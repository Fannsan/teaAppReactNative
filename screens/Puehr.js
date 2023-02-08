import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,Button, Vibration, ScrollView , Animated, Easing } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function Puehr ({navigation}){

  const ShakeAnim = new Animated.Value(0);

//Making a shake funcion 
  const Shake = () => {
    Animated.sequence([
        Animated.timing(ShakeAnim, {
            toValue: -20,
            duration: 50,
            easing: Easing.linear,
            useNativeDriver:true,
        }),
        Animated.timing(ShakeAnim, {
            toValue: 20,
            duration: 50,
            easing: Easing.linear,
            useNativeDriver:true,
        }),
        Animated.timing(ShakeAnim, {
            toValue: -20,
            duration: 50,
            easing: Easing.linear,
            useNativeDriver:true,
        }),
        Animated.timing(ShakeAnim, {
            toValue: 20,
            duration: 50,
            easing: Easing.linear,
            useNativeDriver:true,
        }),
        Animated.timing(ShakeAnim, {
            toValue: 0,
            duration: 50,
            easing: Easing.linear,
            useNativeDriver:true,
        }),
    ]).start();
   };

   //Shaking animation using rotate
      const rotation = ShakeAnim.interpolate({
      inputRange:[-20,20],
      outputRange:["-10deg","10deg"],
      });

   
    const [timeLeft, setTimeLeft] = useState(120)
    const [isRunning, setIsRunning] = useState(false)

     //Making my timer function with useEffect to countdown from timeLeft to 0
    useEffect(()=> {
      
      let interval = null;
      if (isRunning && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
      } else if (isRunning && timeLeft === 0) {
          Vibration.vibrate([1000,1000,1000,1000]); // vibrate the device 4 times when the countdown reaches 0
          Shake();
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
      
    }, [isRunning, timeLeft]);


      // Calculate the minutes and seconds from the total number of seconds
      const minutes = Math.floor(timeLeft / 60);
      const remainingSeconds = timeLeft % 60;

      // Add leading zeros if the minutes or seconds are single digits
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  
      return(
          <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
     
      <View style={styles.headerView}>
      <Text style={styles.header}>Make tea!</Text>
      <Image style={{height:50, width:50}} source={require('../assets/green-tea.png')}/>
      </View>

        <View style={{alignItems:'center'}}>
        <Animated.View style={[styles.timerStyle,
        {  
        transform:[{translateX:ShakeAnim},{rotate:rotation }]
        }]}>
        <Text style={{fontSize:30, marginTop:10, marginBottom:10}}> {formattedMinutes}:{formattedSeconds}</Text>
        
        <View style = {{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => {
            // Start the timer when the "Start" button is clicked
            setTimeLeft(120);
            setIsRunning(true);
            }}>
          <Image style={{width:80, height:60, marginRight:10,}} source={require('../assets/start.png')}/>
        </TouchableOpacity>
        

        <TouchableOpacity onPress = {() => {
            // Reset the timer to 2 minutes when the "undo" button is clicked
            setTimeLeft(120);
            setIsRunning(false); 
            }}>
        <Image style={{width:30, height:30, marginTop:15}} source={require('../assets/undo-arrow.png')} />
        </TouchableOpacity>
        </View>

      </Animated.View >
     </View>
  
      <View style={styles.article}>
          <Text style={{fontWeight:'bold',  fontSize:20, textAlign:'center'}}> Lets talk about Pu-ehr! </Text>
          <View style={{alignItems:'center', marginTop:15}}>
            <Image style={{width:350, height:300}} source={require('../assets/pu-erh.jpg')}/>
          </View>
       
          <Text style={styles.textStyle}>{"\n"}Pu-erh tea is renowned for its rich and bold flavor, crafted using the Camellia Sinensis varietal Assemica. Unlike traditional teas, which are made using the Sinensis varietal, Pu-erh tea boasts a unique taste and aroma.
                Pu-erh tea comes in two variations, Sheng (green) and Shu (black), both of which originate from the Yunnan province in China. 
                The tea bushes used to create Pu-erh tea are grown to be strong and mature, with some being several hundred years old, their deep roots imbuing the leaves with a robust and full-bodied flavor. {"\n"} </Text>
            <></>
            <Text style={styles.textStyle}>The trees also grow more in the wild and are allowed to grow taller than the regular tea bush, which is typically kept at waist height for ease of picking. 
                After the leaves have undergone the initial process of oxidation or non-oxidation, Pu-erh tea also undergoes another process known as fermentation.
            </Text>
            <Text style={styles.textStyle}>If the tea is to ferment in a traditional way, the fermentation process typically takes 20-25 years. However, today, warehouses are used where the process is accelerated by heating up the environment.</Text>
          </View>
        
        <StatusBar style="auto" />
  
        </ScrollView>
        </SafeAreaView>
      </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BBF0C5',
      alignItems: '',
      justifyContent: '',
    },
    headerView:{
      backgroundColor:'#6FA379', 
      height:70, 
      width:'100%',
      flexDirection: 'row',
      padding:10,
      justifyContent:'space-evenly'
    },
  
    header:{
      fontSize:30, 
      textAlign:'center', 
      fontWeight:'bold', 
      color: 'white',
      margin: 10,
    },
    pictureboxes: {
      margin: 10,
      backgroundColor: "#6FA379",
      height:190,
      width:170,
      },
  
    pix:{
      margin:10,  
      height:150,
      width:150,
      },

      article:{
        backgroundColor:'white', 
        padding:20, 
        margin: 15, 
        
      },

      textStyle:{
        fontSize:18,

      },

      timerStyle:{
        backgroundColor:'white', 
        padding:30, 
        margin: 15, 
        alignItems:'center', 
        borderRadius:100, 
        width:200, 
        borderColor:'#6FA379', 
        borderWidth:8, 
        height:200,

      },
  
  });