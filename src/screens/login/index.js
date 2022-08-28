import React, {useState, useEffect, useContext} from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import {GlobalContext} from '../../context/GlobalContext'



import styles from './styles'
import loginScreen from '../../../assets/images/login.png'
import welcome from '../../../assets/images/welcome.png'
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation()
    const [tempo, setTempo] = useState(true);
    const [loginActive, setLoginActive] = useState(true);
    const [signUpActive, setSignUpActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setTempo(false)
        }, 3000);
      }, []);


    return(
        <View style={styles.container}>
{tempo? 
<Image style={styles.welcome} source={welcome}/>
:
            <ImageBackground style={styles.imageBackground} source={loginScreen} resizeMode='cover'>
                <View style={styles.login}>
                    <View style={styles.login__headBar}>
                        <TouchableOpacity style={loginActive? styles.login__headBarActive : styles.login__headBarInactive}
                        onPress={() => {{setLoginActive(true)} {setSignUpActive(false)}}}
                        >
                            <Text style={loginActive? styles.login__headBar__textActive : styles.login__headBar__textInactive}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={signUpActive? styles.login__headBarActive : styles.login__headBarInactive}
                         onPress={() => {{setLoginActive(false)} {setSignUpActive(true)}}}>
                            <Text style={signUpActive? styles.login__headBar__textActive : styles.login__headBar__textInactive}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                    {loginActive? 
                    <LoginSpace  />
                    :
                    <SignUpSpace/>
                    }

                </View>
               
            </ImageBackground>
}
        </View>

        
    )
}
function LoginSpace(){
    const navigation = useNavigation()
    return(
        <View>
            <TextInput
            style={styles.input__email}
            autoCapitalize="none"
            placeholderTextColor={'#57280A'}
            placeholder="Username or email"
            />

            <TextInput
            style={styles.input__password}
            autoCapitalize="none"
            placeholderTextColor={'#57280A'}
            placeholder="Password"
            />
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot password? </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate('TabRoutes')}}>
                    <Text style={styles.buttom__text}>Login</Text>
                </TouchableOpacity>
        </View>
    )
}

function SignUpSpace(){
    return(
        <View>
        <TextInput
        style={styles.input__email}
        autoCapitalize="none"
        placeholderTextColor={'#57280A'}
        placeholder="Email"
        />

        <TextInput
        style={styles.input__password}
        autoCapitalize="none"
        placeholderTextColor={'#57280A'}
        placeholder="Password"
        />

        <TextInput
        style={styles.input__password}
        autoCapitalize="none"
        placeholderTextColor={'#57280A'}
        placeholder="Confirm assword"
        />

        <TouchableOpacity style={styles.buttom}>
                <Text style={styles.buttom__text}>SIgn up</Text>
            </TouchableOpacity>
    </View>


    )
}