import * as constants from "../constants"

export interface BaseAction {
    type: string
}

export interface IncEnthusiasm extends BaseAction {
    type: constants.INC_ENTHUSIASM
}

export interface DecEnthusiasm extends BaseAction {
    type: constants.DEC_ENTHUSIASM
}

export function incEnthusiasm(): IncEnthusiasm {
    return {
        type: constants.INC_ENTHUSIASM
    }
}

export function decEnthusiasm(): DecEnthusiasm {
    return {
        type: constants.DEC_ENTHUSIASM
    }
}