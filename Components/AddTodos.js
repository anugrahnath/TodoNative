import React, { useState } from 'react';
import {View,TextInput, StyleSheet, Button} from 'react-native';


export default function AddTodo({submitHendler}){

const [text, setText] = useState('');

const changeHendler = (val) =>{
    console.log(val)
    setText(val)
}

    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder = "Add todo..."
            onChange = {changeHendler}
            />

            <Button 
            title="Add Todo"
            onPress = {() => submitHendler(text)}
            color = 'coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor : "coral",
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical : 6,

    }
})