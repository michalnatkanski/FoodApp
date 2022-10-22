import { StyleSheet } from "react-native";
import { constants } from '../../../assets/styles';

export default StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: constants.BORDER_RADIUS.PROFILE_IMAGE,
    },
})