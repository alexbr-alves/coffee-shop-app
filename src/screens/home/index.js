import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from "react-native";

import styles from './styles';

import notification from '../../../assets/images/notification.png';
import drawer from '../../../assets/images/drawer.png';
import bestSeller from '../../../assets/images/bestSeller.png';
import arrowRight from '../../../assets/images/arrow-right.png';
import reco1 from '../../../assets/images/reco1.png';
import reco2 from '../../../assets/images/reco2.png';
import promo from '../../../assets/images/promo.png';


export default function Home(){ 
    //const [menu, setMenu] = useState(false);


    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header__text}> Good day, Jimmy Page</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image source={notification} style={styles.header__iconNotification}/>
                    <TouchableOpacity >
                    <Image source={drawer} style={styles.header__icondrower}/>
                    </TouchableOpacity>
                </View>
            </View>
          
            <View style={styles.firstBoddy}>
                <Image source={bestSeller} style={styles.firstBoddy__image}/>
                <TouchableOpacity style={styles.firstBoddy__more}>
                    <Text style={styles.firstBoddy__more__text}> More info</Text>
                    <Image style={styles.firstBoddy__more__icon} source={arrowRight}/>
                </TouchableOpacity>
            </View>
            <View style={styles.secondBoddy} >
                <View style={styles.secondBoddy__title}>
                    <Text style={styles.secondBoddy__title__1}>This week's recommendations</Text>
                    <TouchableOpacity>
                        <Text style={styles.secondBoddy__title__2}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondBoddy__cards}>
                    <View>
                        <Image style={styles.secondBoddy__cards__image1} source={reco1}/>
                        <Text style={styles.secondBoddy__cards__title1}> Iced Americano</Text>
                        <Text style={styles.secondBoddy__cards__price1}>$ 4.2</Text>
                    </View>

                    <View>
                        <Image style={styles.secondBoddy__cards__image2} source={reco2}/>
                        <Text style={styles.secondBoddy__cards__title2}> Hot Cappucino</Text>
                        <Text style={styles.secondBoddy__cards__price2}>$ 4.9</Text>
                    </View>
                </View>
            </View>
            <View style={styles.thirdBody}>
                <Text style={styles.thirdBody__title}>What's in the shop?</Text>
                <Image style={styles.thirdBody__image}source={promo} />
            </View>
          
           
        </ScrollView>
    )
}

