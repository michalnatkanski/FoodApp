import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";

const styles = StyleSheet.create({
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
});

const Title = ({ title, subtitle }) => {

    return (
        <View style={[styles.titleWrapper, {
            marginTop: subtitle ? 30 : 0,
        }]}>
            {subtitle ?
                <Text style={styles.titlesSubtitle}>{subtitle}</Text>
                : null
            }
            <Text style={[styles.titlesTitle, {
                width: subtitle ? '100%' : '70%',
                marginTop: subtitle ? 5 : 0,
            }]}>{title}</Text>
        </View>
    )
};

export default Title;