import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

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
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.MAIN_COLORS.textLight,
    },
    infoItemText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: colors.MAIN_COLORS.textDark,
        marginTop: 5,
    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
})