import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
});

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