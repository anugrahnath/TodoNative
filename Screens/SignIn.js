import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput , Image, Alert } from 'react-native';

export default function SignInScreen ({ navigation }){

    const [textEmail, setEmailText] = useState('');
    const [textPassword, setPasswordText] = useState('');
    const [isValidate] = useState(false);

    const onChangeHendlerEmail = (val) =>{
        console.log(val)
        setEmailText(val)
    }

    const onChangeHendlerPassword = (val) =>{
        console.log(val)
        setPasswordText(val)
    }
  
    const onPressLogin = () =>{
        navigation.navigate('Home');

        // if (textEmail == ""){
        //     Alert.alert("Please enter email.")
        // }else if (validateEmail(textEmail)){
           
        // }else{
        //     Alert.alert("Please enter valid email.")
        // }
    }

    const validateEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
          console.log("Email is Not Correct");
          return false;
        }
        else {
          console.log("Email is Correct");
          return true;
        }
      }

      const onPressRegister = () =>{
            navigation.push('SignUp');  
      }


 
  return (
      <ScrollView style={styles.container}>
          <View >
    {/* logo */}
            <View style={styles.logoView}>
                <Image source={require('../assets/todoLogo.png')}  style={styles.imageLogo} />
            </View>
    {/* imput field */}
            <View style={styles.inputView}>

                <TextInput style={styles.textInput} 
                placeholder = "Username" 
                returnKeyLabel = "next"
                underlineColorAndroid= 'transparent'
                onChangeText = {onChangeHendlerEmail}
                value = {textEmail}
                />

                <TextInput style={styles.textInput} 
                placeholder = "Password" 
                secureTextEntry = {true}
                returnKeyType= 'go'
                onChangeText={onChangeHendlerPassword}  
                />

                <TouchableOpacity style={styles.signInBtn}
                onPress = {onPressLogin}
                >
                <Text style={{color : "white", fontWeight: "bold"}}>Login</Text>
                </TouchableOpacity>

                <View style={styles.newUser}>
                    <Text>New User?</Text>
                    <TouchableOpacity
                    onPress = {onPressRegister}
                    >
                        <Text style={{color : "blue", fontWeight: "bold"}}> Register </Text>
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
      backgroundColor: 'white'
    },
    imageLogo : {
      width : 100,
      height:100,
      backgroundColor : "white",
      borderRadius : 50,
      margin : 30,
      
      
    },
    logoView:{
      flex : 2,
      alignItems : "center",
      backgroundColor: 'white',
      justifyContent : "flex-end",
    },
    inputView:{
      flex: 3,
      alignItems : "center",
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

  })
  