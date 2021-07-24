import * as ProductsAPI from '../api/products'
import { Action } from './index.types'
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS'
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
export const ERROR_UPDATING_PRODUCTS = 'ERROR_UPDATING_PRODUCTS'
export const UPDATE_DISCOUNTED_PRODUCTS = 'UPDATE_DISCOUNTED_PRODUCTS'


export const loadingProducts = (): Action => ({
    type: LOADING_PRODUCTS
})

export const updateProducts = (products: any[]): Action => ({
    type: UPDATE_PRODUCTS,
    payload: products
})

export const errorOnUpdateProducts = (error: Error): Action => ({
    type: ERROR_UPDATING_PRODUCTS,
    payload: error
})

export const getProducts = () => async (dispatch: any) => {
    dispatch(loadingProducts())
    try {
        const products = await ProductsAPI.getProducts()
        console.log(`>> state update products: ${products.length}`)
        dispatch(updateProducts(products))
        dispatch(updateDiscountProducts())
    } catch (error) {
        dispatch(errorOnUpdateProducts(error))
    }

}

export const updateDiscountProducts = (): Action => ({
    type: UPDATE_DISCOUNTED_PRODUCTS
})

