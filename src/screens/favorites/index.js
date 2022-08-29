import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, RefreshControl } from "react-native";
import styles from "./styles";

import notification from '../../../assets/images/notification.png';
import favtrue from '../../../assets/images/favtrue.png';
import drawer from '../../../assets/images/drawer.png';
import { GlobalContext } from "../../context/GlobalContext";


export default function Favorites(){
    const {favorito} = useContext(GlobalContext);
    useEffect(() => {
        favorito
    }, [])
    return(
        <View style={styles.container} >
              <View style={styles.header}>
                <Text style={styles.header__text}>Your favorite drinks to{'\n'}lighten up your day</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={notification} style={styles.header__iconNotification}/>
                    <TouchableOpacity>
                    <Image source={drawer} style={styles.header__icondrower}/>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.boddy}>
                <FlatList 
                data={favorito}
                numColumns={'2'}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Image style={styles.image} source={item.image}/>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.card__row}>
                            <Text style={styles.card__row__text}>$ {item.price}</Text>
                            <Image style={styles.card__row__icon} source={favtrue} />
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <View style={{marginBottom: 150}}></View>
                }
                />
            </View>
        </View>
    )
}