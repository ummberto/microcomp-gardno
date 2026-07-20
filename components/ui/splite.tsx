"use client";

import { Component, type ErrorInfo, type ReactNode, Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function hasWebGLSupport() {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("webgl2"))
    );
  } catch {
    return false;
  }
}

function SplineFallback() {
  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 420 }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "72%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2), rgba(255,255,255,0.05) 42%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: 230,
          height: 230,
          borderRadius: 34,
          background: "rgba(7,19,31,0.72)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 28px 80px rgba(0,0,0,0.28)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "white", fontFamily: "var(--font-heading)" }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 1 }}>IT</div>
          <div style={{ marginTop: 10, fontSize: 13, letterSpacing: "0.14em", color: "rgba(255,255,255,0.68)" }}>
            MICROCOMP
          </div>
        </div>
      </div>
    </div>
  );
}

class SplineErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Spline scene disabled; falling back because WebGL failed.", error, errorInfo);
  }

  render() {
    if (this.state.hasError) return <SplineFallback />;
    return this.props.children;
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [webglReady, setWebglReady] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglReady(hasWebGLSupport());
  }, []);

  if (webglReady === null) return <SplineFallback />;
  if (!webglReady) return <SplineFallback />;

  return (
    <SplineErrorBoundary>
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  );
}
