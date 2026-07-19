"use client";
import { useEffect, useState } from "react";
import { LiquidCursor } from "./liquid-cursor";

export function MotionEffects() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });
  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>("[data-horizontal-scroll]");
    const nodes = document.querySelectorAll(".intro, .spaces-heading, .space-card, .about-copy, .arch-visual, .contact > *");
    nodes.forEach((node) => node.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
      setCursor({ x: event.clientX, y: event.clientY, active: true });
    };
    const leave = () => setCursor((value) => ({ ...value, active: false }));
    let transitionLocked = false;
    const wheel = (event: WheelEvent) => {
      if (!scroller || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (transitionLocked || Math.abs(event.deltaY) < 12) return;
      const total = scroller.querySelectorAll(":scope > section").length;
      const current = Math.round(scroller.scrollLeft / scroller.clientWidth);
      const next = Math.max(0, Math.min(total - 1, current + (event.deltaY > 0 ? 1 : -1)));
      if (next === current) return;
      transitionLocked = true;
      scroller.scrollTo({ left: next * scroller.clientWidth, behavior: "smooth" });
      window.setTimeout(() => { transitionLocked = false; }, 900);
    };
    window.addEventListener("pointermove", move, { passive: true });
    scroller?.addEventListener("wheel", wheel, { passive: false });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => { observer.disconnect(); window.removeEventListener("pointermove", move); scroller?.removeEventListener("wheel", wheel); document.documentElement.removeEventListener("mouseleave", leave); };
  }, []);
  return <LiquidCursor />;
}
