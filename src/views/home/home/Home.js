import React from "react";
import { View, ScrollView } from "react-native";
import styles from './Home.styles';
//components
import Categories from "../../../components/home/categories";
import Popular from "../../../components/home/popular";
import Search from "../../../components/home/search";
import Title from '../../../components/general/title';
import Header from '../../../components/general/header';

const Home = () => {

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Header main={true} />
                <Title title={'Delivery'} subtitle={'Food'} />
                <Search />
                <Categories />
                <Popular />
            </ScrollView>
        </View>
    )
};

export default Home;