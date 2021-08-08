import * as _ from 'lodash'
import { carousels } from '../../data/carousal'

export const getProducts = async () => {
    return Promise.resolve().then(() => {
        return carousels
    })
}