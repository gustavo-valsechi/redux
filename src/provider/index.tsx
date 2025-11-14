"use client"

import React from "react"
import { Provider } from "react-redux"
import { SyncServerState, store } from "@index"

export function StoreProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <SyncServerState />
            {children}
        </Provider>
    )
}