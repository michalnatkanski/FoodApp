import { StyleSheet } from "react-native";
import { colors, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    priceWrapper: {
        marginTop: spacings.SCALE_20,
        paddingHorizontal: spacings.SCALE_20,
    },
    priceText: {
        color: colors.MAIN_COLORS.PRICE,
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_32,
    },
})