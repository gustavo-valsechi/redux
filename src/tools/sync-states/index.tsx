"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useDispatch } from "react-redux"
import { setFullState } from "@tools"

export function SyncServerState() {
    const dispatch = useDispatch()

    const pathname = usePathname()

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/state", { cache: "no-store" })
                const json = await res.json()

                if (!json.state) return

                dispatch(setFullState(json.state))
            } catch (err) {
                console.error("Error on sync server states", err);
            }
        })()
    }, [pathname, dispatch])

    return null
}
