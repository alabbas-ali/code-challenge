import { EmployeesActions, EmployeesActionTypes } from './employees.actions'
import { EmployeesInitialState, EmployeesState } from './employees.state'


export function employeesReducer(state = EmployeesInitialState, action: EmployeesActions): EmployeesState {
    switch (action.type) {

        case EmployeesActionTypes.EMPLOYEES_QUERY: {
            return Object.assign({}, state, {
                loading: true,
            })
        }

        case EmployeesActionTypes.EMPLOYEES_LOADED: {
            return Object.assign({}, state, {
                list: action.payload.list,
                loading: false,
            })
        }

        case EmployeesActionTypes.EMPLOYEES_ERROR: {
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error
            })
        }

        default:
            return state
    }
}
