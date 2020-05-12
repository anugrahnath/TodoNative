import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {globalStyles} from '../Style/global';

export default function ReviewDetailsMaster({ navigation }){

return(
<View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>
        {navigation.getParam('body')}
        

    </Text>
</View>
);
}