import { AppDispatch } from '../../index.mjs';
import '@reduxjs/toolkit';
import 'redux-thunk';
import 'redux';

declare const syncStates: (dispatch: AppDispatch) => Promise<void>;
declare function SyncStatesProvider(): null;

export { SyncStatesProvider, syncStates };
