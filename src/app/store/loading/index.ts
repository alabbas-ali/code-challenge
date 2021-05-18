import { createSelector, createFeatureSelector } from '@ngrx/store'

import * as fromReducer from './loading.reducer'

export { LoadingState, reducer } from './loading.reducer'

export interface ParentState {
    loading: fromReducer.LoadingState
}

export const getParentState =
    createFeatureSelector<ParentState>('core')

export const getLoadingState = createSelector(
    getParentState,
    (parent: ParentState) => parent.loading,
)

