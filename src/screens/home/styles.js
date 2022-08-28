import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
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
        fontSize: 16, 
        lineHeight: 19,
        color: '#834D1E'
    },
    header__iconNotification: {
        marginTop: 5
    },
    header__icondrower: {
        marginTop: 14,
        marginLeft: 10,
        marginRight: 35

    },
    firstBoddy__image: {
        alignSelf: 'center',
        marginTop: 30
    },
    firstBoddy__more: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 157,
        marginLeft: 61
    },
    firstBoddy__more__text: {
        color: '#FCF2D9',
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Inter_400Regular'
    },
    firstBoddy__more__icon:{
        marginLeft: 12,
    },
    secondBoddy: {
        marginTop: 50
    },
    secondBoddy__title: {
        flexDirection: 'row',
        marginHorizontal: 35,
        justifyContent: 'space-between'
    },
    secondBoddy__title__1: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 18, 
        lineHeight: 21,
        color: '#834D1E'
    },
    secondBoddy__title__2: {
        fontFamily: "Inter_400Regular",
        fontSize: 12, 
        lineHeight: 15,
        color: '#834D1E'
    },
    secondBoddy__cards: {
        flexDirection: 'row',
        marginTop: 20
    },
    secondBoddy__cards__image1: {
        marginLeft: 35
    },
    secondBoddy__cards__image2: {
        marginLeft: 20,
    },
    secondBoddy__cards__title1 :{
        position: 'absolute',
        marginTop: 136,
        marginLeft: 45,
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#F8E3B6'
    },
    secondBoddy__cards__price1 :{
        position: 'absolute',
        marginTop: 170,
        marginLeft: 45,
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#F8E3B6'
    },
    secondBoddy__cards__title2 :{
        position: 'absolute',
        marginTop: 136,
        marginLeft: 35,
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#F8E3B6'
    },
    secondBoddy__cards__price2 :{
        position: 'absolute',
        marginTop: 170,
        marginLeft: 35,
        fontFamily: "Inter_600SemiBold",
        fontSize: 16, 
        lineHeight: 19,
        color: '#F8E3B6'
    },
    thirdBody__title: {
        marginTop: 32,
        marginLeft: 35,
        fontFamily: "Inter_600SemiBold",
        fontSize: 18, 
        lineHeight: 22,
        color: '#834D1E'
    },
    thirdBody__image: {
        alignSelf: 'center',
        width: windowWidth - 70,
        marginTop: 21
    },
    menuDrawer: {
        position: 'absolute',
        height: 180,
        width: 180,
        backgroundColor: '#F8E3B6',
        marginTop: 80,
        alignItems: 'flex-end',
        marginLeft: windowWidth - (windowWidth/2),
        borderRadius: 5
        

    }

})