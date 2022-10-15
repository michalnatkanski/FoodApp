import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain',
    },
});

const Ingredients = ({ item }) => {

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientItemWrapper, {
                marginLeft: item.id === '1' ? 20 : 0,
            }]}>
                <Image style={styles.ingredientImage} source={item.image} />
            </View>
        )
    }

    return (
        <View style={styles.ingredientsWrapper}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            <View style={styles.ingredientsListWrapper}>
                <FlatList
                    data={item.ingredients}
                    renderItem={renderIngredientsItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
};

export default Ingredients;