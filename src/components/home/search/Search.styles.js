import { StyleSheet } from "react-native";
import { colors, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacings.SCALE_20,
        marginTop: spacings.SCALE_30,
    },
    search: {
        flex: 1,
        marginLeft: spacings.SCALE_10,
        borderBottomColor: colors.MAIN_COLORS.TEXT_LIGHT,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_14,
        marginBottom: spacings.SCALE_5,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
    },
})