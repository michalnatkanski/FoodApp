import { StyleSheet } from "react-native";
import { colors, constants, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    orderWrapper: {
        marginVertical: spacings.SCALE_60,
        marginHorizontal: spacings.SCALE_20,
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        paddingVertical: spacings.SCALE_25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    orderText: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_14,
        marginRight: spacings.SCALE_10,
    },
})