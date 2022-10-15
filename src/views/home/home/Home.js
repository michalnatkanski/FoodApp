import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
//data
import categoriesData from '../../../assets/data/categoriesData';
import popularData from '../../../assets/data/popularData';
//components
import Categories from "../../../components/home/categories";
import Popular from "../../../components/home/popular";
import Search from "../../../components/home/search";
import Title from '../../../components/general/title';
import Header from '../../../components/general/header';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const Home = ({ navigation }) => {

    // const setFundsSearch = ({ target }) => {
    //     setSearch(target.value)
    // }
    // const [filteredDataSource, setFilteredDataSource] = useState(popularData);

    // const searchFilterFunction = (text) => {
    //     if (!text) return;
    //     const newData = popularData.filter(item => String(item.title).includes(text))
    //     setFilteredDataSource(newData.length == 0 ? newData : popularData);
    //   };

    //sprawdzic filtrowanie z fund screenera i zrobic debounce

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <Header />
                {/* {titles} */}
                <Title title={'Delivery'} subtitle={'Food'}/>
                {/* {Search} */}
                <Search />
                {/* {Categories} */}
                <Categories categoriesData={categoriesData}/>
                {/* {Popular} */}
                <Popular popularData={popularData} navigation={navigation}/>
            </ScrollView>
        </View>
    )
};

export default Home;