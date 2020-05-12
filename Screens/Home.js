import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, TextInput , Image, Alert } from 'react-native';
//import {globalStyle} from '../Style/global'
export default function HomeScreen ({ navigation }){

    const onPressTODOHandler = () =>{
        navigation.navigate('TODO');
        //Alert.alert('heloooo');
    }

    const onPressReviewsHendler = () =>{
        navigation.navigate('Reviews');
        //Alert.alert('heloooo');
    }

    const openMenuHandler = () =>{
        Alert.alert('heloooo');
        navigation.openDrawer()
    }
    

return(
    <View style={styles.container}>
        {/* headerView */}
        <View style={styles.headerView}>
            <TouchableOpacity
            style={styles.menuBtn}
            onPress = {openMenuHandler}
            >
            <Image source={require('../assets/homeAssets/menu.png')} style={{width: 25, height: 25}} />
            </TouchableOpacity>
            <Image source={require('../assets/homeAssets/homeHeader.png')} style={styles.headerImage}/>
            <View style={{position: "absolute", bottom: 10, left: 20   }} >
            <Text style={{fontStyle: "normal", fontSize: 18}} >
                Select a
            </Text>
            <Text style={{fontStyle: "normal", fontSize: 22, fontWeight: "bold" }}>
                Your Daily Activity
            </Text>
            </View>
            
        </View>

        {/* containtView */}
        <View style={styles.containtView}>
            <Text style={{fontWeight: "100", fontStyle: "normal", fontSize: 18,}}  >
                Your daily activity matters more than what you do once in a while....!!
            </Text>

        </View>
        {/* gridContaintView */}
        <View style={styles.gridContaintView}>
            {/* View 1 */}
            <TouchableOpacity style={[styles.gridChild, styles.gridChild1]} 
                onPress = {onPressTODOHandler}
            >
                <Image source={require('../assets/homeAssets/conversation.png')} style={styles.gridImageAligmentTop}/>
            </TouchableOpacity>
            {/* View 2 */}
            <TouchableOpacity style={[styles.gridChild, styles.gridChild3]}>
                <Image source={require('../assets/homeAssets/listing.png')} style={styles.gridImageAligmentBottom}/>
            </TouchableOpacity>
            {/* View 3 */}
            <TouchableOpacity style={[styles.gridChild, styles.gridChild2]}>
                <Image source={require('../assets/homeAssets/meeting.png')} style={styles.gridImageAligmentTop}/>
            </TouchableOpacity>
            {/* View 4 */}
            <TouchableOpacity style={[styles.gridChild, styles.gridChild4]}
            onPress = {onPressReviewsHendler}
            >
                <Image source={require('../assets/homeAssets/learnig.png')} style={styles.gridImageAligmentBottom}/>
            </TouchableOpacity>

        </View>

        {/* footerView */}
    </View>
)
}

const styles = StyleSheet.create({
    container :{
      flex :1,
      //backgroundColor: '#03fc9d'
    },
    headerView:{
        height: 170,
        flexDirection: 'row',
    },
    menuBtn:{
        marginLeft: 20,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerImage:{
        width : 150,
        height: 150,
        position: 'absolute', 
        top: 20, right: 0,
    },
    containtView:{
        height: 90,
        padding: 20,
        justifyContent: "center",
       // backgroundColor: 'green',
    },
    gridContaintView:{
        flex: 3,
        flexWrap: "wrap",
       // padding: "5%",
        justifyContent: "center",
        alignContent: "center"
    },
    gridChild:{
        //backgroundColor: "pink", 
        width: "40%",  
        height: "40%",
        margin:10,
        borderRadius: 20,
    },
    gridChild1:{
        borderTopLeftRadius: 130,
        alignItems:"center", 
        backgroundColor : "#A065FF",
    },
    gridChild2:{
        borderTopRightRadius: 130,
        alignItems:"center", 
        backgroundColor: "#FA78A0",
    },
    gridChild3:{
        borderBottomLeftRadius: 130,
        alignItems:"center", 
        backgroundColor: "#6CD7C9",
    },
    gridChild4:{
        borderBottomRightRadius: 130,
        alignItems:"center", 
        backgroundColor: "#FDDD7C",
    },
    gridImageAligmentTop:{
        width: "80%", 
        height: "80%", 
        position:"absolute", 
        top:5
    },
    gridImageAligmentBottom:{
        width: "80%", 
        height: "80%", 
        position:"absolute", 
        bottom:5
    },






});