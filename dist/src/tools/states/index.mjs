import { useSyncExternalStore } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../index";
import { syncStates, memory } from "../../tools";
const useReduxClient = (sliceName) => {
  const dispatch = useDispatch();
  (async () => await syncStates(dispatch))();
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState()[sliceName]
  );
  console.log("States", state);
  return {
    state: state || {},
    dispatch: (action, value) => {
      console.log("Actions", memory.actions);
      const sliceActions = memory.actions[sliceName];
      const actionFunction = sliceActions[action];
      if (!actionFunction) return;
      dispatch(actionFunction(value));
    }
  };
};
const useReduxServer = (sliceName) => {
  return {
    state: store.getState()[sliceName] || {},
    dispatch: (action, value) => {
      const sliceActions = memory.actions[sliceName];
      const actionFunction = sliceActions[action];
      if (!actionFunction) return;
      store.dispatch(actionFunction(value));
    }
  };
};
export {
  useReduxClient,
  useReduxServer
};
