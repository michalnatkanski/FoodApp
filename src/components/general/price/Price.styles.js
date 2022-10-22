import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";

export default StyleSheet.create({
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    priceText: {
        color: colors.price,
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
    },
})