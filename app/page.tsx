"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { traces, type Trace } from "@/src/data/artifacts";

const collectionStats = [
  { value: "09", label: "site visit traces" },
  { value: "1966", label: "origin story year" },
  { value: "2026", label: "fieldwork year" },
];

export default function Home() {
  const [selectedTrace, setSelectedTrace] = useState<Trace>(traces[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fff6dc_0%,#fffdf2_38%,#e8fbf6_100%)] text-[#23313d]">
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
      <PersonalArchaeology />
      <ClosingReflection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90svh] overflow-hidden border-b border-[#23313d]/15">
      <ExhibitImage
        src="/images/hero-junk-boat.jpg"
        alt="Junk Boat playground at Lincoln Square Park"
        fallbackTitle="Junk Boat playground"
        variant="hero"
        priority
        className="absolute inset-0 h-full w-full"
        imageClassName="object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,220,0.97),rgba(255,246,220,0.78)_46%,rgba(255,246,220,0.2)),linear-gradient(0deg,rgba(35,49,61,0.12),rgba(35,49,61,0)_42%)]" />
      <div className="relative z-10 mx-auto flex min-h-[90svh] w-full max-w-6xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
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
            href="#reflection"
            className="border-b-2 border-[#4a76c9] bg-white/75 px-2.5 py-1.5 shadow-[3px_3px_0_rgba(35,49,61,0.12)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4a76c9]/35"
          >
            Reflection
          </a>
        </nav>

        <div className="max-w-3xl pb-12 pt-24 sm:pb-20">
          <p className="mb-4 inline-flex border border-[#23313d] bg-[#f6c744] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#23313d]">
            Lincoln Square Park / Oakland Chinatown
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-normal text-[#23313d] drop-shadow-[0_2px_0_rgba(255,255,255,0.45)] min-[380px]:text-5xl sm:text-7xl lg:text-8xl">
            Excavating the Junk Boat
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-[#ef5d45] bg-white/62 px-4 py-3 text-base font-semibold leading-7 text-[#34495a] shadow-[5px_5px_0_rgba(35,49,61,0.12)] sm:text-xl sm:leading-8">
            A field-based digital exhibit reading a playground ship through
            wear, repair, rules, memory, and the small clues left by public
            play.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExhibitStatement() {
  return (
    <section
      id="statement"
      className="border-b border-[#23313d]/15 bg-[#fff6dc] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Exhibit statement"
          title="A playground can hold a public memory."
        />
        <div className="grid gap-5 border-l-4 border-[#41b6a6] bg-white/55 px-5 py-5 text-base leading-8 text-[#34495a] shadow-[7px_7px_0_rgba(35,49,61,0.1)] sm:text-lg">
          <p>
            The Junk Boat at Lincoln Square Park is more than play equipment.
            It is a neighborhood structure with surfaces shaped by climbing,
            weather, repair, rules, and repeated imagination.
          </p>
          <p>
            This exhibit treats the playground as a small archaeological site.
            The traces below come from looking closely during a site visit:
            details, views, signs, and surrounding context that make the boat
            feel both ordinary and worth preserving.
          </p>
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
  return (
    <section
      id="boat"
      className="border-b border-[#23313d]/15 bg-[#b8ece5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Interactive Junk Boat"
          title="Nine traces across one imagined vessel."
          description="A field map of surface marks, routes, repairs, rules, and neighborhood context from the playground."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] lg:items-start">
          <div className="relative border border-[#23313d] bg-white p-2 shadow-[10px_10px_0_rgba(35,49,61,0.86)] sm:p-4">
            <div className="mb-2 flex items-center justify-between gap-3 border-b border-[#23313d]/20 pb-2 text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#23313d]">
              <span>Field map</span>
              <span className="text-[#ef5d45]">9 selected traces</span>
            </div>
            <ParallaxBoatVisual>
              <ExhibitImage
                src="/images/junk-boat-stylized-render.png"
                fallbackSrc="/images/boat-render.jpg"
                alt="Junk Boat playground view with numbered trace hotspots"
                fallbackTitle="Junk Boat field view"
                variant="boat"
                className="absolute inset-0 h-full w-full"
                imageClassName="object-cover object-center"
              />
              {traces.map((trace, index) => (
                <Hotspot
                  key={trace.id}
                  trace={trace}
                  index={index}
                  isSelected={selectedTrace.id === trace.id}
                  onSelect={() => onSelectTrace(trace)}
                />
              ))}
            </ParallaxBoatVisual>
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
    <aside className="border border-[#23313d] bg-[#fffef8] p-4 shadow-[8px_8px_0_#23313d] lg:sticky lg:top-6">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4a76c9]">
        Selected trace / {trace.id}
      </p>
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
      className="border-b border-[#23313d]/15 bg-[#f7d45b] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Digital collection"
            title="Archive of nine traces."
            description="Each record pairs a site-visit image with an editable museum-style note. These are not all collected objects; some are views, surfaces, signs, and context."
          />
          <div className="grid grid-cols-3 border border-[#23313d] bg-white text-center shadow-[8px_8px_0_#23313d]">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {traces.map((trace, index) => (
            <button
              key={trace.id}
              type="button"
              onClick={() => onSelectTrace(trace)}
              className={`group border bg-white p-3 text-left shadow-[6px_6px_0_rgba(35,49,61,0.78)] transition duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_rgba(35,49,61,0.86)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#41b6a6] ${
                selectedTrace.id === trace.id
                  ? "translate-y-[-2px] border-[#ef5d45] ring-4 ring-[#ef5d45]/20"
                  : "border-[#23313d]"
              }`}
            >
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
              <div className="mt-4 flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center border border-[#23313d] bg-[#aee5dc] text-sm font-black text-[#23313d] transition group-hover:bg-[#f6c744]">
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
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeTransformation() {
  return (
    <section className="border-b border-[#23313d]/15 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Time and transformation"
          title="1966 toward 2026."
          description="A comparison between an earlier reference image and a present-day field view, showing the boat as both a remembered object and a living public site."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <TimelineCard
            year="1966"
            title="Earlier boat reference"
            image="/images/og-boat.jpg"
            imageAlt="Earlier reference image of the Junk Boat playground"
            body="This view holds the boat close to its origin story. It gives the exhibit a point of comparison for looking at what has lasted, shifted, and been repaired."
          />
          <TimelineCard
            year="2026"
            title="Present-day field view"
            image="/images/hero-junk-boat.jpg"
            imageAlt="Present-day field image of the Junk Boat playground"
            body="The current field view shows the Junk Boat as an active playground site. Its surfaces, edges, and surroundings continue to gather evidence of public play."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  year,
  title,
  image,
  imageAlt,
  body,
}: {
  year: string;
  title: string;
  image: string;
  imageAlt: string;
  body: string;
}) {
  return (
    <article className="border border-[#23313d] bg-[#fff6dc] p-4 shadow-[8px_8px_0_#23313d] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#23313d]">
      <div className="relative aspect-[4/3] overflow-hidden border border-[#23313d]/30 bg-white">
        <ExhibitImage
          src={image}
          alt={imageAlt}
          fallbackTitle={title}
          variant="archive"
          className="absolute inset-0 h-full w-full"
          imageClassName="object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#ef5d45]">
        {year}
      </p>
      <h3 className="mt-1 text-2xl font-black text-[#23313d]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#34495a]">{body}</p>
    </article>
  );
}

function PersonalArchaeology() {
  return (
    <section
      id="reflection"
      className="border-b border-[#23313d]/15 bg-[#ef5d45] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffeaa3]">
            Personal archaeology
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Looking closely turns memory into evidence.
          </h2>
        </div>
        <div className="grid gap-5 border-l-4 border-[#ffeaa3] bg-white/10 px-5 py-5 text-base leading-8 text-white/92 sm:text-lg">
          <p>
            This project begins with a simple move: treating a familiar play
            structure as something worth examining slowly. The Junk Boat becomes
            a way to notice how public spaces hold personal memory and shared
            history at the same time.
          </p>
          <p>
            The exhibit voice is intentionally provisional. It leaves room for
            classmates, family stories, park users, and archival research to add
            sharper details later.
          </p>
        </div>
      </div>
    </section>
  );
}

function ClosingReflection() {
  return (
    <section className="bg-[#23313d] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#aee5dc]">
          Closing reflection
        </p>
        <h2 className="mt-3 text-3xl font-black leading-tight sm:text-6xl">
          So what does a playground preserve?
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/86">
          It preserves more than design. It preserves the feeling of a park as a
          neighborhood room, the labor of keeping public play possible, and the
          imagination that lets a wooden structure become a boat. Excavating the
          Junk Boat means taking ordinary traces seriously.
        </p>
      </div>
    </section>
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
