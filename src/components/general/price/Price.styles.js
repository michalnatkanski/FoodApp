import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles";

export default StyleSheet.create({
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.MAIN_COLORS.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
})