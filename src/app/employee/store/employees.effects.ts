import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'

import { EmployeesActionTypes } from './employees.actions'
import * as fromEmployees from './employees.actions'
import { EmployeeService } from '../services/employee.service'
import { of } from 'rxjs'
import { Store } from '@ngrx/store'
import { EmployeesState } from './employees.state'

@Injectable()
export class EmployeesEffects {

    @Effect()
    query$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEES_QUERY),
        switchMap(() => this.employeeService
            .getAll()
            .pipe(
                map(employees => (new fromEmployees.EmployeesLoaded({ list: employees }))),
                catchError(error => {
                    this.store.dispatch(new fromEmployees.EmployeesError({ error: `Error in retrieving Employees ${error.message}` }))
                    return of(null)
                })
            )),
    )

    @Effect({ dispatch: false })
    save$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEE_SAVE),
        map((action: fromEmployees.EmployeeSave) => action.payload),
        switchMap((payload: any) => this.employeeService
            .save(payload.employee)
            .pipe(
                map(employee => this.store.dispatch(new fromEmployees.EmployeeSaved({ employee }))),
                catchError(error => {
                    this.store.dispatch(new fromEmployees.EmployeesError({ error: `Error in saving the Employee ${error.message}` }))
                    return of(null)
                })
            ))
    )

    @Effect({ dispatch: false })
    delete$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEE_DELETE),
        map((action: fromEmployees.EmployeeDelete) => action.payload),
        switchMap((payload: any) => this.employeeService
            .delete(payload.employee)
            .pipe(
                map(() => this.store.dispatch(new fromEmployees.EmployeeDeleted({ employee: payload.employee }))),
                catchError(error => {
                    this.store.dispatch(new fromEmployees.EmployeesError({ error: `Error in deleting the Employee ${error.message}` }))
                    return of(null)
                })
            ))
    )

    constructor(
        private actions$: Actions,
        private store: Store<EmployeesState>,
        private employeeService: EmployeeService,
    ) { }

}
