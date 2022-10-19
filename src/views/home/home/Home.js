import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
//components
import Categories from "../../../components/home/categories";
import Popular from "../../../components/home/popular";
import Search from "../../../components/home/search";
import Title from '../../../components/general/title';
import Header from '../../../components/general/header';
//helpers
import { filteredItems, categoriesData, searchResult } from "../../../utils/FilteringData";
import { useSearchDebounce } from "../../../utils/debounce";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const Home = ({ navigation }) => {

    const [activeCategory, setActiveCategory] = useState('Pizza');
    const [search, setSearch] = useState('')

    const filteredDataByCategory = filteredItems.filter(item => item.type === activeCategory);

    const debounceValue = useSearchDebounce(search, 250);

    const getSearchResult = searchResult(filteredDataByCategory, debounceValue)

    const data = getSearchResult === null ? filteredDataByCategory : getSearchResult;

    const setCategory = (type) => setActiveCategory(type);

    const handleItemsSearch = (value) => {
        setSearch(value)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <Title title={'Delivery'} subtitle={'Food'}/>
                <Search value={search} handleItemsSearch={handleItemsSearch}/>
                <Categories setCategory={setCategory} categoriesData={categoriesData} activeCategory={activeCategory}/>
                <Popular data={data} navigation={navigation}/>
            </ScrollView>
        </View>
    )
};

export default Home;