import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity,  ScrollView, Vibration, Animated,Easing } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function Oolong ({navigation}){

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
      <Animated.View 
      style={[styles.timerStyle,
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
          <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>
            Lets talk about Oolong tea!
          </Text>

          <View style={{alignItems:'center', marginTop:15}}>
            <Image style={{width:350, height:300}} source={require('../assets/pu-erh.jpg')}/>
          </View>
       
            <Text style={styles.textstyle}>{"\n"}Oolong or wulong, as it is also written, originally comes from Wuyi-shan in the Fujian province of China. 
              However, oolong teas are now produced in many places around the world, such as Taiwan, India, and Ceylon. {"\n"} 
            </Text>

            <Text style={styles.textstyle}>
              Oolong tea is a very varied type of tea. Oolong is partially fermented, like black tea, but the oxidation process is shorter, as it is interrupted when the desired result is achieved. 
              Oolong tea can have an oxidation time ranging from 10% to 70%, which results in a range of different flavor variations. 
              The lightly oxidized oolong tea is similar to green tea, with a milder and more floral flavor, while the more heavily oxidized oolong tea has a more complex and full-bodied flavor, like black tea. 
              Because the oxidation process is interrupted, it requires high precision from those who make the tea to achieve the desired flavor variation. 
              The complexity and variation of oolong tea also does not only depend on the different oxidation times it can have, but it can also be fermented, like pu-erh tea, or roasted after the oxidation process is complete.{"\n"} 
            </Text>

            <Text style={styles.textstyle}>  
              The appearance of oolong tea can vary from tightly rolled leaves in the form of small balls, also known as "gunpowder tea," to twisted leaves similar to the appearance of black tea. Formosa oolong is a type of oolong tea that originates from Taiwan. 
              When Portugal occupied Taiwan in the 1600s, they named Taiwan "Formosa," which means "beautiful island.{"\n"}
            </Text>

            <View style={{borderWidth: 5, borderColor: '#6FA379', borderStyle:'dotted',padding:20, margin:5, }}>
              <Text style={styles.textstyle}> 
                As oolong tea can resemble both black and green tea, it is sometimes mistakenly referred to as black or green tea by those who are unaware of its distinct qualities. 
                Be sure to ask the staff at the store where you purchase your tea to ensure that you are getting the correct type of tea!
              </Text>
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
        width:'50%', 
        borderColor:'#6FA379', 
        borderWidth:8, 

      },

  });