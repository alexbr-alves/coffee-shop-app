import  React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { GlobalContext } from '../context/GlobalContext';


import Home from '../screens/home';
import Menu from '../screens/menu';
import Order from '../screens/order';
import Favorites from '../screens/favorites';

import tabHome from '../../assets/images/tabHome.png';
import tabHome2 from '../../assets/images/tabHome2.png';

import tabCoffee from '../../assets/images/tabCoffee.png';
import tabCoffee2 from '../../assets/images/tabCoffee2.png';

import tabOrder from '../../assets/images/tabOrder.png';
import tabOrder2 from '../../assets/images/tabOrder2.png';

import tabFavorite from '../../assets/images/tabFavorite.png';
import tabFavorite2 from '../../assets/images/tabFavorite2.png';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const {carrinho} = useContext(GlobalContext)
  let countOrders = carrinho.length
  return (


      <Tab.Navigator  screenOptions={({route, focused}) => ({
        tabBarStyle: {
            backgroundColor: '#834D1E',
            height: Platform.OS === 'ios'? 100 : 87,
            paddingTop: Platform.OS === 'ios'? 5 : null,
           
        },
        headerShown: false,
      })}
        
      >
        
        <Tab.Screen name="Home" component={Home} options={{
             tabBarIconStyle: {marginTop: 5},
            title: '', tabBarIcon: ({focused}) => (
               <View style={styles.icons}>
                 <Image style={styles.icons__image} source={focused? tabHome2 : tabHome}/> 
                 <Text style={styles.icons__text}>Home</Text>
               </View>
              ) }} />

        <Tab.Screen name="Menu" component={Menu} options={{
            title: ' ', tabBarIcon: ({focused}) => (
             <View style={styles.icons}>
                 <Image style={styles.icons__image} source={focused? tabCoffee2 : tabCoffee}/> 
                 <Text style={styles.icons__text}> Drink Menu</Text>
             </View>
            ) }} />

        <Tab.Screen  name="Order" component={Order} options={{
            tabBarBadge: countOrders > 0? countOrders : null 
            ,tabBarIconStyle: {marginTop: 5},
           title: '', tabBarIcon: ({focused}) => (
            <View style={styles.icons}>
            <Image style={styles.icons__image} source={focused? tabOrder2 : tabOrder}/> 
            <Text style={styles.icons__text}> Your Order</Text>
            </View>
          )  }} />
        
        <Tab.Screen  name="favorites" component={Favorites} options={{
           title: '', tabBarIcon: ({focused}) => (
            <View style={styles.icons}>
                <Image style={styles.icons__image} source={focused? tabFavorite2 : tabFavorite}/> 
                <Text style={styles.icons__text}>Favorites</Text>
            </View >
          ) }} />
        </Tab.Navigator>
 
  );
}

const styles = StyleSheet.create({
    icons: {
        alignItems: 'center',
        
    },
    icons__image: {
        
    },
    icons__text: {
        fontSize: 10,
        lineHeight: 12,
        color: '#FCF2D9',
        fontFamily: 'Inter_500Medium',
    }
})