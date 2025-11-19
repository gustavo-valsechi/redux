"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setFullState } from "../../tools";
const syncStates = async (dispatch) => {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    const json = await res.json();
    console.log("json.state", json.state);
    if (!json.state) return;
    dispatch(setFullState(json.state));
  } catch (err) {
    console.error("Error on sync server states", err);
  }
};
function SyncStatesProvider() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  useEffect(() => {
    (async () => await syncStates(dispatch))();
  }, [pathname]);
  return null;
}
export {
  SyncStatesProvider,
  syncStates
};
