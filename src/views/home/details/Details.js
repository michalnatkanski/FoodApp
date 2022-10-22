import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "../../../assets/styles";
import styles from './Details.styles';
//components
import Info from '../../../components/details/info';
import Ingredients from '../../../components/details/ingredients';
import Button from '../../../components/general/button';
import Title from '../../../components/general/title';
import Price from '../../../components/general/price';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Details = ({ route, navigation }) => {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* Header*/}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.MAIN_COLORS.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.MAIN_COLORS.white} />
                    </View>
                </View>
            </SafeAreaView>
            <Title title={item.title} />
            <Price price={item.price} />
            <Info item={item} />
            {item.ingredients ? <Ingredients item={item} /> : null}
            <Button text={'Place an order'} />
        </View>
    )
};

export default Details;
