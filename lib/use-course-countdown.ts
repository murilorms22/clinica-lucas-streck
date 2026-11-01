"use client";

import * as React from "react";

export interface CourseCountdownSnapshot {
  hydrated: boolean;
  ended: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SERVER_SNAPSHOT: CourseCountdownSnapshot = {
  hydrated: false,
  ended: false,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function computeSnapshot(targetIso: string): CourseCountdownSnapshot {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) {
    return {
      hydrated: true,
      ended: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  const totalSeconds = Math.floor(diff / 1000);
  return {
    hydrated: true,
    ended: false,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * Hook React 19 hydration-safe para o contador regressivo e status pós-evento.
 */
export function useCourseCountdown(targetIso: string): CourseCountdownSnapshot {
  const cacheRef = React.useRef<CourseCountdownSnapshot>(SERVER_SNAPSHOT);

  const subscribe = React.useCallback((onStoreChange: () => void) => {
    const id = window.setInterval(onStoreChange, 1000);
    return () => window.clearInterval(id);
  }, []);

  const getSnapshot = React.useCallback(() => {
    const next = computeSnapshot(targetIso);
    const prev = cacheRef.current;
    if (
      prev.hydrated === next.hydrated &&
      prev.ended === next.ended &&
      prev.days === next.days &&
      prev.hours === next.hours &&
      prev.minutes === next.minutes &&
      prev.seconds === next.seconds
    ) {
      return prev;
    }
    cacheRef.current = next;
    return next;
  }, [targetIso]);

  const getServerSnapshot = React.useCallback(() => SERVER_SNAPSHOT, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

