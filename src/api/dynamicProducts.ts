import { products } from '../../data/products'
import * as _ from 'lodash'

export const getProducts = async (query: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(''), 1000)
    }).then(() => {
        return products
    })
}
