
import { Action } from '@ngrx/store'

export enum Actions {
    SET_LOADING = '[loading Component] Set loading state',
}

export class SetLoading implements Action {
    readonly type = Actions.SET_LOADING
    constructor(public payload: boolean) {}
}

export type AllLoadingActions =
    | SetLoading
