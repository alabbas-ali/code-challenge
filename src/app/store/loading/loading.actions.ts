
import { Action } from '@ngrx/store'

export enum Actions {
    SET_LOADING = '[loading] Set loading state',
    SET_LOADING_ERROR = '[loading] Set loading error state'
}

export class SetLoading implements Action {
    readonly type = Actions.SET_LOADING
    constructor(public payload: boolean) {}
}

export class SetLoadingError implements Action {
    readonly type = Actions.SET_LOADING_ERROR
    constructor(public payload: boolean) {}
}

export type AllLoadingActions =
    | SetLoading
    | SetLoadingError
