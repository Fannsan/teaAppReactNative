import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Vibration, Animated, Easing } from 'react-native';
import React from "react";
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

export default function Black ({navigation}){

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
      <Text style={styles.header}> Make tea!</Text>
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
          <Text style={{fontWeight:'bold',  fontSize:20, textAlign:'center'}}>Lets talk about black tea!</Text>
          <View style={{alignItems:'center', marginTop:15}}>
            <Image style={{width:350, height:300}} source={require('../assets/tekanna.jpg')}/>
          </View>
       
          <Text style={styles.textstyle}>{"\n"}Black tea is probably the type of tea we usually associate with tea when we talk about it. 
          Black tea is oxidized to about 90-95%, the young leaves are picked and either hand-rolled or machines that damage the leaves and release the natural oils that cause the tea to oxidize. 
          The tea becomes more robust in flavor due to the oxidation. Black tea is also darker in color than the other types of tea except for Pu-erh.{"\n"} </Text>
            <></>
            <Text style={styles.textstyle}>
            As the name suggests, this tea is dark in color, generally strong in taste and often has many different variations of flavors. That's why it's so popular. 
            When we go into the store, we can find a variety of different packages with flavors ranging from Earl Gray to strawberries and cream.
            {"\n"} 
            </Text>
            <Text style={styles.textstyle}>
            Black tea has a classification system for the leaves, which none of the other types of tea use. 
            This classification system explains the appearance of the leaves but not its aroma and taste. 
            This classification system is used in India, Sri Lanka, and Kenya. If you buy tea from these countries, you may find these denominations.
            {"\n"}</Text>

            <View style={{borderWidth: 5, borderColor: '#6FA379', borderStyle:'dotted', padding:20, margin:5, }}>

            <Text style={styles.textstyle}> Fun fact: In China, black tea is known as red tea because of its reddish color when steeped in water.</Text>
              </View>

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
        height:200, 
        borderColor:'#6FA379', 
        borderWidth:8, 

      },
  
  });