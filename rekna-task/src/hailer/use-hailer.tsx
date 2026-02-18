import { useSyncExternalStore } from 'react';
import { HailerApi } from '@hailer/app-sdk';

// Types
interface HailerState {
  inside: boolean;
  hailer: InstanceType<typeof HailerApi> | null;
  config: Record<string, unknown> | null;
  latestSignal: any | null;
}

declare global {
  interface Window {
    __hailerStore?: {
      state: HailerState;
      listeners: Set<() => void>;
      subscribe: (listener: () => void) => () => void;
      getSnapshot: () => HailerState;
      setState: (newState: Partial<HailerState>) => void;
    };
  }
}

// Initialize store once on window
function getStore() {
  if (!window.__hailerStore) {
    window.__hailerStore = {
      state: { inside: false, hailer: null, config: null, latestSignal: null },
      listeners: new Set(),
      subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
      },
      getSnapshot() {
        return this.state;
      },
      setState(newState) {
        this.state = { ...this.state, ...newState };
        this.listeners.forEach((l) => l());
      },
    };

    // Initialize SDK once with correct callback signature
    const api = new HailerApi({
      config: (inside: boolean, cfg?: any) => {
        console.log('[useHailer] config callback:', { inside, cfg });
        window.__hailerStore!.setState({
          inside: inside,
          config: cfg?.fields ?? null,
        });
      },
      error: (err: any) => {
        console.error('[useHailer] SDK error:', err);
      },
      signals: (signal: any) => {
        console.log('[useHailer] Signal received:', signal);
        window.__hailerStore!.setState({ latestSignal: signal });
      },
    });
    window.__hailerStore.setState({ hailer: api });
  }
  return window.__hailerStore;
}

export default function useHailer() {
  const store = getStore();
  const state = useSyncExternalStore(
    store.subscribe.bind(store),
    store.getSnapshot.bind(store)
  );

  return {
    inside: state.inside,
    hailer: state.hailer!,
    config: state.config,
    latestSignal: state.latestSignal,
  };
}
