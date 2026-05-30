import { useSyncExternalStore } from "react";

// Returns false on the server, true on the client — with no effect/setState cycle.
// This is the React-team-recommended pattern for SSR-safe mount detection.
const emptySubscribe = () => () => {};

export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // client snapshot
    () => false  // server snapshot
  );
}
