import { StyleSheet } from "react-native";
import { colors, typography } from "../../../assets/styles";

export default StyleSheet.create({
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.MAIN_COLORS.PRICE,
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_32,
    },
})