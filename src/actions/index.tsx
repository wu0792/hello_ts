import * as constants from "../constants"

export interface BaseAction {
    type: string
}

export function incEnthusiasm(): BaseAction {
    return {
        type: constants.INC_ENTHUSIASM
    }
}

export function decEnthusiasm(): BaseAction {
    return {
        type: constants.DEC_ENTHUSIASM
    }
}