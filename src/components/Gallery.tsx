"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const galleryItems = [
  { src: "/images/gallery/rail-fence-pasture-01.jpeg", alt: "Four-rail wood fence along a pasture at sunrise" },
  { src: "/images/gallery/rail-wire-fence-road-02.jpeg", alt: "Wood rail fence with welded wire mesh along a roadside" },
  { src: "/images/gallery/rail-wire-fence-tree-03.jpeg", alt: "Rail and wire fence built around a mature tree" },
  { src: "/images/gallery/driveway-rail-fence-04.jpeg", alt: "Gravel driveway lined with rail fence on both sides" },
  { src: "/images/gallery/run-in-shed-exterior-05.jpeg", alt: "Finished two-bay run-in shed exterior" },
  { src: "/images/gallery/run-in-shed-interior-06.jpeg", alt: "Interior view of a run-in shed showing wood plank walls" },
  { src: "/images/gallery/run-in-shed-framing-07.jpeg", alt: "Run-in shed interior framing and rafters" },
  { src: "/images/gallery/run-in-shed-stall-08.jpeg", alt: "Run-in shed stall with plank walls and rafters" },
  { src: "/images/gallery/run-in-shed-loft-09.jpeg", alt: "Run-in shed interior showing loft framing" },
  { src: "/images/gallery/wire-fence-roadside-10.jpeg", alt: "Rail and wire fence with road and building in background" },
  { src: "/images/gallery/rail-wire-fence-sunny-11.jpeg", alt: "Three-rail wood and wire fence along a wooded road" },
  { src: "/images/gallery/privacy-fence-12.jpeg", alt: "Board-on-board wood privacy fence" },
  { src: "/images/gallery/field-wire-fence-13.jpeg", alt: "Wire and post fence enclosing an open field" },
  { src: "/images/gallery/pasture-horses-gate-14.jpeg", alt: "Pasture gate with horses grazing in the background" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);

  const total = galleryItems.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // keyboard support when carousel is focused
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // basic swipe / drag support
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };
  const onPointerUp = () => {
    const threshold = 40;
    if (dragDeltaX.current > threshold) prev();
    else if (dragDeltaX.current < -threshold) next();
    dragStartX.current = null;
    dragDeltaX.current = 0;
  };

  // optional: auto-advance, paused on hover/focus
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="label-tag">Recent Work</span>
          <h2>Jobs From Around The Property</h2>
          <p>Rail fence, wire fence, privacy fence, and a couple of run-in sheds we&apos;ve built lately.</p>
        </div>

        <div
          className="carousel"
          role="region"
          aria-label="Photo gallery of recent fencing and shed projects"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="carousel-frame">
            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={prev}
              aria-label="Previous photo"
            >
              &#8249;
            </button>

            <div
              className="carousel-stage"
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {galleryItems.map((item, i) => (
                <div
                  className="carousel-slide"
                  key={item.src}
                  style={{
                    transform: `translateX(${(i - index) * 100}%)`,
                  }}
                  aria-hidden={i !== index}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 880px) 100vw, 760px"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={next}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          </div>

          <div className="carousel-dots" role="tablist" aria-label="Choose photo">
            {galleryItems.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1} of ${total}`}
                className={`carousel-dot ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
