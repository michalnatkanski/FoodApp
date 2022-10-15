import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
});

const Price = ({price}) => {

    return (
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>${price}</Text>
        </View>
    )
};

export default Price;