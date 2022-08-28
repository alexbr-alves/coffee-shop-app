import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        backgroundColor: '#F8E3B6',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 44
    },
    header__text: {
        marginTop: 9,
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
    input__search: {
        height: 36,
        borderWidth: 1,
        marginHorizontal: 35,
        borderRadius: 15,
        borderColor: '#834D1E',
        marginTop: 30,
        backgroundColor: '#FCF2D9',
        paddingLeft: 15
    },
    headNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginTop: 30,
        height: 32,
        backgroundColor: '#FCF2D9',
        borderWidth: 1,
        borderColor: '#834D1E',
        borderRadius: 9,
    },
    headNavigation__inactive: {
        alignItems: 'center',
        width: (windowWidth - 70) /3,
        justifyContent: 'center',
    },
    headNavigation__Active: {
        backgroundColor: '#834D1E',
        alignItems: 'center',
        width: (windowWidth - 70) /3,
        justifyContent: 'center',
        borderRadius: 5
    },
    headNavigation__text__active: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 15, 
        lineHeight: 20,
        color: '#FCF2D9'
    },
    headNavigation__text__inactive: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 15, 
        lineHeight: 20,
        color: '#834D1E'
    },
    boddy: {
        marginTop: 20,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:'#FCF2D9',
        height: 870,
        borderColor: '#834D1E'
    },
    boddy__card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 25
    },
    boddy__card__row: {
        flexDirection: 'row',
    },
    boddy__card__texts: {
        marginLeft: 9,
        width: 170,
        justifyContent: 'space-between',
        height: 110,
    },
    boddy__card__name: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#834D1E'
    },
    boddy__card__description: {
        fontFamily :'Inter_400Regular',
        fontSize: 12,
        lineHeight: 14,
        color: '#834D1E'
    },
    boddy__card__price: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#834D1E'
    },
    boddy__card__buttom: {
        justifyContent: 'center'
    },
    modal: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 150,
        flex: 1
    },
    modal__topo: {
        marginTop: 170,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    modal__topo__buttons: {
        height: 40,
        width: 40
    },
    modal__name: {
        position: 'absolute',
        marginTop: 367 + 150,
        marginLeft: 40,
        fontFamily: "Inter_600SemiBold",
        fontSize: 24, 
        lineHeight: 29,
        color: '#834D1E'
    },
    modal__description: {
        position: 'absolute',
        marginTop: 408 + 150,
        marginLeft: 40,
        marginRight: 50,
        fontFamily: "Inter_400Regular",
        fontSize: 18, 
        lineHeight: 22,
        color: '#834D1E'
    },
    modal__price: {
        position: 'absolute',
        marginTop: 472 + 150,
        marginLeft: 40,
        fontFamily: "Inter_600SemiBold",
        fontSize: 24, 
        lineHeight: 29,
        color: '#834D1E'
    },
    quantidades: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginTop: 460,
        marginLeft: 40
    },
    modal__quantidadeNumber: {
        alignSelf: 'flex-end',
        fontFamily: "Inter_400Regular",
        fontSize: 18, 
        lineHeight: 21,
        color: '#834D1E'
    },
    modal__buy: {
        backgroundColor: '#834D1E',
        height: 30,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 7,
        marginRight: 40
    },
    modal__buy__text: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 12, 
        lineHeight: 15,
        color: '#FCF2D9'
    }
})