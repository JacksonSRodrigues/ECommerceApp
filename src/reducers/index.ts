import { combineReducers } from 'redux'
import productReducer, { ProductState } from './products'
import productCarouselReducer, { ProductCarouselState } from './productCarousels'
import addressReducer, {AddressState} from './address'

export type AppState = {
    products: ProductState
    carousels: ProductCarouselState
    address: AddressState
}

const rootReducer = combineReducers({
    products: productReducer,
    carousels: productCarouselReducer,
    address: addressReducer
})

export default rootReducer