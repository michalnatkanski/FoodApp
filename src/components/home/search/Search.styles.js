import { StyleSheet } from "react-native";
import { colors, typography } from "../../../assets/styles";

export default StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.MAIN_COLORS.TEXT_LIGHT,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_14,
        marginBottom: 5,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
    },
})