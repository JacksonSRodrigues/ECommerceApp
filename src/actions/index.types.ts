export type Action = {
    type: string,
    payload?: any
}

export type DynamicAction = {
    type: string,
    identifier: string,
    payload?: any
}