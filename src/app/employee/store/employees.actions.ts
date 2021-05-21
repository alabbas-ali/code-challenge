import { Action } from '@ngrx/store'
import { Employee } from '../model/employee'

export enum EmployeesActionTypes {
    EMPLOYEES_QUERY = '[Employees] Employees query',
    EMPLOYEES_LOADED = '[Employees] Employees loaded',
    EMPLOYEE_SAVE = '[Employees] Employee save',
    EMPLOYEE_SAVED = '[Employees] Employee saved',
    EMPLOYEE_DELETE = '[Employees] Employee delete',
    EMPLOYEE_DELETED = '[Employees] Employee deleted',
    EMPLOYEES_ERROR = '[Employees] Employees error',
}

export class EmployeesQuery implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEES_QUERY
}

export class EmployeesLoaded implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEES_LOADED

    constructor(public payload: { list: Array<Employee> }) {}
}

export class EmployeeSave implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEE_SAVE

    constructor(public payload: { employee: Employee}) {}
}

export class EmployeeSaved implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEE_SAVED

    constructor(public payload: { employee: Employee}) {}
}

export class EmployeeDelete implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEE_DELETE

    constructor(public payload: { employee: Employee }) {}
}
export class EmployeeDeleted implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEE_DELETED

    constructor(public payload: { employee: Employee }) {}
}

export class EmployeesError implements Action {
    readonly type = EmployeesActionTypes.EMPLOYEES_ERROR

    constructor(public payload: { error: any }) {}
}

export type EmployeesActions =
  | EmployeesQuery
  | EmployeesLoaded
  | EmployeeSave
  | EmployeeSaved
  | EmployeeDelete
  | EmployeeDeleted
  | EmployeesError
