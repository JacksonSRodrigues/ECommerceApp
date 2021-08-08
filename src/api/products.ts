import { products } from '../../data/products'
import * as _ from 'lodash'

export const getProducts = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(''), 1000)
    }).then(() => {
        return products
    })
}

export const getDiscountedProducts = async () => {
    return Promise.resolve().then(() => {
        return _.filter(products, (item) => true) //!_.isEmpty(item.offerText))
    })
}