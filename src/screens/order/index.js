import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import styles from "./styles";

import notification from '../../../assets/images/notification.png';
import drawer from '../../../assets/images/drawer.png';
import { GlobalContext } from "../../context/GlobalContext";


export default function Favorites(){
    const [recently , setRecently] = useState(true);
    const [past, setPast] = useState(false);
    const {carrinho, total, limparCarrinho} = useContext(GlobalContext);

    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth() + 1; 

    return(
        <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.header__text}>Your orders</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={notification} style={styles.header__iconNotification}/>
                    <TouchableOpacity>
                    <Image source={drawer} style={styles.header__icondrower}/>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.headNavigation}>
                <TouchableOpacity style={recently == true? styles.headNavigation__active : styles.headNavigation__inactive}
                onPress={() => {{setRecently(true)} {setPast(false)}}}
                >
                    <Text style={recently === true? styles.headNavigation__text__active : styles.headNavigation__text__inactive}> Recently</Text>
                </TouchableOpacity>
                <TouchableOpacity style={past === false ? styles.headNavigation__inactive : styles.headNavigation__active}
                onPress={() => {{setRecently(false)} {setPast(true)}}}
                >
                    <Text style={past === false ? styles.headNavigation__text__inactive : styles.headNavigation__text__active}>Past Orders</Text>
                </TouchableOpacity>

            </View>
            <View>
            <FlatList
            data={recently === true ? carrinho : null}
            key={({id}, index) => id}
            renderItem={({item}) => (
                <View style={styles.boddy__card}>
               
                    <View style={styles.boddy__card__row}>
                        <Image style={styles.boddy__card__image} source={item.image}/>
                        <View style={styles.boddy__card__texts}>
                            <Text style={styles.boddy__card__name}>{item.quantidade}x {item.name}</Text>
                            <Text style={styles.boddy__card__details}>Details</Text>
                        </View>
                    </View>
                    <Text style={styles.boddy__card__date}>{today}/{currentMonth < 10 ? '0' : null}{currentMonth}</Text>
                </View>
              
            )}
            
            />
            </View>

            {total > 0 ?
             <View style={styles.details}>
             <View style={styles.details__division}></View>
            <View style={styles.details__row}>
                 <Text style={styles.details__row1}>Subtotal</Text>
                 <Text style={styles.details__row1}>$ {total}</Text>
            </View>
            <View style={styles.details__row}>
                 <Text style={styles.details__row2}>Delivery</Text>
                 <Text style={styles.details__row2}> 1.99</Text>
            </View>
            <View style={styles.details__row}>
                 <Text style={styles.details__row3}>TOTAL</Text>
                 <Text style={styles.details__row3}>$ {total + 1.99}</Text>
            </View>
             <TouchableOpacity style={styles.details__bottom} onPress={() => {{Alert.alert('Purchase completed, now just wait')}{limparCarrinho()}} }>
                 <Text style={styles.details__bottom__text} >Finish</Text>
            </TouchableOpacity>
         </View>    
    :
    null    
    }
        </View>
    )
}