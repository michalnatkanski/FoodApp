import { StyleSheet } from "react-native";
import { colors, constants, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    categoriesWrapper: {
        marginTop: spacings.SCALE_30,
    },
    categoriesTitle: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_16,
        paddingHorizontal: spacings.SCALE_20,
    },
    categoriesListWrapper: {
        paddingTop: spacings.SCALE_15,
        paddingBottom: spacings.SCALE_20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: spacings.SCALE_20,
        borderRadius: constants.BORDER_RADIUS.CATEGORY_ITEM,
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: constants.SHADOW_RADIUS.ITEM,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: spacings.SCALE_25,
        alignSelf: 'center',
        marginHorizontal: spacings.SCALE_20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: typography.FONT_MONTSERRAT_MEDIUM,
        fontSize: typography.FONT_SIZE_14,
        marginTop: spacings.SCALE_10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: spacings.SCALE_20,
        width: 26,
        height: 26,
        borderRadius: constants.BORDER_RADIUS.SELECT_ITEM,
        marginBottom: spacings.SCALE_20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
        fontSize: typography.FONT_SIZE_10
    },
})