import React from 'react';
import {StyleSheet, View, Text, SafeAreaView,} from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function About ({navigation}){

  
      return(
      <View style={styles.container}>
        <SafeAreaView>
     
        <View style={styles.headerView}>
          <Text style={styles.header}>About Make tea!</Text>
        </View>
  
        <View style={{backgroundColor:'white', padding:10, margin: 15, borderRadius:10, borderColor:'#6FA379', borderWidth:5}}>
          <Text style={{fontWeight:'bold', fontSize:18, textAlign:'center'}}>Welcome to Make tea!</Text>
          <Text>{"\n"}In this app you will learn more about the wonderful drink tea. Make tea is a app where you can read about different type of tea. {"\n"}{"\n"}Learn about the process and use a tea timer to clock your favorite tea.</Text>
        </View>
        
        <StatusBar style="auto" />
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
        fontFamily:'Helvetica', 
        color: 'white',
        margin: 10,
      },
    
    
    });