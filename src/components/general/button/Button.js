import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../assets/styles";
import styles from './Button.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const Button = ({text}) => {
    
    return (
        <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>{text}</Text>
                <Feather name="chevron-right" size={18} color={colors.MAIN_COLORS.black} />
            </View>
        </TouchableOpacity>
    )
};

export default Button;