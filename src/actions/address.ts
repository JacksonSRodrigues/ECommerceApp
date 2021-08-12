import { Action } from './index.types'

export const SHOW_ADDRESS_MODAL = 'SHOW_ADDRESS_MODAL'
export const HIDE_ADDRESS_MODAL = 'HIDE_ADDRESS_MODAL'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'



export const showUpdateAddressScreen = () => ({
  type: SHOW_ADDRESS_MODAL
})

export const hideUpdateAddressScreen = () => ({
  type: HIDE_ADDRESS_MODAL
})


export const addNewAddress = (address: any): Action => ({
  type: ADD_ADDRESS,
  payload: address
})