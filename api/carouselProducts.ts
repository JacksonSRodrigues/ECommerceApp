import { carousels } from '../data/carousal'
import * as _ from 'lodash'

export const getProducts = async () => {
    return Promise.resolve().then(() => {
        return carousels
    })
}