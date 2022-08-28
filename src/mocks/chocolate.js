import choco1 from '../../assets/images/produtos/choco1.png'
import choco2 from '../../assets/images/produtos/choco2.png'
import choco3 from '../../assets/images/produtos/choco3.png'

const chocolate = [
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Hot Chocolate',
        price: '5.00',
        description: 'Sweetened dark chocolate, served hot',
        image: choco1
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Iced Chocolate',
        price: '5.30',
        description: 'Sweetened dark chocolate, served cold with whipped cream and stick wafer',
        image: choco2
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Iced Yin & Yang',
        price: '5.50',
        description: 'Dark chocolate and evaporated milk, served cold',
        image: choco3
    },
]

export default chocolate;