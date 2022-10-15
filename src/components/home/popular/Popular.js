import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import colors from "../../../assets/colors/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { getTypes } from '../../../utils/FilteringData';

MaterialCommunityIcons.loadFont();
Feather.loadFont();

const styles = StyleSheet.create({
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-Semibold',
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 12,
        color: colors.black,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    },
})

const Popular = ({ popularData, navigation }) => {
// oddzielic do glownego stora te filtrowanie
    const getTypes = (popularData) => {
       
    }
    let currentType = 'pizza';
    const types = popularData.map(item => item.type);
    const filteredData = popularData.filter(item => item.type === currentType);
//    stop
    return (
        <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>
            {filteredData.map(item => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', {
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
            ))}
        </View>
    )
}

export default Popular;

