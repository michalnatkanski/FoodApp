import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Info.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

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