import { Action } from '@ngrx/store'

export enum Actions {
    SET_LOADING = '[loading Component] Set loading state',
}

export class SetLoading implements Action {
    readonly type = Actions.SET_LOADING
    constructor(public payload: boolean) {}
}
/**
 * As there only one action exists for the Loading state we don not need this part
 * for other application state there could be many action which will requires one export for all 
 */
// export type AllLoadingActions =
//     | SetLoading
