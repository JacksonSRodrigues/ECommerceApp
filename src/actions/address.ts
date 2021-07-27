import { Action } from './index.types'

export const SHOW_ADDRESS_MODAL = 'SHOW_ADDRESS_MODAL'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'



export const showUpdateAddressModal = () => ({
    type: SHOW_ADDRESS_MODAL
})

export const addNewAddress = () => {

}

export const editOrAddAddress = () => (dispatch: any) => {
    dispatch(showUpdateAddressModal())
}