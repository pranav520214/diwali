"use client";

import { useSyncExternalStore } from "react";

/**
 * useReducedMotion Hook
 * 
 * Accurately detects user's system preference for reduced motion (`prefers-reduced-motion: reduce`).
 * - Safe for SSR (defaults to false until mounted on client to prevent hydration mismatch).
 * - Reacts dynamically if the user toggles OS accessibility settings mid-session.
 * - Uses React's useSyncExternalStore for tear-free, cascading-render-free subscriptions.
 */

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  } else {
    // Legacy support
    mediaQuery.addListener(callback);
    return () => mediaQuery.removeListener(callback);
  }
}

function getSnapshot(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
