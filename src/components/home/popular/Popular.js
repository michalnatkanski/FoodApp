import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../../assets/colors/colors";
import styles from './Popular.styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

MaterialCommunityIcons.loadFont();
Feather.loadFont();

const Popular = ({ data, navigation }) => {
    return (
        <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {data.length ? (data.map(item => (
                <TouchableOpacity onPress={() => navigation.navigate('DETAILS', {
                    item: item,
                })} key={item.id}>
                    <View
                        style={[
                            styles.popularCardWrapper,
                            {
                                marginTop: item.id == 1 ? 10 : 20,
                            }
                        ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons name="crown" size={12} color={colors.primary} />
                                    <Text style={styles.popularTopText}>top of the week</Text>
                                </View>
                                <View style={styles.popularTitlesWrapper}>
                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                    <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                </View>
                            </View>
                            <View style={styles.popularCardBottom}>
                                <View style={styles.addPizzaButton}>
                                    <Feather name="plus" size={10} color={colors.textDark} />
                                </View>
                                <View style={styles.ratingWrapper}>
                                    <MaterialCommunityIcons name="star" size={10} color={colors.textDark} />
                                    <Text style={styles.rating}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage} />
                        </View>
                    </View>
                </TouchableOpacity>
            ))) :
                (<Text style={styles.noItems}>no items :(</Text>)}
        </View>
    )
}

export default Popular;

