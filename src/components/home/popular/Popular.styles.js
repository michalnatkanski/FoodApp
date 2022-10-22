import { StyleSheet } from "react-native";
import { typography } from "../../../assets/styles";

export default StyleSheet.create({
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_16,
    },
    noItems: {
        fontSize: typography.FONT_SIZE_18,
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        marginTop: 30,
        textAlign: 'center'
    }
})