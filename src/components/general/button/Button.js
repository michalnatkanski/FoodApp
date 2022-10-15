import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    },
});

const Button = ({text}) => {

    return (
        <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>{text}</Text>
                <Feather name="chevron-right" size={18} color={colors.black} />
            </View>
        </TouchableOpacity>
    )
};

export default Button;