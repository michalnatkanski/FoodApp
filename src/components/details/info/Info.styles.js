import { StyleSheet } from "react-native";
import { colors, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    infoWrapper: {
        marginTop: spacings.SCALE_30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: spacings.SCALE_20,
    },
    infoItemWrapper: {
        marginBottom: spacings.SCALE_20,
    },
    infoItemTitle: {
        fontFamily: typography.FONT_MONTSERRAT_MEDIUM,
        fontSize: typography.FONT_SIZE_14,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
    },
    infoItemText: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_18,
        color: colors.MAIN_COLORS.TEXT_DARK,
        marginTop: spacings.SCALE_5,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: spacings.SCALE_50,
    },
})