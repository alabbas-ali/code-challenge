import { EmployeesActions, EmployeesActionTypes } from './employees.actions'
import { EmployeesInitialState, EmployeesState } from './employees.state'


export function employeesReducer(
    state = EmployeesInitialState, 
    action: EmployeesActions
): EmployeesState {
    switch (action.type) {

        case EmployeesActionTypes.EMPLOYEES_QUERY: {
            return Object.assign({}, state, {
                loading: true,
            })
        }

        case EmployeesActionTypes.EMPLOYEES_LOADED: {
            console.log('EMPLOYEES LOADED')
            return Object.assign({}, state, {
                list: action.payload.list,
                loading: false,
            })
        }

        case EmployeesActionTypes.EMPLOYEE_SAVED: {
            let newlist = state.list.map((item) => 
                Object.assign({}, item)
            )

            if (newlist.filter(it => it.id === action.payload.employee.id).length > 0)
                newlist = newlist.map(it => {
                        if (it.id === action.payload.employee.id)
                            return action.payload.employee
                        else return it
                    })
            else newlist.push(action.payload.employee)
            
            return Object.assign({}, state, {
                list: newlist,
                loading: false,
            })
        }

        case EmployeesActionTypes.EMPLOYEE_DELETED: {
            return Object.assign({}, state, {
                list: state.list.filter(it => it.id != action.payload.employee.id),
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
