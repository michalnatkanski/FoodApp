import React from "react";
import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../assets/styles";
import styles from './Header.styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//nav
import { useNavigation } from "@react-navigation/native";

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Header = ({ main }) => {

    const navigation = useNavigation();
    
    return (
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                {main ? (
                    <>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/profile.png')} style={styles.profileImage} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="menu" size={24} color={colors.MAIN_COLORS.TEXT_DARK} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.headerLeft}>
                                <Feather name="chevron-left" size={12} color={colors.MAIN_COLORS.TEXT_DARK} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.headerRight}>
                                <MaterialCommunityIcons name="star" size={12} color={colors.MAIN_COLORS.WHITE} />
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </SafeAreaView>
    )
};

export default Header;