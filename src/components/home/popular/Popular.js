import React from "react";
import { View, Text } from "react-native";
import styles from './Popular.styles';
import { useSelector } from 'react-redux';
//components
import Item from "../item";
//helpers
import { filteredItems, searchResult } from "../../../utils/FilteringData";
import { useSearchDebounce } from "../../../utils/debounce";
//nav
import { useNavigation } from "@react-navigation/native";

const Popular = () => {

    const navigation = useNavigation();

    const state = useSelector(state => state);

    const activeCategory = state.currentCategory;

    const searchValue = state.searchValue;

    const filteredDataByCategory = filteredItems.filter(item => item.type == activeCategory);

    const debounceValue = useSearchDebounce(searchValue, 250);

    const getSearchResult = searchResult(filteredDataByCategory, debounceValue)

    const data = getSearchResult === null ? filteredDataByCategory : getSearchResult;

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

