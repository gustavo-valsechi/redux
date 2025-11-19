import { RootState } from '../../index.js';
import '@reduxjs/toolkit';
import 'redux-thunk';
import 'redux';

declare const useReduxClient: <K extends keyof RootState>(sliceName: K) => RootState[K];
declare const useReduxServer: <K extends keyof RootState>(sliceName: K) => RootState[K];

export { useReduxClient, useReduxServer };
