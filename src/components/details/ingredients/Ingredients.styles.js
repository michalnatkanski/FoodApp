import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";

export default StyleSheet.create({
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
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