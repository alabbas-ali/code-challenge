import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'

import { EmployeesActionTypes } from './employees.actions'
import * as fromEmployees from './employees.actions'
import { EmployeeService } from '../services/employee.service'
import { of } from 'rxjs'

@Injectable()
export class EmployeesEffects {

    constructor(
        private actions$: Actions,
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
    added$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.Employee_ADDED),
        map((action: fromEmployees.EmployeeAdded) => action.payload),
        switchMap(([payload]: any): any => this.employeeService.add(payload.employee))
    )

    @Effect({ dispatch: false })
    delete$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.Employee_DELETED),
        map((action: fromEmployees.EmployeeDeleted) => action.payload),
        switchMap(([payload]: any): any => this.employeeService.delete(payload.employee))
    )

    @Effect({ dispatch: false })
    edit$ = this.actions$.pipe(
        ofType(EmployeesActionTypes.Employee_EDITED),
        map((action: fromEmployees.EmployeeEdited) => action.payload),
        switchMap(([payload]: any): any => this.employeeService.update(payload.employee)
        )
    )

}
