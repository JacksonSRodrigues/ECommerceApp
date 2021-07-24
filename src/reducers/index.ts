import { combineReducers } from 'redux'
import productReducer, { ProductState } from './products'
import productCarouselReducer, { ProductCarouselState } from './productCarousels'

export type AppState = {
    products: ProductState
    carousels: ProductCarouselState
}

const rootReducer = combineReducers({
    products: productReducer,
    carousels: productCarouselReducer
})

export default rootReducer