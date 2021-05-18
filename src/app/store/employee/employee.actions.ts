import { Employee } from '@@model/employee'
import { Action } from '@ngrx/store'

export enum Actions {
    SET_EMPLOYEE_INFO = '[Employee] Set Employee',
}

export class SetEmployeeInfo implements Action {
    readonly type = Actions.SET_EMPLOYEE_INFO
    constructor(public payload: Employee) {}
}


export type AllEmployeeActions =
    | SetEmployeeInfo

