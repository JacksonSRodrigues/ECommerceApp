import { combineReducers } from 'redux'
import productReducer from './products'
import productCarouselReducer from './productCarousels'

const rootReducer = combineReducers({
    products: productReducer,
    carousels: productCarouselReducer
})

export default rootReducer