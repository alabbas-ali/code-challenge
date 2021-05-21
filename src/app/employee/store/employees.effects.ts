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

    constructor(
        private actions$: Actions,
        private store: Store<EmployeesState>,
        private employeeService: EmployeeService,
    ) { }

    @Effect()
    query$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEES_QUERY),
        switchMap(() => this.employeeService.getAll()
            .pipe(
                map(employees => (new fromEmployees.EmployeesLoaded({ list: employees })),
                catchError(error => of(new fromEmployees.EmployeesError({ error })))
        ))),
    )

    @Effect({ dispatch: false })
    save$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEE_SAVE),
        map((action: fromEmployees.EmployeeSave) => action.payload),
        switchMap((payload: any) => this.employeeService.save(payload.employee)
            .pipe(map(employee => { 
                return this.store.dispatch(new fromEmployees.EmployeeSaved({ employee: employee }))
            },
            catchError(error => of(new fromEmployees.EmployeesError({ error })))
        )))
    )

    @Effect({ dispatch: false })
    delete$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.EMPLOYEE_DELETE),
        map((action: fromEmployees.EmployeeDelete) => action.payload),
        switchMap((payload: any) => this.employeeService.delete(payload.employee)
            .pipe(map(deleted => {
                if (deleted)
                    return this.store.dispatch(new fromEmployees.EmployeeDeleted({ employee: payload.employee }))
                else return 
            },
            catchError(error => of(new fromEmployees.EmployeesError({ error })))
        )))
    )

}
