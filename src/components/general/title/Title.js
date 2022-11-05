import React from "react";
import { View, Text } from "react-native";
import styles from './Title.styles';

const Title = ({ title, subtitle }) => {

    return (
        <View style={styles.titleWrapper}>
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