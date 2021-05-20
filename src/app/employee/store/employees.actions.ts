import { Action } from '@ngrx/store'
import { Employee } from '../model/employee'

export enum EmployeesActionTypes {
  EMPLOYEES_QUERY = '[Employees] Employees query',
  EMPLOYEES_LOADED = '[Employees] Employees loaded',
  Employee_ADDED = '[Employees] Employee added',
  Employee_EDITED = '[Employees] Employee edited',
  Employee_DELETED = '[Employees] Employee deleted',
  EMPLOYEES_ERROR = '[Employees] Employees error',
}

export class EmployeesQuery implements Action {
  readonly type = EmployeesActionTypes.EMPLOYEES_QUERY
}

export class EmployeesLoaded implements Action {
  readonly type = EmployeesActionTypes.EMPLOYEES_LOADED

  constructor(public payload: { list: Array<Employee> }) {}
}

export class EmployeeAdded implements Action {
  readonly type = EmployeesActionTypes.Employee_ADDED

  constructor(public payload: { employee: Employee}) {}
}

export class EmployeeEdited implements Action {
  readonly type = EmployeesActionTypes.Employee_EDITED

  constructor(public payload: { employee: Employee }) {}
}

export class EmployeeDeleted implements Action {
  readonly type = EmployeesActionTypes.Employee_DELETED

  constructor(public payload: { employee: Employee }) {}
}

export class EmployeesError implements Action {
  readonly type = EmployeesActionTypes.EMPLOYEES_ERROR

  constructor(public payload: { error: any }) {}
}

export type EmployeesActions =
  | EmployeesQuery
  | EmployeesLoaded
  | EmployeeAdded
  | EmployeeEdited
  | EmployeeDeleted
  | EmployeesError
