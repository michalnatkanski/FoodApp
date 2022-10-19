import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

const styles = StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,
    },
})

const Search = ({handleItemsSearch, value}) => {

    return (
        <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
                <TextInput 
                    onChangeText={(value) => handleItemsSearch(value)} 
                    style={styles.searchText} placeholder={'Search'} 
                    value={value}
                />
            </View>
        </View>
    )
}

export default Search;