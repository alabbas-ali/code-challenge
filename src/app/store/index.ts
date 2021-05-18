import { ActionReducerMap } from '@ngrx/store'
import * as fromLoading from './loading'


export interface AppState {
    loading: fromLoading.LoadingState
}

export const appStoreReducer : ActionReducerMap<AppState> = {
    loading: fromLoading.reducer,
}
