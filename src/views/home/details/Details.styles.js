import { StyleSheet } from "react-native";
import { colors, constants } from "../../../assets/styles";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.MAIN_COLORS.TEXT_LIGHT,
        borderWidth: 2,
        padding: 12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
    },
    headerRight: {
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        padding: 12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
        borderColor: colors.MAIN_COLORS.PRIMARY,
        borderWidth: 2,
    },
})