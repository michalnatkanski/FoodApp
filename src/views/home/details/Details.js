import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors/colors';
//components
import Info from '../../../components/details/info';
import Ingredients from '../../../components/details/ingredients';
import Button from '../../../components/general/button';
import Title from '../../../components/general/title';
import Price from '../../../components/general/price';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
});

const Details = ({ route, navigation }) => {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            {/* Header*/}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white} />
                    </View>
                </View>
            </SafeAreaView>         
            <Title title={item.title}/>       
            <Price price={item.price} />      
            <Info item ={item}/>       
            {item.ingredients ? <Ingredients item={item} /> : null}
            <Button text={'Place an order'}/>
        </View>
    )
};

export default Details;
