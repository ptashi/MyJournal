"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const todayKey = new Date().toISOString().split("T")[0];
    router.push(`/day/${todayKey}`);
  }, [router]);

  return null; // nothing to show, we're redirecting immediately
}