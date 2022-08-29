import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        backgroundColor: '#F8E3B6',
        flex: 1
        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 44
    },
    header__text: {
        marginTop: 20,
        marginLeft: 35,
        fontFamily: "Inter_600SemiBold",
        fontSize: 18, 
        lineHeight: 21,
        color: '#834D1E'
    },
    header__iconNotification: {
        marginTop: 10
    },
    header__icondrower: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 35

    },
    headNavigation: {
        flexDirection: 'row',
        marginLeft: 35,
        marginTop: 16,
        height: 25,
        width: 160,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#FCF2D9',
        borderColor: '#834D1E',
        marginBottom: 25
    },
    headNavigation__active: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#834D1E',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '834D1E'
    },
    headNavigation__inactive: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headNavigation__text__active: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 11,
        lineHeight: 13,
        color: '#FCF2D9'
    },
    headNavigation__text__inactive: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 11,
        lineHeight: 13,
        color: '#834D1E'
    },



    boddy__card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       borderWidth: 1,
       height: 96,
       marginHorizontal: 35,
       backgroundColor: '#FCF2D9',
       marginTop: 15,
       borderRadius: 10,
       borderColor: '#834D1E'
    },
    boddy__card__row: {
        flexDirection: 'row',
    },
    boddy__card__texts: {
       justifyContent: 'space-between',
       marginVertical: 20,
       marginLeft: 15,
       width: 160
    },
    boddy__card__image: {
       height: 75,
       width: 50,
       marginTop: 10,
       marginLeft: 10
    },
    boddy__card__name: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 14, 
        lineHeight: 17,
        color: '#834D1E'
    },
    
    boddy__card__details: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 12, 
        lineHeight: 15,
        color: '#834D1E'
    },
    boddy__card__date: {
        marginTop: 12,
        marginRight: 25,
        fontFamily: "Inter_600SemiBold",
        fontSize: 12, 
        lineHeight: 15,
        color: '#834D1E'
    },
    details: {

    },
    details__division: {
        height: 20,
        backgroundColor: '#834D1E',
        marginTop: 20
    },
    details__row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 35,
        marginTop: 10,
        borderBottomWidth: 0.5
    },
    details__row1: {
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        lineHeight: 16,
        color: '#834D1E'
    },
    details__row2: {
        fontFamily: "Inter_400Regular",
        fontSize: 14,
        lineHeight: 16,
        color: '#834D1E'
    },
    details__row3: {
        fontFamily: "Inter_700Bold",
        fontSize: 15,
        lineHeight: 17,
        color: '#834D1E'
    },
    details__bottom: {
        marginHorizontal: 35,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#834D1E',
        height: 45,
        borderRadius: 5,
        marginBottom: 200
    },
    details__bottom__text: {
        fontFamily: "Inter_700Bold",
        fontSize: 15,
        lineHeight: 18,
        color: '#FCF2D9'
    }
})