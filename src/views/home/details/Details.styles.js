import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

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
        borderColor: colors.MAIN_COLORS.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colors.MAIN_COLORS.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.MAIN_COLORS.primary,
        borderWidth: 2,
    },
})