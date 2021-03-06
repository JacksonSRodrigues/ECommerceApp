import _ from 'lodash'
import { Action } from '../actions/index.types'
import {
    LOADING_PRODUCT_CAROUSEL,
    UPDATE_CAROUSEL_PRODUCTS,
    ERROR_UPDATING_CAROUSEL_PRODUCTS,
} from '../actions/productCarousels'
import ProductCarousel from '../components/Carousel/Carousel'

export type ProductCarouselState = {
    isLoading: Boolean
    products: any[]
}

const initialState: ProductCarouselState = {
    isLoading: false,
    products: []
}

const productCarouselReducer = (state: ProductCarouselState = initialState, action: Action) => {
    switch (action.type) {
        case LOADING_PRODUCT_CAROUSEL: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UPDATE_CAROUSEL_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        }

        case ERROR_UPDATING_CAROUSEL_PRODUCTS: {
            return {
                ...state,
                isLoading: false
            }
        }

        default:
            return state
    }
}

export default productCarouselReducer