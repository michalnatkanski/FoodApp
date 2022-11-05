import { StyleSheet } from "react-native";
import { colors, constants, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MAIN_COLORS.BACKGROUND,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacings.SCALE_20,
        paddingTop: spacings.SCALE_20,
    },
    headerLeft: {
        borderColor: colors.MAIN_COLORS.TEXT_LIGHT,
        borderWidth: 2,
        padding: spacings.SCALE_12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
    },
    headerRight: {
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        padding: spacings.SCALE_12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
        borderColor: colors.MAIN_COLORS.PRIMARY,
        borderWidth: 2,
    },
})