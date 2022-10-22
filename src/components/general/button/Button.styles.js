import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";

export default StyleSheet.create({
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
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