import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({children}){
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);
    

    function addOrders(name, price, descriptions, image, quantidade, id){
        setTotal(total + (price * quantidade))
        carrinho.unshift({name, price, descriptions, image, quantidade, id})
    }
    
    function limparCarrinho(){
        setTotal(0)
        setCarrinho([])
    }


    return(
        <GlobalContext.Provider value={{
            addOrders, carrinho, total, limparCarrinho
        }}>
            {children}
        </GlobalContext.Provider>
    )
}