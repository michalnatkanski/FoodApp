import { StyleSheet } from "react-native";
import { colors, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    titleWrapper: {
        marginTop: spacings.SCALE_30,
        paddingHorizontal: spacings.SCALE_20,
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
        marginTop: spacings.SCALE_5,
    },
})