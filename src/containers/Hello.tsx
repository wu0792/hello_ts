import Hello from '../components/Hello'
import * as actions from '../actions'
import { StoreState } from '../types'
import { connect, Dispatch } from 'react-redux'

function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.BaseAction>) {
    return {
        onIncrement: () => dispatch(actions.incEnthusiasm()),
        onDecrement: () => dispatch(actions.decEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)