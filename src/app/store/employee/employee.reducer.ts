

import { Employee } from '@@model/employee'
import { AllEmployeeActions, Actions } from './employee.actions'

export interface EmployeeState {
    employee: Employee
}

const initialState: EmployeeState = {
    employee: null,
}

type Action = AllEmployeeActions

export function reducer(
    state: EmployeeState = initialState,
    action: Action,
): EmployeeState {
    switch (action.type) {

        case Actions.SET_EMPLOYEE_INFO: return {
            ...state,
            employee: action.payload,
        }

        default:
            return { ...state }
    }
}
