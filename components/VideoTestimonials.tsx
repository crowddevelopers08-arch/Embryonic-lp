"use client";

import { useRef, useState } from "react";

const VIDEO_IDS = [
  "JdNTWK1oUvA",
  "-EfLkA1J0h4",
  "jz-q-xmHtmA",
  "940sUT66duo",
  "Vju5aV8jwNs",
  "WxgbY8z-YLs",
  "L4VJxC935sc",
  "e8_t2ZvT5eo",
  "JC2UWw6uCMI",
  "rgM1WNbM1pA",
];

function embedSrc(id: string, muted: boolean) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: muted ? "1" : "0",
    loop: "1",
    playlist: id,
    playsinline: "1",
    controls: muted ? "0" : "1",
    modestbranding: "1",
    rel: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export default function VideoTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.48, behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  }

  return (
    <section className="w-full bg-white py-[30px]">
      <div className="mx-auto w-[min(100%-32px,1350px)]">
        <div className="relative mb-8 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-[#2c1d27] sm:text-4xl">
            Stories of Hope, Clarity &amp;{" "}
            <span className="text-[#e8278d]">Guided Fertility Care</span>
          </h2>
          <div className="mt-4 flex justify-center gap-2.5 sm:absolute sm:top-1 sm:right-0 sm:mt-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d9e5] text-[#e8278d] transition-colors hover:border-[#efb8d3] hover:bg-[#fde7f2]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#efb8d3] text-[#e8278d] transition-colors hover:bg-[#fde7f2]"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar grid auto-cols-[92%] grid-flow-col gap-5 overflow-x-auto scroll-smooth [scroll-snap-type:x_mandatory] sm:auto-cols-[minmax(520px,48%)]"
        >
          {VIDEO_IDS.map((id) => {
            const muted = activeId !== id;
            return (
              <div
                key={id}
                className="relative aspect-video overflow-hidden rounded-3xl border border-[#f4dce8] bg-[#f8edf3] [scroll-snap-align:start]"
              >
                <iframe
                  src={embedSrc(id, muted)}
                  title={`Patient testimonial ${id}`}
                  className="h-full w-full"
                  allow="accelerate-magnetometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {muted && (
                  <button
                    type="button"
                    onClick={() => setActiveId(id)}
                    className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-[#2c1d27]/70 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-[#e8278d]"
                  >
                    🔇 Sound On
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-[#f1d9e5]">
          <div
            className="h-full rounded-full bg-[#e8278d] transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
