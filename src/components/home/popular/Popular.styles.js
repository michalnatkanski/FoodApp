import { StyleSheet } from "react-native";
import { typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    popularWrapper: {
        paddingHorizontal: spacings.SCALE_20,
        paddingBottom: 50,
    },
    popularTitle: {
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        fontSize: typography.FONT_SIZE_16,
    },
    noItems: {
        fontSize: typography.FONT_SIZE_18,
        fontFamily: typography.FONT_MONTSERRAT_BOLD,
        marginTop: spacings.SCALE_30,
        textAlign: 'center'
    }
})