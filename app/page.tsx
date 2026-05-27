"use client";

import Image from "next/image";
import { useState } from "react";
import { traces, type Trace } from "@/src/data/artifacts";

const collectionStats = [
  { value: "09", label: "site visit traces" },
  { value: "1966", label: "origin story year" },
  { value: "2026", label: "fieldwork year" },
];

export default function Home() {
  const [selectedTrace, setSelectedTrace] = useState<Trace>(traces[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff6dc] text-[#23313d]">
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
    <section className="relative min-h-[86svh] overflow-hidden border-b border-[#23313d]/15">
      <ExhibitImage
        src="/images/hero-junk-boat.jpg"
        alt="Junk Boat playground at Lincoln Square Park"
        fallbackTitle="Junk Boat playground"
        variant="hero"
        priority
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,246,220,0.95),rgba(255,246,220,0.72)_45%,rgba(255,246,220,0.18))]" />
      <div className="relative z-10 mx-auto flex min-h-[86svh] w-full max-w-6xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
        <nav
          aria-label="Exhibit sections"
          className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#23313d]"
        >
          <a
            href="#statement"
            className="border-b-2 border-[#f6c744] bg-white/55 px-2 py-1 transition hover:bg-white"
          >
            Statement
          </a>
          <a
            href="#boat"
            className="border-b-2 border-[#41b6a6] bg-white/55 px-2 py-1 transition hover:bg-white"
          >
            Boat
          </a>
          <a
            href="#collection"
            className="border-b-2 border-[#ef5d45] bg-white/55 px-2 py-1 transition hover:bg-white"
          >
            Archive
          </a>
          <a
            href="#reflection"
            className="border-b-2 border-[#4a76c9] bg-white/55 px-2 py-1 transition hover:bg-white"
          >
            Reflection
          </a>
        </nav>

        <div className="max-w-3xl pb-10 pt-24 sm:pb-16">
          <p className="mb-4 inline-flex border border-[#23313d] bg-[#f6c744] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[5px_5px_0_#23313d]">
            Lincoln Square Park / Oakland Chinatown
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-[#23313d] sm:text-7xl lg:text-8xl">
            Excavating the Junk Boat
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#34495a] sm:text-xl">
            A digital museum exhibit about a playground ship, the traces it
            holds, and the neighborhood stories that gather around it.
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
      className="border-b border-[#23313d]/15 bg-[#fff6dc] px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Exhibit statement"
          title="A playground can be read through traces."
        />
        <div className="grid gap-5 text-lg leading-8 text-[#34495a]">
          <p>
            The Junk Boat at Lincoln Square Park is both public play equipment
            and a cultural object. Its surfaces invite climbing and pretending,
            but they also carry evidence of use, repair, memory, and changing
            ideas about community space.
          </p>
          <p>
            This MVP treats the boat as a small archaeological site. The records
            below are traces selected from a site visit: details, views, signs,
            surfaces, and bits of context that help the playground speak.
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
      className="border-b border-[#23313d]/15 bg-[#aee5dc] px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Interactive Junk Boat"
          title="Nine traces across one imagined vessel."
          description="A field map of surface marks, routes, repairs, rules, and neighborhood context from the playground."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]">
          <div className="relative border border-[#23313d] bg-[#f8f0cf] p-3 shadow-[8px_8px_0_#23313d]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ddf5f0] sm:aspect-[16/10]">
              <ExhibitImage
                src="/images/boat-render.jpg"
                alt="Junk Boat playground view with numbered trace hotspots"
                fallbackTitle="Junk Boat field view"
                variant="boat"
                className="absolute inset-0"
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
            </div>
          </div>

          <TracePanel trace={selectedTrace} />
        </div>
      </div>
    </section>
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
        className={`grid size-11 place-items-center border-2 border-[#23313d] text-sm font-black shadow-[4px_4px_0_rgba(35,49,61,0.9)] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f6c744] ${
          isSelected
            ? "bg-[#ef5d45] text-white"
            : "bg-white text-[#23313d] hover:bg-[#f6c744]"
        }`}
      >
        {index + 1}
      </button>
      <span className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[calc(100%+0.55rem)] border border-[#23313d] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#23313d] opacity-0 shadow-[4px_4px_0_#23313d] transition group-hover:opacity-100 group-focus-within:opacity-100">
        {trace.title}
      </span>
    </div>
  );
}

function TracePanel({ trace }: { trace: Trace }) {
  return (
    <aside className="border border-[#23313d] bg-white p-4 shadow-[8px_8px_0_#23313d]">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4a76c9]">
        Selected trace / {trace.id}
      </p>
      <h3 className="mt-2 text-3xl font-black leading-tight text-[#23313d]">
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
        className="relative mt-4 aspect-[4/3] border border-[#23313d]/25 bg-[#fff6dc]"
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
      className="border-b border-[#23313d]/15 bg-[#f6c744] px-5 py-16 sm:px-8 lg:px-10"
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
                className="border-r border-[#23313d]/20 px-3 py-4 last:border-r-0"
              >
                <p className="text-2xl font-black text-[#ef5d45]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#34495a]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {traces.map((trace, index) => (
            <button
              key={trace.id}
              type="button"
              onClick={() => onSelectTrace(trace)}
              className={`group border border-[#23313d] bg-white p-3 text-left shadow-[6px_6px_0_rgba(35,49,61,0.9)] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#41b6a6] ${
                selectedTrace.id === trace.id ? "translate-y-[-2px]" : ""
              }`}
            >
              <ExhibitImage
                src={trace.image}
                alt={`Collection trace image for ${trace.title}`}
                fallbackTitle={trace.title}
                variant="trace"
                className="relative aspect-[5/3] border border-[#23313d]/20 bg-[#fff6dc]"
              />
              <div className="mt-4 flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center border border-[#23313d] bg-[#aee5dc] text-sm font-black text-[#23313d]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black leading-tight text-[#23313d]">
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
    <section className="border-b border-[#23313d]/15 bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Time and transformation"
          title="1966 toward 2026."
          description="A holding space for archive work that still feels intentional while historical images are pending."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <TimelineCard
            year="1966"
            title="Archival image pending"
            body="This card will hold a historical view of the Junk Boat when an archive image is selected. For now, it marks the playground's origin story as an open research question."
          />
          <TimelineCard
            year="2026"
            title="Field image pending"
            body="The present-day record can be updated with a dedicated comparison image later. The current trace archive already begins that 2026 fieldwork."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  year,
  title,
  body,
}: {
  year: string;
  title: string;
  body: string;
}) {
  return (
    <article className="border border-[#23313d] bg-[#fff6dc] p-4 shadow-[8px_8px_0_#23313d]">
      <div className="grid aspect-[4/3] place-items-center border border-dashed border-[#23313d]/45 bg-white p-6 text-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#4a76c9]">
            Image pending
          </p>
          <p className="mt-2 text-5xl font-black text-[#ef5d45]">{year}</p>
        </div>
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
      className="border-b border-[#23313d]/15 bg-[#ef5d45] px-5 py-16 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ffeaa3]">
            Personal archaeology
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Looking closely turns memory into evidence.
          </h2>
        </div>
        <div className="grid gap-5 text-lg leading-8 text-white/92">
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
    <section className="bg-[#23313d] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#aee5dc]">
          Closing reflection
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
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
      <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#23313d] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#34495a]">
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
  alt,
  fallbackTitle,
  className,
  priority = false,
  variant = "trace",
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
  variant?: "archive" | "trace" | "boat" | "hero";
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const hasError = failedSrc === src;

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      role={hasError ? "img" : undefined}
      aria-label={hasError ? alt : undefined}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes={
            variant === "hero"
              ? "100vw"
              : "(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
          }
          className={variant === "boat" ? "object-contain" : "object-cover"}
          onError={() => setFailedSrc(src)}
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
