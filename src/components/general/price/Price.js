import React from "react";
import { View, Text } from "react-native";
import styles from './Price.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const Price = ({price}) => {

    return (
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>${price}</Text>
        </View>
    )
};

export default Price;