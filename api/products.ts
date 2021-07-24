import { products } from '../data/products'
import * as _ from 'lodash'

export const getProducts = async () => {
    return Promise.resolve().then(() => {
        return products
    })
}

export const getDiscountedProducts = async () => {
    return Promise.resolve().then(() => {
        return _.filter(products, (item) => !_.isEmpty(item.offerText))
    })
}