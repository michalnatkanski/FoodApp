import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from './Ingredients.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

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