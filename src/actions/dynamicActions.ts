import { Action, DynamicAction } from './index.types'
import { getProducts } from '../api/dynamicProducts'

export const LOADING_DYNAMIC_PRODUCTS = 'LOADING_DYNAMIC_PRODUCTS'
export const UPDATE_DYNAMIC_PRODUCTS = 'UPDATE_DYNAMIC_PRODUCTS'
export const ERROR_DYNAMIC_PRODUCTS = 'ERROR_DYNAMIC_PRODUCTS'



export const loadingDynamicProducts = (identifier: string): DynamicAction => ({
    type: LOADING_DYNAMIC_PRODUCTS,
    identifier: identifier
})

export const updateDynamicProducts = (identifier: string, products: any[]) => ({
    type: UPDATE_DYNAMIC_PRODUCTS,
    identifier: identifier,
    payload: products
})

export const errorOnUpdateDynamicProducts = (identifier: string, error: Error) => ({
    type: ERROR_DYNAMIC_PRODUCTS,
    identifier: identifier,
    payload: error
})

export const getDynamicProducts = (identifier: string, query: any) => async (dispatch: any) => {
    dispatch(loadingDynamicProducts(identifier))
    try {
        const products = await getProducts(query)
        dispatch(updateDynamicProducts(identifier, products))
    } catch (error) {
        dispatch(errorOnUpdateDynamicProducts(identifier, error))
    }
}