import { StyleSheet } from "react-native";
import { colors, constants } from "../../../assets/styles";

export default StyleSheet.create({
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.MAIN_COLORS.TEXT_DARK,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: constants.BORDER_RADIUS.INGREDIENTS,
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    ingredientImage: {
        resizeMode: 'contain',
    },
})