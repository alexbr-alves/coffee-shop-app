import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

import notification from '../../../assets/images/notification.png';
import drawer from '../../../assets/images/drawer.png';


export default function Favorites(){
    return(
        <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.header__text}>What would you {'\n'}like to drink today?</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={notification} style={styles.header__iconNotification}/>
                    <TouchableOpacity>
                    <Image source={drawer} style={styles.header__icondrower}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}