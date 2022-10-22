import { StyleSheet } from "react-native";
import { colors, constants } from "../../../assets/styles";

export default StyleSheet.create({
    popularCardWrapper: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: constants.BORDER_RADIUS.PROFILE_IMAGE,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-Semibold',
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        color: colors.MAIN_COLORS.TEXT_DARK
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.MAIN_COLORS.TEXT_LIGHT,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 12,
        color: colors.MAIN_COLORS.BLACK,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
        flex: 1,
        alignItems: 'flex-end'
    },
    popularCardImage: {
        width: 200,
        height: 125,
        resizeMode: 'contain',
    },
})