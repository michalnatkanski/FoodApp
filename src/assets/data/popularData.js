const popularData = [
    {
        id: '1',
        image: require('../images/pizza1.png'),
        title: 'Primavera Pizza',
        weight: '540 gr',
        rating: '5.0',
        price: '3.99',
        sizeName: 'Medium',
        sizeNumber: '14',
        crust: 'Thin Crust',
        deliveryTime: '30',
        type: 'Pizza',
        ingredients: [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png'),
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png'),
            }
        ]
    },
    {
        id: '2',
        image: require('../images/pizza2.png'),
        title: 'Vegetarian Pizza',
        weight: '440 gr',
        rating: '4.0',
        price: '5.99',
        sizeName: 'Small',
        sizeNumber: '10',
        crust: 'Thick Crust',
        deliveryTime: '40',
        type: 'Pizza',
        ingredients: [
            {
                id: '1',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
            {
                id: '2',
                name: 'garlic',
                image: require('../images/garlic.png'),
            }
        ]
    },
    {
        id: '3',
        image: require('../images/pizza3.png'),
        title: 'Pepperoni Pizza',
        weight: '700 gr',
        rating: '5.0',
        price: '9.99',
        sizeName: 'Large',
        sizeNumber: '18',
        crust: 'Thin Crust',
        deliveryTime: '20',
        type: 'Pizza',
        ingredients: [
            {
                id: '1',
                name: 'tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '2',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
        ]
    },
    {
        id: '4',
        image: require('../images/sushi.png'),
        title: 'Sushi',
        weight: '400 gr',
        rating: '5.0',
        price: '7.99',
        sizeName: 'Medium',
        deliveryTime: '40',
        type: 'Seafood',
    },
    {
        id: '5',
        image: require('../images/fruit-juice.png'),
        title: 'Fruit Juice',
        weight: '400 ml',
        rating: '5.0',
        price: '7.99',
        sizeName: 'Medium',
        deliveryTime: '40',
        type: 'Soft Drinks',
    },
    {
        id: '6',
        image: require('../images/burger-chicken.png'),
        title: 'Chicken Burger',
        weight: '400 gr',
        rating: '5.0',
        price: '7.99',
        sizeName: 'Medium',
        deliveryTime: '40',
        type: 'Burgers',
        ingredients: [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png'),
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
        ]
    },
    {
        id: '7',
        image: require('../images/chesseburger.png'),
        title: 'Double Chesseburger',
        weight: '500 gr',
        rating: '5.0',
        price: '7.99',
        sizeName: 'Medium',
        deliveryTime: '40',
        type: 'Burgers',
        ingredients: [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png'),
            },
            {
                id: '2',
                name: 'tomato',
                image: require('../images/tomato.png'),
            },
            {
                id: '3',
                name: 'cheese',
                image: require('../images/cheese.png'),
            },
        ]
    },
];

export default popularData;