import { StyleSheet } from "react-native";
import { colors, constants, typography } from "../../../assets/styles";

export default StyleSheet.create({
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    orderText: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_14,
        marginRight: 10,
    },
})