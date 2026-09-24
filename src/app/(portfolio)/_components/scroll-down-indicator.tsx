"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const SCROLLER_ID = "page-scroll";

export function ScrollDownIndicator() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroller = document.getElementById(SCROLLER_ID);
    if (!scroller) return;

    const update = () => {
      const hasOverflow =
        scroller.scrollHeight > scroller.clientHeight + 4;
      const atTop = scroller.scrollTop <= 0;
      setVisible(hasOverflow && atTop);
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const scrollDown = () => {
    const scroller = document.getElementById(SCROLLER_ID);
    scroller?.scrollBy({ top: scroller.clientHeight, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollDown}
      aria-label="Scroll down"
      className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
    >
      <span>Scroll down</span>
      <ArrowDown className="size-4 animate-bounce" />
    </button>
  );
}
