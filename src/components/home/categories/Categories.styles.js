import { StyleSheet } from "react-native";
import { colors, constants, typography } from "../../../assets/styles";

export default StyleSheet.create({
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_16,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: constants.BORDER_RADIUS.CATEGORY_ITEM,
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: typography.FONT_MONTSERRAT_MEDIUM,
        fontSize: typography.FONT_SIZE_14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: constants.BORDER_RADIUS.SELECT_ITEM,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
        fontSize: typography.FONT_SIZE_10
    },
})