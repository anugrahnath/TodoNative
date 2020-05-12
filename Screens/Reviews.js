import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, FlatList} from 'react-native';
import {globalStyles} from '../Style/global';


export default function ReviewsMaster({ navigation }){
    const [reviewsData, setReviewsData] = useState([
        {title : "Dubai Silicon Oasis", rating: 5, body: "It's Dubai best residencial place.."},
        {title : "Business Bay", rating: 5, body: "It's Dubai best commercial place.."},
        {title : "Burjman", rating: 5, body: "It's Dubai best shoping place.."},
        {title : "Intrernet City", rating: 5, body: "It's Dubai best working place.."}
    ]); 



    return (
            <View style={globalStyles.container}>
            <FlatList 
            data = {reviewsData}
            renderItem ={({item}) => (
                    <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>
                                {item.title}
                        </Text>
                    </TouchableOpacity>
            )} 
            />

        </View>
    );
}

