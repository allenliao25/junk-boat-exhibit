"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { traces, type Trace } from "@/src/data/artifacts";

const collectionStats = [
  { value: "09", label: "field records" },
  { value: "LSQ", label: "park site code" },
  { value: "2026", label: "site visit year" },
];

type BoatView = {
  id: "left" | "right" | "back-left" | "back";
  label: string;
  src: string;
};

const heroBoatViews: BoatView[] = [
  {
    id: "left",
    label: "Port profile",
    src: "/images/2-d-render/left-view.png",
  },
  {
    id: "right",
    label: "Slide side",
    src: "/images/2-d-render/right-view.png",
  },
  {
    id: "back-left",
    label: "Rear corner",
    src: "/images/2-d-render/back-left-view.png",
  },
  {
    id: "back",
    label: "Stern view",
    src: "/images/2-d-render/back-view.png",
  },
];

const fieldBoatViews: BoatView[] = [
  {
    id: "left",
    label: "Field view",
    src: "/images/junk-boat-render-refs/hero-junk-boat.jpg",
  },
  {
    id: "right",
    label: "Green slide",
    src: "/images/junk-boat-render-refs/boat-render.jpg",
  },
  {
    id: "back-left",
    label: "Rear corner",
    src: "/images/context/3d-6.jpg",
  },
  {
    id: "back",
    label: "Stern",
    src: "/images/context/3d-13.jpg",
  },
];

const hotspotViewId: BoatView["id"] = "left";

export default function Home() {
  const [selectedTrace, setSelectedTrace] = useState<Trace>(traces[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7df] text-[#23313d]">
      <Hero />
      <ExhibitStatement />
      <InteractiveBoat
        selectedTrace={selectedTrace}
        onSelectTrace={setSelectedTrace}
      />
      <DigitalCollection
        selectedTrace={selectedTrace}
        onSelectTrace={setSelectedTrace}
      />
      <TimeTransformation />
    </main>
  );
}

function Hero() {
  const [heroViewIndex, setHeroViewIndex] = useState(3);
  const heroView = heroBoatViews[heroViewIndex];

  const showNextHeroView = () => {
    setHeroViewIndex(
      (currentIndex) => (currentIndex + 1) % heroBoatViews.length,
    );
  };

  return (
    <section className="relative min-h-[90svh] overflow-hidden border-b border-[#23313d]/15 bg-[#f7dc72]">
      <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(90deg,#ef5d45_0_22px,#41b66f_22px_44px,#4a93c9_44px_66px,#f6c744_66px_88px)]" />
      <div className="absolute bottom-0 left-0 top-3 hidden w-12 border-r border-[#23313d]/20 bg-[#fff7df]/58 lg:block">
        <p className="origin-bottom-left translate-x-3 translate-y-[74vh] -rotate-90 whitespace-nowrap text-[0.64rem] font-black uppercase tracking-[0.2em] text-[#23313d]/70">
          LSQ-JB-2026 / playground archaeology
        </p>
      </div>
      <div className="relative z-10 mx-auto flex min-h-[90svh] w-full max-w-7xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Exhibit sections"
          className="flex max-w-full flex-wrap items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#23313d] sm:text-xs"
        >
          <a
            href="#statement"
            className="border-b-2 border-[#f6c744] bg-white/75 px-2.5 py-1.5 shadow-[3px_3px_0_rgba(35,49,61,0.12)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f6c744]/45"
          >
            Statement
          </a>
          <a
            href="#boat"
            className="border-b-2 border-[#41b6a6] bg-white/75 px-2.5 py-1.5 shadow-[3px_3px_0_rgba(35,49,61,0.12)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#41b6a6]/45"
          >
            Boat
          </a>
          <a
            href="#collection"
            className="border-b-2 border-[#ef5d45] bg-white/75 px-2.5 py-1.5 shadow-[3px_3px_0_rgba(35,49,61,0.12)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ef5d45]/35"
          >
            Archive
          </a>
          <a
            href="#time"
            className="border-b-2 border-[#4a76c9] bg-white/75 px-2.5 py-1.5 shadow-[3px_3px_0_rgba(35,49,61,0.12)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4a76c9]/35"
          >
            Time
          </a>
        </nav>

        <div className="grid items-center gap-8 pb-12 pt-14 sm:pb-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:pt-20">
          <div>
            <p className="mb-4 inline-flex border border-[#23313d] bg-[#fff7df] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#23313d]">
              Field index / LSQ-JB-2026
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-normal text-[#23313d] drop-shadow-[0_2px_0_rgba(255,255,255,0.45)] min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
              Excavating the Junk Boat
            </h1>
            <p className="mt-6 max-w-xl border-l-4 border-[#ef5d45] bg-white/70 px-4 py-3 text-base font-semibold leading-7 text-[#34495a] shadow-[5px_5px_0_rgba(35,49,61,0.12)] sm:text-lg sm:leading-8">
              A digital field table for Lincoln Square Park: surface evidence,
              repair marks, public rules, and the play memories gathered around
              one bright playground ship.
            </p>
            <div className="mt-5 grid max-w-xl grid-cols-2 border border-[#23313d]/40 bg-[#fff7df]/82 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#23313d] shadow-[4px_4px_0_rgba(35,49,61,0.14)] sm:grid-cols-4">
              {["Red hull", "Green slide", "Yellow court", "Sky frame"].map(
                (label) => (
                  <span
                    key={label}
                    className="border-b border-r border-[#23313d]/18 px-3 py-2 last:border-r-0 sm:border-b-0"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-6xl lg:ml-6">
            <div className="absolute right-2 top-12 z-20 rotate-[3deg] border border-[#23313d] bg-white px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#23313d] shadow-[4px_4px_0_#23313d] sm:right-6 lg:right-8">
              Click to rotate
            </div>
            <button
              type="button"
              onClick={showNextHeroView}
              aria-label="Rotate the Junk Boat render to another view"
              className="group relative aspect-[4/3] w-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ef5d45]/35 lg:scale-[1.18]"
            >
              <div className="absolute inset-x-10 bottom-10 h-24 rounded-full bg-[#23313d]/10 blur-2xl transition group-hover:bg-[#23313d]/16" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_68%,rgba(255,255,255,0.72),rgba(255,255,255,0.22)_42%,transparent_70%)]" />
              <ExhibitImage
                src={heroView.src}
                alt={`${heroView.label} stylized 2D Junk Boat playground render`}
                fallbackTitle="Junk Boat 2D render"
                variant="hero"
                priority
                className="absolute inset-0 h-full w-full overflow-visible transition duration-500 group-hover:scale-[1.035]"
                imageClassName="object-contain object-center p-0 drop-shadow-[0_18px_20px_rgba(35,49,61,0.18)] sm:p-2"
              />
            </button>
            <div className="mx-auto mt-4 flex w-fit flex-wrap items-center justify-center gap-2 lg:mt-8">
              <p className="border border-[#23313d] bg-[#ffeaa3] px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#23313d] shadow-[3px_3px_0_rgba(35,49,61,0.75)]">
                {heroView.label}
              </p>
              <p className="border border-[#23313d]/45 bg-white/72 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#52606b]">
                Reconstruction sketch, not a 3D scene
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExhibitStatement() {
  return (
    <section
      id="statement"
      className="border-b border-[#23313d]/15 bg-[#fff7df] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Exhibit statement"
            title="A playground can hold a public memory."
          />
          <div className="mt-8 max-w-sm rotate-[-1deg] border border-[#23313d] bg-[#bfeadf] p-4 shadow-[6px_6px_0_rgba(35,49,61,0.72)]">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#23313d]">
              Site note
            </p>
            <p className="mt-2 text-sm leading-6 text-[#34495a]">
              The boat is not treated as a treasure removed from the park. It is
              read in place, with its court, signs, routes, and neighborhood
              edges still attached.
            </p>
          </div>
        </div>
        <div className="grid gap-5 border-l-4 border-[#41b66f] bg-white/68 px-5 py-5 text-base leading-8 text-[#34495a] shadow-[7px_7px_0_rgba(35,49,61,0.1)] sm:text-lg">
          <p>
            The Junk Boat at Lincoln Square Park is more than play equipment. It
            is a neighborhood structure shaped by climbing, weather, repair,
            rules, and repeated imagination.
          </p>
          <p>
            This exhibit reads the playground as a small archaeological site.
            The records below come from looking closely during a site visit:
            surface evidence, field views, posted rules, and context that make
            the boat feel ordinary, fragile, and worth noticing.
          </p>
          <div className="grid gap-2 border-t border-[#23313d]/18 pt-4 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#52606b] sm:grid-cols-3">
            <span>Method: close looking</span>
            <span>Material: play + repair</span>
            <span>Frame: public space</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveBoat({
  selectedTrace,
  onSelectTrace,
}: {
  selectedTrace: Trace;
  onSelectTrace: (trace: Trace) => void;
}) {
  const [activeViewId, setActiveViewId] = useState<BoatView["id"]>(hotspotViewId);
  const activeView =
    fieldBoatViews.find((view) => view.id === activeViewId) ??
    fieldBoatViews[0];
  const isHotspotView = activeView.id === hotspotViewId;

  return (
    <section
      id="boat"
      className="border-b border-[#23313d]/15 bg-[#bfeadf] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Interactive Junk Boat"
          title="The boat is the field table."
          description="Select a numbered trace on the field view. Each point opens a record of surface evidence, route, rule, repair, or neighborhood context."
        />

        <div className="mt-5 flex flex-wrap items-start gap-3">
          <FieldVisitLabel />
          <span className="border border-[#23313d] bg-[#f6c744] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#23313d] shadow-[3px_3px_0_rgba(35,49,61,0.7)]">
            Centerpiece
          </span>
          <span className="border border-[#23313d]/45 bg-white/74 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em]">
            Hotspots calibrated to field view
          </span>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.72fr)] lg:items-start">
          <div className="relative border border-[#23313d] bg-[#fffaf0] p-2 shadow-[10px_10px_0_rgba(35,49,61,0.86)] sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-[#23313d]/20 pb-3 text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#23313d]">
              <span>
                LSQ-JB-MAP-01 / {isHotspotView ? "field view" : "view study"}
              </span>
              <span className="text-[#ef5d45]">
                {isHotspotView ? "9 selected traces" : "Hotspots hidden"}
              </span>
            </div>
            <div
              className="mb-3 flex flex-wrap gap-2"
              aria-label="Choose Junk Boat view"
            >
              {fieldBoatViews.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setActiveViewId(view.id)}
                  className={`border px-3 py-2 text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f6c744]/45 ${
                    activeView.id === view.id
                      ? "border-[#23313d] bg-[#ef5d45] text-white shadow-[3px_3px_0_#23313d]"
                      : "border-[#23313d]/45 bg-[#fff6dc] text-[#23313d] hover:bg-[#f6c744]"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
            <ParallaxBoatVisual>
              <ExhibitImage
                src={activeView.src}
                alt={`${activeView.label} 2D Junk Boat playground view`}
                fallbackTitle={`${activeView.label} Junk Boat view`}
                variant="boat"
                className="absolute inset-0 h-full w-full"
                imageClassName="object-cover object-center"
              />
              {isHotspotView ? (
                traces.map((trace, index) => (
                  <Hotspot
                    key={trace.id}
                    trace={trace}
                    index={index}
                    isSelected={selectedTrace.id === trace.id}
                    onSelect={() => onSelectTrace(trace)}
                  />
                ))
              ) : (
                <div className="absolute bottom-4 left-4 right-4 z-20 border border-[#23313d] bg-white/92 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#23313d] shadow-[4px_4px_0_rgba(35,49,61,0.72)]">
                  View study only. Return to Field View to explore trace pins.
                </div>
              )}
            </ParallaxBoatVisual>
            <p className="mt-3 text-xs font-semibold leading-5 text-[#52606b]">
              Site note: the numbered pins are not exact measurements. They are
              working annotations for reading the boat as a public play object.
            </p>
          </div>

          <TracePanel trace={selectedTrace} />
        </div>
      </div>
    </section>
  );
}

function ParallaxBoatVisual({ children }: { children: React.ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const updateOffset = () => {
      animationFrame = 0;

      if (prefersReducedMotion.matches || !frameRef.current) {
        setOffset(0);
        return;
      }

      const rect = frameRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const progress = (viewportCenter - elementCenter) / window.innerHeight;
      const clampedProgress = Math.max(-1, Math.min(1, progress));

      setOffset(Math.round(clampedProgress * 120) / 10);
    };

    const requestUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateOffset);
      }
    };

    updateOffset();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    prefersReducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      prefersReducedMotion.removeEventListener("change", requestUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[16/9] overflow-hidden border border-[#23313d]/30 bg-[#ddf5f0]"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.035)`,
        }}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between border-b border-[#23313d]/18 bg-white/58 px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#23313d]/70">
        <span>court edge</span>
        <span>boat body</span>
        <span>park edge</span>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3 z-10 border border-[#23313d]/45 bg-[#fff7df]/88 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#23313d]">
        Trace map, not survey drawing
      </div>
    </div>
  );
}

function Hotspot({
  trace,
  index,
  isSelected,
  onSelect,
}: {
  trace: Trace;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${trace.hotspot.x}%`, top: `${trace.hotspot.y}%` }}
    >
      <button
        type="button"
        aria-label={`Open trace: ${trace.title}`}
        onClick={onSelect}
        className={`grid size-9 place-items-center border-2 border-[#23313d] text-xs font-black shadow-[4px_4px_0_rgba(35,49,61,0.9)] transition duration-200 hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f6c744] sm:size-11 sm:text-sm ${
          isSelected
            ? "bg-[#ef5d45] text-white"
            : "bg-white text-[#23313d] hover:bg-[#f6c744]"
        }`}
      >
        {index + 1}
      </button>
      <span className="pointer-events-none absolute left-1/2 top-0 z-30 max-w-[9rem] -translate-x-1/2 -translate-y-[calc(100%+0.55rem)] border border-[#23313d] bg-white px-3 py-2 text-center text-[0.68rem] font-black uppercase leading-4 tracking-[0.08em] text-[#23313d] opacity-0 shadow-[4px_4px_0_#23313d] transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 sm:max-w-none sm:whitespace-nowrap sm:text-xs">
        {trace.title}
      </span>
    </div>
  );
}

function TracePanel({ trace }: { trace: Trace }) {
  return (
    <aside className="border border-[#23313d] bg-[#fffaf0] p-4 shadow-[8px_8px_0_#23313d] lg:sticky lg:top-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#23313d]/18 pb-3">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4a93c9]">
          Field record / {trace.id}
        </p>
        <p className="border border-[#23313d]/40 bg-[#f6c744] px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#23313d]">
          {trace.tag}
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-black leading-tight text-[#23313d] sm:text-3xl">
        {trace.title}
      </h3>
      <p className="mt-2 border-b border-[#23313d]/20 pb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#6c6a52]">
        {trace.location}
      </p>
      <ExhibitImage
        src={trace.image}
        alt={`Site visit trace image for ${trace.title}`}
        fallbackTitle={trace.title}
        variant="trace"
        className="relative mt-4 aspect-[4/3] border border-[#23313d]/25 bg-[#fff6dc] shadow-[4px_4px_0_rgba(35,49,61,0.14)]"
        imageClassName="object-cover object-center"
      />
      <p className="mt-2 border-b border-[#23313d]/18 pb-3 text-xs font-semibold leading-5 text-[#52606b]">
        Caption: {trace.caption}
      </p>
      <div className="mt-4 space-y-4 text-sm leading-6 text-[#34495a]">
        <LabelBlock title="Trace label" body={trace.label} />
        <LabelBlock title="Interpretive note" body={trace.interpretation} />
      </div>
    </aside>
  );
}

function DigitalCollection({
  selectedTrace,
  onSelectTrace,
}: {
  selectedTrace: Trace;
  onSelectTrace: (trace: Trace) => void;
}) {
  return (
    <section
      id="collection"
      className="border-b border-[#23313d]/15 bg-[#f5cf58] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeading
            eyebrow="Digital collection"
            title="Nine field records, not nine treasures."
            description="Each trace pairs a site-visit image with a short label. Some records are objects; others are views, surfaces, routes, rules, or context."
          />
          <div className="grid rotate-[1deg] grid-cols-3 border border-[#23313d] bg-[#fffaf0] text-center shadow-[8px_8px_0_#23313d]">
            {collectionStats.map((stat) => (
              <div
                key={stat.label}
                className="border-r border-[#23313d]/20 px-2 py-4 last:border-r-0 sm:px-3 sm:py-5"
              >
                <p className="text-xl font-black text-[#ef5d45] sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[0.62rem] font-bold uppercase leading-4 tracking-[0.1em] text-[#34495a] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <FieldVisitLabel />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {traces.map((trace, index) => {
            const tiltClass =
              index % 3 === 0
                ? "sm:-rotate-[0.8deg]"
                : index % 3 === 1
                  ? "sm:rotate-[0.6deg]"
                  : "sm:translate-y-3";

            return (
              <button
                key={trace.id}
                type="button"
                onClick={() => onSelectTrace(trace)}
                className={`group border bg-[#fffaf0] p-3 text-left shadow-[6px_6px_0_rgba(35,49,61,0.78)] transition duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-[9px_9px_0_rgba(35,49,61,0.86)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#41b6a6] ${tiltClass} ${
                  selectedTrace.id === trace.id
                    ? "translate-y-[-2px] rotate-0 border-[#ef5d45] ring-4 ring-[#ef5d45]/20"
                    : "border-[#23313d]"
                }`}
              >
                <div className="mb-3 flex items-center justify-between gap-2 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#52606b]">
                  <span>LSQ-JB-{String(index + 1).padStart(2, "0")}</span>
                  <span className="border border-[#23313d]/30 bg-[#bfeadf] px-2 py-1 text-[#23313d]">
                    {trace.tag}
                  </span>
                </div>
                <div className="overflow-hidden border border-[#23313d]/20 bg-[#fff6dc]">
                  <ExhibitImage
                    src={trace.image}
                    alt={`Collection trace image for ${trace.title}`}
                    fallbackTitle={trace.title}
                    variant="trace"
                    className="relative aspect-[5/3]"
                    imageClassName="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-[#52606b]">
                  {trace.caption}
                </p>
                <div className="mt-4 flex items-start gap-3 border-t border-[#23313d]/15 pt-3">
                  <span className="grid size-9 shrink-0 place-items-center border border-[#23313d] bg-[#41b66f]/25 text-sm font-black text-[#23313d] transition group-hover:bg-[#f6c744]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black leading-tight text-[#23313d] sm:text-xl">
                      {trace.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#5b6470]">
                      {trace.location}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimeTransformation() {
  return (
    <section
      id="time"
      className="bg-[#eef7ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Time and transformation"
          title="Reference, field view, reconstruction."
          description="These paired images treat time as a working comparison. The sliders do not prove a perfect before-and-after; they show how memory, field photography, and reconstruction sit beside each other."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <TimelineCard
            year="1966"
            title="Earlier Junk Boat"
            realImage="/images/og-boat.jpg"
            renderImage="/images/2-d-render/old-boat.png"
            imageAlt="Earlier Junk Boat playground comparison"
            note="Reference image + reconstruction"
            body="The earlier reference gives the exhibit a baseline for looking at form, color, and what had to be rebuilt through imagination."
          />
          <TimelineCard
            year="2026"
            title="Current field view"
            realImage="/images/junk-boat-render-refs/hero-junk-boat.jpg"
            renderImage="/images/2-d-render/back-left-view.png"
            imageAlt="Current Junk Boat playground comparison"
            note="Site visit image + reconstruction"
            body="The present field view shows an active public site: routes, railings, stairs, slides, and surfaces still gathering traces of play."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  year,
  title,
  realImage,
  renderImage,
  imageAlt,
  note,
  body,
}: {
  year: string;
  title: string;
  realImage: string;
  renderImage: string;
  imageAlt: string;
  note: string;
  body: string;
}) {
  const [renderAmount, setRenderAmount] = useState(6);

  return (
    <article className="border border-[#23313d] bg-[#fffaf0] p-4 shadow-[8px_8px_0_#23313d] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#23313d]">
      <div className="relative aspect-[4/3] overflow-hidden border border-[#23313d]/30 bg-[radial-gradient(circle_at_50%_78%,#ffffff,#fff6dc_52%,#aee5dc_100%)]">
        <ExhibitImage
          src={realImage}
          alt={`${imageAlt}, real-life photograph`}
          fallbackTitle={title}
          variant="archive"
          className="absolute inset-0 h-full w-full"
          imageClassName="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,#ffffff,#fff6dc_52%,#aee5dc_100%)]"
          style={{
            clipPath: `polygon(0 0, ${renderAmount}% 0, ${renderAmount}% 100%, 0 100%)`,
          }}
          aria-hidden={renderAmount === 0}
        >
          <div className="relative h-full w-full">
            <ExhibitImage
              src={renderImage}
              alt={`${imageAlt}, rendered version`}
              fallbackTitle={`${title} render`}
              variant="archive"
              className="absolute inset-0 h-full w-full"
              imageClassName="object-contain object-center p-5 sm:p-7"
            />
          </div>
        </div>
        {renderAmount > 0 ? (
          <div
            className="absolute top-0 z-20 h-full w-1 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(35,49,61,0.18),0_0_14px_rgba(35,49,61,0.2)]"
            style={{ left: `${renderAmount}%` }}
            aria-hidden
          >
            <div className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-[#23313d]/72 text-white shadow-[0_2px_12px_rgba(35,49,61,0.28)]">
              <span className="text-xs font-black leading-none">&lt;&gt;</span>
            </div>
          </div>
        ) : null}
        <div className="absolute left-3 top-3 z-20 border border-[#23313d] bg-white/90 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#23313d] shadow-[3px_3px_0_rgba(35,49,61,0.72)]">
          2D reconstruction
        </div>
        <div className="absolute right-3 top-3 z-20 border border-[#23313d] bg-[#f6c744]/95 px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#23313d] shadow-[3px_3px_0_rgba(35,49,61,0.72)]">
          Field/reference image
        </div>
        <label className="absolute inset-0 z-30 block cursor-ew-resize">
          <span className="sr-only">
            Compare real image and 2D render for {title}
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={renderAmount}
            onChange={(event) => setRenderAmount(Number(event.target.value))}
            aria-label={`Compare real photograph and rendered version for ${title}`}
            className="h-full w-full cursor-ew-resize opacity-0"
          />
        </label>
      </div>
      <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#ef5d45]">
        {year}
      </p>
      <h3 className="mt-1 text-2xl font-black text-[#23313d]">{title}</h3>
      <p className="mt-2 w-fit border border-[#23313d]/35 bg-[#bfeadf] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#23313d]">
        {note}
      </p>
      <p className="mt-3 text-base leading-7 text-[#34495a]">{body}</p>
    </article>
  );
}

function FieldVisitLabel() {
  return (
    <div className="inline-block border border-[#23313d] bg-white/88 px-3 py-2 shadow-[3px_3px_0_rgba(35,49,61,0.65)]">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#ef5d45]">
        Field visit
      </p>
      <p className="mt-1 text-xs font-semibold leading-5 text-[#34495a]">
        Lincoln Square Park, Oakland Chinatown, May 24, 2026
      </p>
      <p className="mt-0.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#52606b]">
        Materials: iPhone 15 Pro
      </p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ef5d45]">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#23313d] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#34495a] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function LabelBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-xs font-black uppercase tracking-[0.14em] text-[#ef5d45]">
        {title}
      </h4>
      <p className="mt-1">{body}</p>
    </div>
  );
}

function ExhibitImage({
  src,
  fallbackSrc,
  alt,
  fallbackTitle,
  className,
  imageClassName,
  priority = false,
  variant = "trace",
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  variant?: "archive" | "trace" | "boat" | "hero";
}) {
  const [failedSrcs, setFailedSrcs] = useState<string[]>([]);
  const currentSrc =
    fallbackSrc && failedSrcs.includes(src) ? fallbackSrc : src;
  const hasError = failedSrcs.includes(currentSrc);

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      role={hasError ? "img" : undefined}
      aria-label={hasError ? alt : undefined}
    >
      {!hasError ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes={
            variant === "hero"
              ? "100vw"
              : "(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
          }
          className={imageClassName ?? "object-cover object-center"}
          onError={() => {
            setFailedSrcs((previousFailedSrcs) =>
              previousFailedSrcs.includes(currentSrc)
                ? previousFailedSrcs
                : [...previousFailedSrcs, currentSrc],
            );
          }}
        />
      ) : (
        <ImageFallback title={fallbackTitle} variant={variant} />
      )}
    </div>
  );
}

function ImageFallback({
  title,
}: {
  title: string;
  variant: "archive" | "trace" | "boat" | "hero";
}) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#fff6dc,#ffffff_55%,#aee5dc)] p-5">
      <div className="w-full border border-[#23313d] bg-white px-4 py-5 text-center shadow-[5px_5px_0_#23313d]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5d45]">
          Image file could not load
        </p>
        <p className="mt-2 text-lg font-black leading-tight text-[#23313d]">
          {title}
        </p>
      </div>
    </div>
  );
}
