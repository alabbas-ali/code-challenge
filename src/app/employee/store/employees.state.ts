import { Employee } from '../model/employee'

export interface EmployeesState {
    list: Array<Employee> | null
    loading: boolean
    error: any
}

export const EmployeesInitialState: EmployeesState = {
    list: null,
    loading: false,
    error: null
}
