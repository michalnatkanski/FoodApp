import React from "react";
import { View, ScrollView } from "react-native";
import styles from './Home.styles';
//components
import Categories from "../../../components/home/categories";
import Popular from "../../../components/home/popular";
import Search from "../../../components/home/search";
import Title from '../../../components/general/title';
import Header from '../../../components/general/header';
//helpers
import { filteredItems, categoriesData, searchResult } from "../../../utils/FilteringData";
import { useSearchDebounce } from "../../../utils/debounce";
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    const state = useSelector(state => state);

    const activeCategory = state.currentCategory.currentCategory;
    
    const searchValue = state.searchValue.searchValue;

    const filteredDataByCategory = filteredItems.filter(item => item.type == activeCategory);

    const debounceValue = useSearchDebounce(searchValue, 250);

    const getSearchResult = searchResult(filteredDataByCategory, debounceValue)

    const data = getSearchResult === null ? filteredDataByCategory : getSearchResult;

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <Title title={'Delivery'} subtitle={'Food'} />
                <Search />
                <Categories categoriesData={categoriesData} />
                <Popular data={data} navigation={navigation} />
            </ScrollView>
        </View>
    )
};

export default Home;