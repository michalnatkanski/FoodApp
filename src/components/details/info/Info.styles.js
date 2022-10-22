import { StyleSheet } from "react-native";
import { colors, typography } from "../../../assets/styles";

export default StyleSheet.create({
    infoWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
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
        marginTop: 5,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
})