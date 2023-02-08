import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,Button, Vibration, ScrollView ,Animated, Easing } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function White ({navigation}){

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


    const [timeLeft, setTimeLeft] = useState(240)
    const [isRunning, setIsRunning] = useState(false)


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
         <Animated.View  style={[styles.timerStyle,
            {  
           transform:[{translateX:ShakeAnim},{rotate:rotation }]
            }]}>
            <Text style={{fontSize:30, marginTop:10, marginBottom:10 }}> {formattedMinutes}:{formattedSeconds}</Text>
        
            <View style = {{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => {
              // Start the timer when the "Start" button is clicked
              setTimeLeft(240);
              setIsRunning(true);
              }}>
              <Image style={{width:80, height:60, marginRight:10,}} source={require('../assets/start.png')}/>
              </TouchableOpacity>
        

              <TouchableOpacity onPress = {() => {
              // Reset the timer to 4 minutes when the "undo" button is clicked
                setTimeLeft(240);
                setIsRunning(false); }}>
                <Image style={{width:30, height:30, marginTop:15}} source={require('../assets/undo-arrow.png')} />
              </TouchableOpacity>
           </View>
          </Animated.View >
        </View>
  
        <View style={styles.article}>
          <Text style={{fontWeight:'bold', fontSize:18, textAlign:'center'}}> Lets talk about White tea! </Text>
            <View style={{alignItems:'center', marginTop:15}}>
              <Image style={{width:350, height:300}} source={require('../assets/vitttepaimutan.jpg')}/>
            </View>
       
          <Text style={styles.textstyle}> {"\n"}
              White tea originates from China and continues to be primarily produced there today, with other countries like India and Nepal also contributing to its production. 
              Unlike other types of tea, white tea undergoes minimal processing, preserving its natural flavor. 
              The tea leaves are not subjected to heating or rolling, unlike green or black tea, which minimizes oxidation and results in a mild, sweet taste{"\n"} 
          </Text>
        
          <Text style={styles.textstyle}>
              White tea is prized for its delicate taste, as well as its high concentration of beneficial substances such as antioxidants like catechins and flavonoids. 
              Additionally, white tea has lower levels of caffeine and tannins compared to other teas, making it a unique and highly sought-after variety that is typically more expensive than other teas.
          </Text>
            <Text style={styles.textstyle}>   
            </Text>
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
      width:390,
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
  
  
      article:{
        backgroundColor:'white', 
        padding:20, 
        margin: 15,   
      },

      textstyle:{
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