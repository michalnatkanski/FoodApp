import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
        fontSize: 10
    },
})

const Categories = ({ categoriesData, setCategory, activeCategory }) => {

    const renderCategoryItem = ({ item }) => {

        return (
            <TouchableOpacity 
            onPress={() => setCategory(item.type)} 
            style={[styles.categoryItemWrapper, {
                backgroundColor: item.type === activeCategory ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.type}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.type === activeCategory ? colors.white : colors.secondary
                }]}>
                    <Feather
                        style={styles.categorySelectIcon}
                        name="chevron-right"
                        size={8}
                        color={item.type === activeCategory ? colors.black : colors.white}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
    )
}

export default Categories;

