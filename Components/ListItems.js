import React from 'react';
import {StyleSheet,TouchableOpacity,Text} from 'react-native';

export default function ListItemsView({item, pressHendlar}){

    return (
        <TouchableOpacity onPress = {() => pressHendlar(item.key)} >
            <Text style = {styles.items}>
            {item.text}

            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    items : {
        padding : 16,
        marginTop : 15,
        borderColor : "red",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth : 1,
    }
})