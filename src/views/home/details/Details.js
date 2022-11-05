import React from "react";
import { View, ScrollView } from "react-native";

import styles from './Details.styles';
//components
import Info from '../../../components/details/info';
import Ingredients from '../../../components/details/ingredients';
import Button from '../../../components/general/button';
import Title from '../../../components/general/title';
import Price from '../../../components/general/price';
import Header from '../../../components/general/header';

const Details = ({ route, navigation }) => {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
            >
                <Header main={false} navigation={navigation}/>
                <Title title={item.title} />
                <Price price={item.price} />
                <Info item={item} />
                {item.ingredients ? <Ingredients item={item} /> : null}
                <Button text={'Place an order'} />
            </ScrollView>
        </View>
    )
};

export default Details;
