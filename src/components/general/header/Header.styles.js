import { StyleSheet } from "react-native";
import { constants, spacings, colors } from '../../../assets/styles';

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
    headerLeft: {
        borderColor: colors.MAIN_COLORS.TEXT_LIGHT,
        borderWidth: 2,
        padding: spacings.SCALE_12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
    },
    headerRight: {
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        padding: spacings.SCALE_12,
        borderRadius: constants.BORDER_RADIUS.HEADER_ICON,
        borderColor: colors.MAIN_COLORS.PRIMARY,
        borderWidth: 2,
    },
})