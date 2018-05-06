import { BaseAction } from "../actions"
import { StoreState } from "../types"
import { INC_ENTHUSIASM, DEC_ENTHUSIASM } from "../constants"

export function enthusiasm(state: StoreState, action: BaseAction): StoreState {
    switch (action.type) {
        case INC_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
        case DEC_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
        default:
            return state
    }
}