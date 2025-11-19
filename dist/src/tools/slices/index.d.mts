import { Reducer } from '@reduxjs/toolkit';

declare let memory: any;
declare const configureSlices: (slices: {
    [key: string]: {
        actions: {
            [key: string]: Function;
        };
        reducer: Reducer<any, any>;
    };
}) => void;

export { configureSlices, memory };
