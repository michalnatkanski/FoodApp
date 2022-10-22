import popularData from "../assets/data/popularData";
import categoriesData from "../assets/data/categoriesData";

const dataReducer = (item => item.id && item.image && item.title && item.deliveryTime && item.type && item.price && item.rating)
    
const getItems = (data, filter) => data.filter(item => filter(item));

const filteredItems = getItems(popularData, dataReducer);

const searchResult = (items, searchValue) => {
    if (searchValue === '') {
        return null
    } else {
        return items.filter(item => {
            return (
                item.title.toUpperCase().includes(searchValue.toUpperCase())
            )
        })
    }
};

export { filteredItems, categoriesData, searchResult }