import { createSelector, createFeatureSelector } from '@ngrx/store'

import * as fromReducer from './employee.reducer'
import * as fromSelectors from './employee.selectors'

export { EmployeeState, reducer } from './employee.reducer'
export { SetEmployeeInfo } from './employee.actions'

export interface ParentState {
    employee: fromReducer.EmployeeState
}

// state selectors

export const getParentState =
    createFeatureSelector<ParentState>('core')

export const getState = createSelector(
    getParentState,
    (parent: ParentState) => parent.employee,
)

// feature selectors

export const GetEmployee = createSelector(
    getState, fromSelectors.getEmployee,
)

