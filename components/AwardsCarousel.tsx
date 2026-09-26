"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const BADGES = [
  "3-11.webp",
  "2-20.webp",
  "1-21-1.webp",
  "4-12.webp",
  "5-10.webp",
  "6-13-1.webp",
  "7-12.webp",
  "8-11.webp",
  "9-8.webp",
  "10-7.webp",
];

export default function AwardsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const hovering = useRef(false);
  const touching = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const card = cardRefs.current[index];
    const track = trackRef.current;
    const first = cardRefs.current[0];
    if (!card || !track || !first) return;
    track.scrollLeft = card.offsetLeft - first.offsetLeft;
  }, []);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let closestDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const dist = Math.abs(card.offsetLeft - (cardRefs.current[0]?.offsetLeft ?? 0) - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest % BADGES.length);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousTime = 0;
    let position = 0;

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      const first = cardRefs.current[0];
      const duplicate = cardRefs.current[BADGES.length];
      const loopWidth = first && duplicate ? duplicate.offsetLeft - first.offsetLeft : 0;

      if (Math.abs(track.scrollLeft - position) > 1) position = track.scrollLeft;
      if (!hovering.current && !touching.current && !reducedMotion.matches && loopWidth > 0) {
        position = (position + elapsed * 0.07) % loopWidth;
        track.scrollLeft = position;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-[10px]">
      <div className="mx-auto w-[min(100%-32px,1350px)] text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#2c1d27] sm:text-3xl">
          Awards &amp; Achievements
        </h2>
      </div>

      <div
        className="mt-10"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
        onTouchStart={() => (touching.current = true)}
        onTouchEnd={() => (touching.current = false)}
        onTouchCancel={() => (touching.current = false)}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar relative mx-auto flex w-[min(100%-32px,1350px)] gap-5 overflow-x-auto"
        >
          {[...BADGES, ...BADGES].map((file, i) => (
            <div
              key={`${file}-${i}`}
              aria-hidden={i >= BADGES.length ? true : undefined}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="h-[190px] w-[210px] flex-none overflow-hidden rounded-2xl border-2 border-[#e8278d]/25 bg-white shadow-[0_10px_28px_rgba(121,62,93,0.08)] sm:h-[280px] sm:w-[240px]"
            >
              <Image
                src={`/images/awards/${file}`}
                alt="Award and certification"
                width={280}
                height={220}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {BADGES.map((file, i) => (
            <button
              key={file}
              type="button"
              aria-label={`Go to award ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-[#e8278d]" : "w-2 bg-[#f1d9e5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
