import React from "react";
import { 
    View, 
    Text, 
    FlatList, 
    Image, 
    TouchableOpacity
} from "react-native";

import { colors } from "../../../assets/styles/colors";
import styles from './Categories.styles';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

import { useDispatch, useSelector } from 'react-redux';
import { ChangeCategories } from "../../../redux/actions/actions";

const Categories = ({ categoriesData }) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const activeCategory = data.currentCategory.currentCategory;

    handleChangeCategory = (type) => dispatch(ChangeCategories(type));

    const renderCategoryItem = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() => handleChangeCategory(item.type)}
                style={[styles.categoryItemWrapper, {
                    backgroundColor: item.type === activeCategory ? colors.primary : colors.white,
                    marginLeft: item.id == 1 ? 20 : 0,
                }]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.type}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.type === activeCategory ? colors.white : colors.secondary
                }]}>
                    <Feather
                        style={styles.categorySelectIcon}
                        name="chevron-right"
                        size={8}
                        color={item.type === activeCategory ? colors.black : colors.white}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWrapper}>
                <FlatList
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Categories;

