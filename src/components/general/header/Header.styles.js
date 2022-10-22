import { StyleSheet } from "react-native";
import { constants, spacings } from '../../../assets/styles';

export default StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: spacings.SCALE_20,
        paddingTop: spacings.SCALE_20,
        alignItems: 'center'

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: constants.BORDER_RADIUS.PROFILE_IMAGE,
    },
})