import React, {useState} from 'react';
import { StyleSheet,ScrollView, Text, View, TouchableOpacity, TextInput , Image, Alert } from 'react-native'; 

export default function SignUpScreen({navigation}){

    const onPressHandler = () =>{
        navigation.goBack()
    }




    return(
        <ScrollView >
            <View style={styles.container}>
             {/* logo */}
             <View style={styles.logoView}>
                <Image source={require('../assets/todoLogo.png')}  style={styles.imageLogo} />
            </View>
        
            <View style={styles.inputView}>

                <TextInput style={styles.textInput} 
                placeholder = "Username" 
                returnKeyLabel = "next"
                />
                <TextInput style={styles.textInput} 
                placeholder = "Email" 
                returnKeyLabel = "next"
                />
                <TextInput style={styles.textInput} 
                placeholder = "Mobile" 
                returnKeyLabel = "next"
                />
                <TextInput style={styles.textInput} 
                placeholder = "Password" 
                returnKeyLabel = "next"
                />
                <TextInput style={styles.textInput} 
                placeholder = "Confirm Password" 
                returnKeyLabel = "next"
                />

                <TouchableOpacity style={styles.signInBtn}
               // onPress = {}
                >
                <Text style={{color : "white", fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>

                <View style={styles.newUser}>
                    <Text>Have an account?</Text>
                    <TouchableOpacity
                    onPress = {onPressHandler}
                    >
                        <Text style={{color : "blue", fontWeight: "bold"}}> Login </Text>
                    </TouchableOpacity>
                    <Text>here.</Text>
                </View>

            </View>
             {/* footer */}
             <View style ={styles.footer}>
             <Image source={require('../assets/footer.png')} style={styles.footerImage}  />
                 <Text style = {{color : "white", margin: 5, fontSize: 6 }}>@Developed by: Anugrah Nath Tiwari</Text>
             </View>

        </View>

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container :{
      flex :1,
      backgroundColor: 'white',
    },
    imageLogo : {
      width : 100,
      height:100,
      backgroundColor : "white",
      borderRadius : 50,
      margin : 30,
      
    },
    logoView:{
      flex : 3,
      alignItems : "center",
      backgroundColor: 'white',
      justifyContent : "flex-end",
    },
    inputView:{
        flex: 3,
        alignItems : "center",
       // backgroundColor: 'red',
        justifyContent: 'flex-end',
      },
      textInput:{
        width : "65%",
        height : 40,
        borderWidth : 1,
        borderColor : "gray",
        borderRadius  : 10,
        padding : 10,
        margin: 5,
        color : "black",
        fontWeight : "bold"
      },
      footer: {
        flex : 1,
        justifyContent : "flex-end",
        alignItems: "center",
      },
      footerImage:{
          width: "65%",
          height: 130,
          justifyContent : "flex-end",
      },
      signInBtn : {
        margin : 20,
        width : "65%",
        backgroundColor : "blue",
        height: 40,
        borderRadius: 10,
        alignItems : "center",
        justifyContent : "center"
      },
      newUser:{
          flexDirection: 'row'
      },
});