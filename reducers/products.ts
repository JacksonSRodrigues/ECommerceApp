import _ from 'lodash'
import { Action } from '../actions/index.types'
import {
    LOADING_PRODUCTS,
    UPDATE_PRODUCTS,
    ERROR_UPDATING_PRODUCTS,
    UPDATE_DISCOUNTED_PRODUCTS
} from '../actions/products'

const initialState = {
    isLoading: false,
    allProducts: [],
    discountedProducts: []
}

const productReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case LOADING_PRODUCTS: {
            return {
                ...state,
                isLoading: true
            }
        }

        case UPDATE_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                allProducts: action.payload
            }
        }

        case ERROR_UPDATING_PRODUCTS: {
            return {
                ...state,
                isLoading: false
            }
        }

        case UPDATE_DISCOUNTED_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                discountedProducts: action.payload
            }
        }

        default:
            return state
    }
}

export default productReducer