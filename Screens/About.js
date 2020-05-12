import React from 'react';
import {View,Text} from 'react-native';
import {globalStyles} from '../Style/global';

export default function AboutScreen(){
    return(
        <View style={globalStyles.container} >
            <Text style={globalStyles.titleText}>
                You here anugrah....!!
            </Text>
        </View>
    );
}