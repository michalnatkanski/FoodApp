import { StyleSheet } from "react-native";
import { colors, constants } from "../../../assets/styles";

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
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    },
})