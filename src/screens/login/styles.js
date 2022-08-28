import { StyleSheet } from "react-native";




export default StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    welcome: {
        height: '100%',
        width: '100%'
    },
    imageBackground: {
        height: '100%'
    },
    login:{
        borderWidth: 1,
        height: 481,
        marginHorizontal: 35,
        marginTop: 161,
        borderRadius: 30,
        backgroundColor: "#fcf2d9",
        borderColor: "#834d1e"
    },
    login__headBar: {
        marginHorizontal: 25,
        marginTop: 26,
        borderWidth: 1,
        height: 36,
        borderRadius: 15,
        borderColor: '#834D1E',
        flexDirection: 'row'
    },
    login__headBarInactive: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        lineHeight: 15,
    },
    login__headBarActive: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#834D1E',
        borderRadius: 12,
        borderColor: '#834D1E'
    },
    login__headBar__textActive: {
        color: '#FCF2D9',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        lineHeight: 15
    },
    login__headBar__textInactive: {
        color: '#834d1e',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
        lineHeight: 15
    },
    input__email: {
        marginTop: 56,
        borderBottomWidth: 1,
        marginHorizontal: 25,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Inter_400Regular'
    },
    input__password: {
        marginTop: 24,
        borderBottomWidth: 1,
        marginHorizontal: 25,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Inter_400Regular'
    },
    forgot: {
        textAlign: 'right',
        marginRight: 25,
        marginTop: 9
    },
    buttom: {
        height: 41,
        backgroundColor: '#834D1E',
        marginHorizontal: 25,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 39
    },
    buttom__text: {
        fontFamily: 'Inter_600SemiBold',
        color: '#FCF2D9',
        fontSize: 15,
        lineHeight: 18
    }
})