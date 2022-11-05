import { StyleSheet } from "react-native";
import { colors, typography, spacings, constants } from "../../../assets/styles";

export default StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: spacings.SCALE_20,
        marginTop: spacings.SCALE_10,
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        paddingHorizontal: spacings.SCALE_10
    },
    search: {
        flex: 1,
        marginLeft: spacings.SCALE_10,
       
    },
    searchText: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_14,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
    },
})