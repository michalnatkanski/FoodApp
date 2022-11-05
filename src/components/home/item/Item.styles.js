import { StyleSheet } from "react-native";
import { colors, constants, typography, spacings } from "../../../assets/styles";

export default StyleSheet.create({
    itemWrapper: {
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 6,
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: constants.BORDER_RADIUS.PROFILE_IMAGE,
    },
    popularCardWrapper: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: constants.BORDER_RADIUS.PROFILE_IMAGE,
        paddingTop: spacings.SCALE_20,
        paddingLeft: spacings.SCALE_20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: spacings.SCALE_10,
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
    },
    popularTitlesWrapper: {
        marginTop: spacings.SCALE_20,
    },
    popularTitlesTitle: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_14,
        color: colors.MAIN_COLORS.TEXT_DARK
    },
    popularTitlesWeight: {
        fontFamily: typography.FONT_MONTSERRAT_MEDIUM,
        fontSize: typography.FONT_SIZE_12,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
        marginTop: spacings.SCALE_5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacings.SCALE_10,
        marginLeft: -spacings.SCALE_20,
    },
    addPizzaButton: {
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        paddingHorizontal: spacings.SCALE_40,
        paddingVertical: spacings.SCALE_20,
        borderTopRightRadius: constants.BORDER_RADIUS.LIST_ITEM,
        borderBottomLeftRadius: constants.BORDER_RADIUS.LIST_ITEM,
        bottom: -2
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: spacings.SCALE_20,
    },
    rating: {
        fontFamily: typography.FONT_MONTSERRAT_SEMI_BOLD,
        fontSize: typography.FONT_SIZE_12,
        color: colors.MAIN_COLORS.BLACK,
        marginLeft: spacings.SCALE_5,
    },
    popularCardRight: {
        marginLeft: spacings.SCALE_50,
        flex: 1,
        alignItems: 'flex-start'
    },
    popularCardImage: {
        width: 200,
        height: 125,
        resizeMode: 'contain',
    },
})