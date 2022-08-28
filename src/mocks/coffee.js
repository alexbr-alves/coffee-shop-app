import cof1 from '../../assets/images/produtos/coffee1.png'
import cof2 from '../../assets/images/produtos/coffee2.png'
import cof3 from '../../assets/images/produtos/coffee3.png'
import cof4 from '../../assets/images/produtos/coffee4.png'


 const coffee= [
        {
            id: `${Math.floor(Date.now() * Math.random()).toString(36)}`,
            name: 'Iced Anericano',
            price: '4.20',
            description: 'Double espresso and water, served cold',
            image: cof1
        },
        {
            id: `${Math.floor(Date.now() * Math.random()).toString(36)}`,
            name: 'Iced Coffee Sweet Heaven',
            price: '4.80',
            description: 'Double espresso with condensed milk, served cold',
            image: cof2
        },
        {
            id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
            name: 'Hot Cappucino',
            price: '4.90',
            description: 'Double espresso and fresh milk, served hot',
            image: cof3
        },
        {
            id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
            name: 'Iced Cappucino',
            price: '5.20',
            description: 'Double espresso and fresh milk, served cold',
            image: cof4
        },
]
    
export default coffee;
