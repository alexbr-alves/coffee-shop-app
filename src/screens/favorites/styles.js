import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
        backgroundColor: '#F8E3B6',
        flex: 1,
        height: '100%'
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
    boddy:  {
        marginTop: 30,
       alignItems: 'center',    
    },
    image: {
        width: 155,
        height: 221
    },
    name: {
        position: 'absolute',
        marginTop: 130,
        marginLeft: 15,
        fontFamily: "Inter_600SemiBold",
        fontSize: 18, 
        lineHeight: 21,
        color: '#FCF2D9'
    },
    card__row: {
        position: 'absolute',
        marginTop: 176,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card__row__text: {
        fontFamily: "Inter_600SemiBold",
        fontSize: 18, 
        lineHeight: 21,
        color: '#FCF2D9'
    },
    card__row__icon: {
        marginLeft: 35
    }
})