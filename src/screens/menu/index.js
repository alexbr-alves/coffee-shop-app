import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Modal } from "react-native";

import styles from './styles';
import {GlobalContext} from '../../context/GlobalContext.js'

import notification from '../../../assets/images/notification.png';
import drawer from '../../../assets/images/drawer.png';
import select from '../../../assets/images/select.png';
import fundoModal from '../../../assets/images/fundoModal.png';
import exit from '../../../assets/images/exit.png';
import menos from '../../../assets/images/menos.png';
import mais from '../../../assets/images/mais.png';
import Iconfav from 'react-native-vector-icons/AntDesign';





import coffee from '../../mocks/coffee';
import chocolate from '../../mocks/chocolate';
import others from '../../mocks/others';


export default function Menu(){
    const [coffeeScreen, setCoffeeScreen] = useState(true);
    const [chocolateScreen, setChocolateScreen] = useState(false);
    const [othersScreen, setOthersScreen] = useState(false);
    const [favorito, setFavorito] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [quantidade, setQuantidade] = useState(1);
    const [itemModal, setItemModal] = useState([]);
    

    const {addOrders} = useContext(GlobalContext);

   function alterScreens(){
    if(coffeeScreen === true){
        return coffee
    } else if(chocolateScreen === true){
        return chocolate
    }else if(othersScreen === true){
        return others
    }
   }

   
  function AddModal(name, price, description, image, id){
    itemModal.unshift({name, price, description, image, id})
  } 
  function FecharModal(){
    setModalVisivel(false)
    setItemModal([])
    setQuantidade(1)
  }
  if(quantidade < 1){
    setQuantidade(1)
  }
   

    return (
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
            <TextInput
            style={styles.input__search}
            autoCapitalize="none"
            placeholderTextColor={'#57280A'}
            placeholder="Search.."
            />
            <View style={styles.headNavigation}>
                <TouchableOpacity style={coffeeScreen? styles.headNavigation__Active: styles.headNavigation__inactive}
                onPress={() =>{{setCoffeeScreen(true)}{setChocolateScreen(false)}{setOthersScreen(false)}}}
                >
                    <Text style={coffeeScreen? styles.headNavigation__text__active : styles.headNavigation__text__inactive}>Coffee</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={chocolateScreen? styles.headNavigation__Active: styles.headNavigation__inactive}
                 onPress={() =>{{setCoffeeScreen(false)}{setChocolateScreen(true)}{setOthersScreen(false)}}}
                >
                    <Text style={chocolateScreen? styles.headNavigation__text__active : styles.headNavigation__text__inactive}>Chocolate</Text>
                </TouchableOpacity>

                <TouchableOpacity style={othersScreen? styles.headNavigation__Active: styles.headNavigation__inactive}
                 onPress={() =>{{setCoffeeScreen(false)}{setChocolateScreen(false)}{setOthersScreen(true)}}}
                >
                    <Text style={othersScreen? styles.headNavigation__text__active : styles.headNavigation__text__inactive}>Others</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boddy}>
            <FlatList
             data={alterScreens()}
             key={({id}, index) => id}
             renderItem={({item}) => (
               <View style={styles.boddy__card}>
               
                    <View style={styles.boddy__card__row}>
                        <Image source={item.image}/>
                        <View style={styles.boddy__card__texts}>
                            <Text style={styles.boddy__card__name}>{item.name}</Text>
                            <Text style={styles.boddy__card__description}>{item.description}</Text>
                            <Text style={styles.boddy__card__price}>$ {item.price}</Text>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.boddy__card__buttom} onPress={() => {{AddModal(item.name, item.price, item.description, item.image, item.id)}{setModalVisivel(true)}}}>
                        <Image source={select}/> 
                    </TouchableOpacity>
                   
                    
                </View>
                
             )}

            />
            </View>

            <Modal visible={modalVisivel} transparent={true} >
            <Image style={styles.modal} source={fundoModal} />

            <View style={styles.modal__topo}>
            <TouchableOpacity onPress={() => {FecharModal()}}>
                    <Image style={styles.modal__topo__buttons} source={exit}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {{setFavorito(!favorito)}}}>
                {favorito == false? 
                 <Iconfav name="hearto" size={40} color='#ffffff'/>
                 :
                 <Iconfav name="heart" size={40} color= 'red'/>
                }
               
            </TouchableOpacity>
           
           </View>

                <Text style={styles.modal__name}>{modalVisivel? itemModal[0].name : null}</Text>
                <Text style={styles.modal__description}>{modalVisivel? itemModal[0].description: null}</Text>
               
                <Text style={styles.modal__price}>$ {modalVisivel? (itemModal[0].price * quantidade).toFixed(2): null}</Text>
                 
                   <View style={styles.quantidades}>
                    <TouchableOpacity onPress={() => {setQuantidade(quantidade - 1)} }>
                        <Image  source={menos}/>
                        </TouchableOpacity>

                        <Text style={styles.modal__quantidadeNumber} >{quantidade}</Text>

                    <TouchableOpacity onPress={() => {setQuantidade(quantidade + 1)}}>
                    <Image  source={mais}/>
                    </TouchableOpacity>
                   </View>
                    <TouchableOpacity style={styles.modal__buy} onPress={() => {{addOrders(itemModal[0].name, itemModal[0].price, itemModal[0].description, itemModal[0].image, quantidade, itemModal[0].id )}{setModalVisivel(false)}}}>
                    <Text style={styles.modal__buy__text}>Buy now</Text>
                   </TouchableOpacity>
                </Modal>
        </View>
    )
}
