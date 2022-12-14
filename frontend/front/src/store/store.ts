import {Action, AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';

import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';


const rootReducer = combineReducers({

})

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

// ActionType это - 'A' / Promise<void> возвращаемое значение это 'R' /
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// типизация для useDispatch
type AppDispatchType = ThunkDispatch<AppStateType, void, AnyAction>


// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store

// @ts-ignore
window.store = store
