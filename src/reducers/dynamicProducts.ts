import _ from 'lodash'
import { Action, DynamicAction } from '../actions/index.types'
import {
    LOADING_DYNAMIC_PRODUCTS,
    UPDATE_DYNAMIC_PRODUCTS,
    ERROR_DYNAMIC_PRODUCTS
} from '../actions/dynamicActions'

export type ProductState = {
    isLoading: Boolean
    products: any[]
    error?: Error
}

const initialState = {
    isLoading: false,
    products: [],
    error: undefined
}

const productReducer = (state: ProductState = initialState, action: DynamicAction) => {
    switch (action.type) {
        case LOADING_DYNAMIC_PRODUCTS: {
            const { identifier } = action
            return {
                ...state,
                [identifier]: {
                    ..._.get(state, identifier),
                    isLoading: true
                }
            }
        }

        case UPDATE_DYNAMIC_PRODUCTS: {
            const { identifier, payload } = action
            return {
                ...state,
                [identifier]: {
                    ..._.get(state, identifier),
                    isLoading: false,
                    products: payload
                }

            }
        }

        case ERROR_DYNAMIC_PRODUCTS: {
            const { identifier, payload } = action
            return {
                ...state,
                [identifier]: {
                    ..._.get(state, identifier),
                    isLoading: false,
                    error: payload
                }
            }
        }

        default:
            return state
    }
}

export default productReducer