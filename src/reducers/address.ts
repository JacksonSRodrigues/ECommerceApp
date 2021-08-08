import _ from 'lodash'
import { Action } from '../actions/index.types'
import {
    SHOW_ADDRESS_MODAL,
    HIDE_ADDRESS_MODAL
} from '../actions/address'

export type AddressState = {
    showAddOrEditOption: Boolean
    address: any[]
    currentAddress: any
}

const initialState: AddressState = {
    showAddOrEditOption: false,
    address: [],
    currentAddress: undefined
}

const AddressReducer = (state: AddressState = initialState, action: Action) => {
    switch (action.type) {
        case SHOW_ADDRESS_MODAL: {
            return {
                ...state,
                showAddOrEditOption: true
            }
        }

        case HIDE_ADDRESS_MODAL: {
            return {
                ...state,
                showAddOrEditOption: false
            }
        }

        default:
            return state
    }
}

export default AddressReducer