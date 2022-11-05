import { StyleSheet } from "react-native";
import { colors, constants, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    ingredientsWrapper: {
        marginTop: spacings.SCALE_40,
    },
    ingredientsTitle: {
        paddingHorizontal: spacings.SCALE_20,
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_16,
        color: colors.MAIN_COLORS.TEXT_DARK,
    },
    ingredientsListWrapper: {
        paddingVertical: spacings.SCALE_20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacings.SCALE_10,
        marginVertical: spacings.SCALE_10,
        marginRight: spacings.SCALE_15,
        borderRadius: constants.BORDER_RADIUS.INGREDIENTS,
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: constants.SHADOW_RADIUS.ITEM,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain',
    },
})