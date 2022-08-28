import oth1 from '../../assets/images/produtos/others1.png'
import oth2 from '../../assets/images/produtos/others2.png'
import oth3 from '../../assets/images/produtos/others3.png'

const others = [
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Iced Lemonade',
        price: '3.50',
        description: 'Fresh lemon juice and soda water, served cold',
        image: oth1
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Iced Strawberry Lemonade',
        price: '3.80',
        description: 'Iced lemonade with fresh strawberry juice, served cold',
        image: oth2
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Iced Orange Lemonade',
        price: '3.80',
        description: 'Iced lemonade with fresh orange juice, served cold',
        image: oth3
    },
]

export default others;