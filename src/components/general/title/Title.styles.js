import { StyleSheet } from "react-native";
import { colors, typography } from "../../../assets/styles";

export default StyleSheet.create({
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: typography.FONT_MONTSERRAT_REGULAR,
        fontSize: typography.FONT_SIZE_16,
        color: colors.MAIN_COLORS.TEXT_DARK,
    },
    titlesTitle: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_32,
        color: colors.MAIN_COLORS.TEXT_DARK,
        marginTop: 5,
    },
})