import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import * as redux_thunk from 'redux-thunk';
import * as redux from 'redux';

declare const store: _reduxjs_toolkit.EnhancedStore<any, redux.UnknownAction, _reduxjs_toolkit.Tuple<[redux.StoreEnhancer<{
    dispatch: redux_thunk.ThunkDispatch<any, undefined, redux.UnknownAction>;
}>, redux.StoreEnhancer]>>;
type AppStore = typeof store;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export { type AppDispatch, type AppStore, type RootState, store };
