import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import colors from "../../../assets/colors/colors";
import styles from './Header.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const Header = () => {

    return (
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <Image source={require('../../../assets/images/profile.png')} style={styles.profileImage} />
                <Feather name="menu" size={24} color={colors.textDark} />
            </View>
        </SafeAreaView>
    )
};

export default Header;