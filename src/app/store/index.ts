import { ActionReducerMap } from '@ngrx/store'

import * as fromLoading from './loading'
import * as fromEmployee from './employee'

export interface CoreState {
    loading: fromLoading.LoadingState,
    employee: fromEmployee.EmployeeState,
}

export const reducers: ActionReducerMap<CoreState> = {
    loading: fromLoading.reducer,
    employee: fromEmployee.reducer,
}
