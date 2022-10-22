import React from "react";
import { View, TextInput } from "react-native";
import { colors } from "../../../assets/styles/colors";
import styles from './Search.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

import { useDispatch, useSelector } from 'react-redux';
import { SearchItems } from "../../../redux/actions/actions";

const Search = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const searchValue = data.searchValue.searchValue;

    return (
        <View style={styles.searchWrapper}>
            <Feather name="search" size={16} color={colors.textDark} />
            <View style={styles.search}>
                <TextInput
                    onChangeText={(value) => dispatch(SearchItems(value))}
                    style={styles.searchText} placeholder={'Search'}
                    value={searchValue}
                />
            </View>
        </View>
    )
}

export default Search;