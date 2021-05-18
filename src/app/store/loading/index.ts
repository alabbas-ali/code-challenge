import { createSelector, createFeatureSelector } from '@ngrx/store'

import * as fromReducer from './loading.reducer'
import * as fromSelectors from './loading.selectors'

export { LoadingState, reducer } from './loading.reducer'
export { SetLoading } from './loading.actions'

export interface ParentState {
    loading: fromReducer.LoadingState
}

// state selectors

export const getParentState =
    createFeatureSelector<ParentState>('core')

export const getState = createSelector(
    getParentState,
    (parent: ParentState) => parent.loading,
)

// feature selectors

export const GetLoading = createSelector(
    getState, fromSelectors.getLoading,
)
