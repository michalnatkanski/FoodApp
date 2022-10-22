import React from "react";
import { View, Text } from "react-native";
import styles from './Popular.styles';
//components
import Item from "../item";

const Popular = ({ data, navigation }) => {
    return (
        <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {data.length ? (data.map(item => (
                <Item onPress={() => navigation.navigate('DETAILS', {
                    item: item,
                })} item={item} key={item.id} />
            ))) :
                (<Text style={styles.noItems}>no items :(</Text>)}
        </View>
    )
}

export default Popular;

