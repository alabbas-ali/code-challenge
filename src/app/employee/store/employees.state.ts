import { Employee } from '../model/employee'

export interface EmployeesState {
    list: Array<Employee> | null;
    loading: boolean;
    error: boolean;
}

export const EmployeesInitialState: EmployeesState = {
    list: null,
    loading: true,
    error: null
}
