import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({children}){
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    const [favorito, setFavorito] = useState([]);
   
    

    function addOrders(name, price, descriptions, image, quantidade, id){
        setTotal(total + (price * quantidade))
        carrinho.unshift({name, price, descriptions, image, quantidade, id})
    }
    
    function limparCarrinho(){
        setTotal(0)
        setCarrinho([])
    }



    async function addFavoritos(name, price, image){
        favorito.unshift({name, price, image})
        return  favorito
    }

    

    return(
        <GlobalContext.Provider value={{
            addOrders, carrinho, total, limparCarrinho,
             favorito, addFavoritos,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}