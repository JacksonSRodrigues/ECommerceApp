import { Action } from './index.types'
import * as CarouselProductsAPI from '../api/carouselProducts'
export const LOADING_PRODUCT_CAROUSEL = 'LOADING_CAROUSEL_PRODUCTS'
export const UPDATE_CAROUSEL_PRODUCTS = 'UPDATE_CAROUSEL__PRODUCTS'
export const ERROR_UPDATING_CAROUSEL_PRODUCTS = 'ERROR_UPDATING_CAROUSEL_PRODUCTS'


export const loadingCarouselProducts = (): Action => ({
    type: LOADING_PRODUCT_CAROUSEL
})

export const updateCarouselProducts = (products: any[]): Action => ({
    type: UPDATE_CAROUSEL_PRODUCTS,
    payload: products
})

export const errorOnUpdateCarouselProducts = (error: Error): Action => ({
    type: ERROR_UPDATING_CAROUSEL_PRODUCTS,
    payload: error
})

export const getCarouselProducts = () => async (dispatch: any) => {
    dispatch(loadingCarouselProducts())
    try {
        const products = await CarouselProductsAPI.getProducts()
        dispatch(updateCarouselProducts(products))
    } catch (error) {
        dispatch(errorOnUpdateCarouselProducts(error))
    }

}

