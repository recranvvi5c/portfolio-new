"use client";

import { useEffect, useState } from "react";

export default function Counter({ to }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf;
    let current = 0;
    const step = Math.max(1, Math.round(to / 40));
    const tick = () => {
      current = Math.min(to, current + step);
      setN(current);
      if (current < to) raf = requestAnimationFrame(tick);
    };
    const t = setTimeout(tick, 400);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <strong>{n}</strong>;
}
