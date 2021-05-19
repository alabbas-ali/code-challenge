import { AllLoadingActions, Actions } from './loading.actions'

/**
 * The application loading state interface definition 
 */
 export interface LoadingState {
    loading: boolean
    error: boolean
}

/**
 * The initial application loading state 
 * As the home page is loading the list the loading state should be initialize as true
 */
 const initialState: LoadingState = {
    loading: true,
    error: false,
}

type Action = AllLoadingActions

/**
 * The loading state reducer
 * the reflication that each action is taking place in the application state
 */
 export function reducer(
    state: LoadingState = initialState,
    action: Action,
): LoadingState {
    switch (action.type) {
        case Actions.SET_LOADING: return {
            ...state,
            loading: action.payload,
            error: false,
        }

        case Actions.SET_LOADING_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
        }

        default:
            return { ...state }
    }
}
