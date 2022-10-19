import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    infoWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textLight,
    },
    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.textDark,
        marginTop: 5,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
});

const Info = ({ item }) => {

    return (
        <View style={styles.infoWrapper}>
            <View style={styles.infoLeftWrapper}>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Size</Text>
                    <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber ? item.sizeNumber + "'" : null}</Text>
                </View>
                <View style={styles.infoItemWrapper}>
                    {item.crust ? (
                        <>
                            <Text style={styles.infoItemTitle}>Crust</Text>
                            <Text style={styles.infoItemText}>{item.crust}</Text>
                        </>
                    ) : null}
                </View>
                <View style={styles.infoItemWrapper}>
                    <Text style={styles.infoItemTitle}>Delivery in</Text>
                    <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
                </View>
            </View>
            <View>
                <Image source={item.image} style={styles.itemImage} />
            </View>
        </View>
    )
};

export default Info;