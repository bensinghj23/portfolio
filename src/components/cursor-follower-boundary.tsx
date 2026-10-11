"use client";

import dynamic from "next/dynamic";

const CursorFollower = dynamic(
  () => import("@/components/cursor-follower").then((module) => module.CursorFollower),
  { ssr: false }
);

export function CursorFollowerBoundary() {
  return <CursorFollower />;
}
