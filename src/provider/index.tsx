"use client"

import React from "react"
import { Provider } from "react-redux"
import { store } from "../index"
import { SyncStatesProvider } from "../tools"

export function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <SyncStatesProvider />
            {children}
        </Provider>
    )
}