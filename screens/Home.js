import React, { useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView, StatusBar} from 'react-native';

//My custom component PictureMenu
const PictureMenu =({picture, pictureDescribed }) =>{
  return(
      <View>
        <View style={styles.pictureboxes}>
        <Image 
        source={picture}
        style= {styles.pix} />
        <Text style={styles.pictureText}>{pictureDescribed}</Text>
        </View>
      </View>
)}

export default function Home ({navigation}){
 
  //UseState hook for my modal visibility
  const [modalVisable, setModalVisable] = useState(false);


    return(
      
      <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
  
     
      <View style={styles.headerView}>
        <View>
          <TouchableOpacity onPress={()=> setModalVisable(true)}>
            <Image style={styles.headerMenuPicture} source = {require('../assets/list.png')}/>
          </TouchableOpacity>
        </View>
    
        <Text style={styles.header}>Make tea!</Text>
        <Image style={styles.headerPicture} source = {require('../assets/green-tea.png')}/>
      </View>

      {/* My modal apper when the headerMenuPicture is pressed  */}
      <Modal
        transparent 
         visible={modalVisable}
         animationIn='Left'>
         <View style={{alignItems:'left'}}> 
           <View style={styles.modalStyle}>

             
            <View>    
             <Text style={styles.modalText} onPress={()=>{ navigation.navigate('About')}}>About us</Text>
             <Text style={styles.modalText}>Our teas:</Text>
            </View>

            <View>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('Black tea')}}>Black tea </Text>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('Green tea')}}>Green tea</Text>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('Matcha tea')}}>Matcha tea</Text>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('Puehr')}}>Pu-ehr tea</Text>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('Oolong tea')}}>Oolong tea</Text>
              <Text style={styles.modalSmallText} onPress={()=>{ navigation.navigate('White tea')}}>White tea</Text>
            </View>

              <TouchableOpacity onPress={() => setModalVisable(!modalVisable) }> 
                <Image style={styles.close} source = {require('../assets/close.png')}/>
              </TouchableOpacity>
            </View>      
         </View>
       </Modal>


        <View style={styles.mainContentView}>
            <Text style={{ fontSize:20, fontWeight:'bold'}}>Welcome to Make tea!</Text>
            <Text style={{fontSize:16, marginBottom:10,}}> {'\n'}
              In this app you will learn more about the wonderful drink tea and some health benifits with it. 
              {'\n'}{'\n'}Press a picture of a tea to read more about that specific type.
            </Text>
        </View>

        <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>

        <TouchableOpacity onPress = {() =>  navigation.navigate ('Black tea')}>
          <PictureMenu picture={require('../assets/tekanna.jpg')} pictureDescribed={'Black tea'}/>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() =>  navigation.navigate ('Green tea')} >
          <PictureMenu picture={require('../assets/tea-623796_640.jpg')} pictureDescribed={'Green'}/>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() =>  navigation.navigate ('Matcha tea')} >
          <PictureMenu picture={require('../assets/matcha.jpg')} pictureDescribed={'Matcha'} />
        </TouchableOpacity>
  
        <TouchableOpacity onPress = {() =>  navigation.push ('Puehr')} >
          <PictureMenu picture={require('../assets/pu-erh.jpg')} pictureDescribed={'Pu-ehr'}/>
        </TouchableOpacity>
  
        <TouchableOpacity onPress = {() =>  navigation.navigate ('Oolong tea')}>
          <PictureMenu picture={require('../assets/gunpowdertea.jpg')} pictureDescribed={'Oolong tea'}/>
        </TouchableOpacity>
  
        <TouchableOpacity onPress = {() =>  navigation.push ('White tea')} >
          <PictureMenu picture={require('../assets/vitttepaimutan.jpg')} pictureDescribed={'White tea'}/>
        </TouchableOpacity>
  
        </View>
  
        <View style={{backgroundColor: '#6FA379', width:'100%', height:80,}}>
          <Text style={{color:'white', textAlign:'center'}}>
          {'\n'}Copyright ©
          {'\n'}Fanny Isaksson
          {'\n'}Stockholm</Text>
        </View>

        <StatusBar style="auto" />

        </ScrollView>
        </SafeAreaView>
      </View>
      
      
    );


}


//Here is my styles for different sections in the code
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BBF0C5', 
    },
    headerView:{
      backgroundColor:'#6FA379', 
      height:80, 
      width: '100%',
      flexDirection: 'row',
      padding:5,
      justifyContent:'space-evenly'
    },
  
    header:{
      fontSize:35, 
      textAlign:'center',  
      color: 'white',
      marginTop:20,
      margin: 10,
      fontWeight:'bold'
    },
    headerPicture:{
      width: 50, 
      height:50, 
      marginTop:9
    },
    headerMenuPicture:{
      width:45,
      height:45, 
      marginTop:15, 
      marginLeft:-8
    },
    mainContentView:{
      backgroundColor:'white', 
      padding:10, 
      margin: 15, 
      borderColor: '#6FA379' ,
      borderRadius:10, 
      borderWidth:5,
    },

    pictureboxes: {
      margin: 10,
      backgroundColor: "#6FA379",
      height:180,
      width:150,
      borderRadius:10,

      },

    pictureText:{
        textAlign: 'center', 
        color:'white',  
        fontSize:20, 
        fontWeight:'bold'
      },
  
    pix:{
      margin:10,  
      height:130,
      width:130,
      },

      modalStyle:{
        justifyContent:'flex-start',  
        marginTop:50, 
        alignItems:'center',
        height:'65%', 
        width:'50%', 
        backgroundColor: 'white',
        borderRadius: 10,
        },

        modalText:{
          marginTop:30, 
          fontSize:25
        },

        modalSmallText:{
          fontSize:18,
          marginTop:10,
        },
        close:{
          marginTop:30,
          marginBottom:20, 
          borderColor:'#6FA379', 
          borderWidth:5 
        }
  
  });