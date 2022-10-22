import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

export default StyleSheet.create({
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.MAIN_COLORS.TEXT_DARK,
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.MAIN_COLORS.TEXT_DARK,
        marginTop: 5,
    },
})