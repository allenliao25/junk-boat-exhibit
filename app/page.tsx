"use client";

import Image from "next/image";
import { useState } from "react";
import { artifacts, type Artifact } from "@/src/data/artifacts";

const collectionStats = [
  { value: "09", label: "catalogued traces" },
  { value: "1966", label: "park dedication era" },
  { value: "2026", label: "field observation year" },
];

export default function Home() {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact>(
    artifacts[0],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff6dc] text-[#23313d]">
      <Hero />
      <ExhibitStatement />
      <InteractiveBoat
        selectedArtifact={selectedArtifact}
        onSelectArtifact={setSelectedArtifact}
      />
      <DigitalCollection
        selectedArtifact={selectedArtifact}
        onSelectArtifact={setSelectedArtifact}
      />
      <ThenNow />
      <PersonalArchaeology />
      <ClosingReflection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden border-b border-[#23313d]/15">
      <ExhibitImage
        src="/images/hero-junk-boat.png"
        alt="Illustrated view of the Junk Boat playground"
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
          title="A playground can be read like an artifact."
        />
        <div className="grid gap-5 text-lg leading-8 text-[#34495a]">
          <p>
            The Junk Boat at Lincoln Square Park is both public play equipment
            and a cultural object. Its surfaces invite climbing and pretending,
            but they also carry evidence of use, repair, memory, and changing
            ideas about community space.
          </p>
          <p>
            This MVP treats the boat as a small archaeological site. Each trace
            is provisional, readable, and open to revision as the project grows.
          </p>
        </div>
      </div>
    </section>
  );
}

function InteractiveBoat({
  selectedArtifact,
  onSelectArtifact,
}: {
  selectedArtifact: Artifact;
  onSelectArtifact: (artifact: Artifact) => void;
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
          description="A field map of surface marks, routes, repairs, and objects from the playground."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)]">
          <div className="relative border border-[#23313d] bg-[#f8f0cf] p-3 shadow-[8px_8px_0_#23313d]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ddf5f0] sm:aspect-[16/10]">
              <ExhibitImage
                src="/images/boat-render.png"
                alt="Rendered Junk Boat playground with numbered artifact hotspots"
                fallbackTitle="Junk Boat render"
                variant="boat"
                className="absolute inset-0"
              />
              {artifacts.map((artifact, index) => (
                <Hotspot
                  key={artifact.id}
                  artifact={artifact}
                  index={index}
                  isSelected={selectedArtifact.id === artifact.id}
                  onSelect={() => onSelectArtifact(artifact)}
                />
              ))}
            </div>
          </div>

          <ArtifactPanel artifact={selectedArtifact} />
        </div>
      </div>
    </section>
  );
}

function Hotspot({
  artifact,
  index,
  isSelected,
  onSelect,
}: {
  artifact: Artifact;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${artifact.hotspot.x}%`, top: `${artifact.hotspot.y}%` }}
    >
      <button
        type="button"
        aria-label={`Open artifact: ${artifact.title}`}
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
        {artifact.title}
      </span>
    </div>
  );
}

function ArtifactPanel({ artifact }: { artifact: Artifact }) {
  return (
    <aside className="border border-[#23313d] bg-white p-4 shadow-[8px_8px_0_#23313d]">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4a76c9]">
        Selected trace / {artifact.id}
      </p>
      <h3 className="mt-2 text-3xl font-black leading-tight text-[#23313d]">
        {artifact.title}
      </h3>
      <p className="mt-2 border-b border-[#23313d]/20 pb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#6c6a52]">
        {artifact.location}
      </p>
      <ExhibitImage
        src={artifact.image}
        alt={`Artifact image placeholder for ${artifact.title}`}
        fallbackTitle={artifact.title}
        variant="artifact"
        className="relative mt-4 aspect-[4/3] border border-[#23313d]/25 bg-[#fff6dc]"
      />
      <div className="mt-4 space-y-4 text-sm leading-6 text-[#34495a]">
        <LabelBlock title="Museum label" body={artifact.label} />
        <LabelBlock title="Interpretive note" body={artifact.interpretation} />
      </div>
    </aside>
  );
}

function DigitalCollection({
  selectedArtifact,
  onSelectArtifact,
}: {
  selectedArtifact: Artifact;
  onSelectArtifact: (artifact: Artifact) => void;
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
            description="Each record is a placeholder catalog entry that Allen can revise as research images and field notes become available."
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
          {artifacts.map((artifact, index) => (
            <button
              key={artifact.id}
              type="button"
              onClick={() => onSelectArtifact(artifact)}
              className={`group border border-[#23313d] bg-white p-3 text-left shadow-[6px_6px_0_rgba(35,49,61,0.9)] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#41b6a6] ${
                selectedArtifact.id === artifact.id
                  ? "translate-y-[-2px]"
                  : ""
              }`}
            >
              <ExhibitImage
                src={artifact.image}
                alt={`Collection image placeholder for ${artifact.title}`}
                fallbackTitle={artifact.title}
                variant="artifact"
                className="relative aspect-[5/3] border border-[#23313d]/20 bg-[#fff6dc]"
              />
              <div className="mt-4 flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center border border-[#23313d] bg-[#aee5dc] text-sm font-black text-[#23313d]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black leading-tight text-[#23313d]">
                    {artifact.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#5b6470]">
                    {artifact.location}
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

function ThenNow() {
  return (
    <section className="border-b border-[#23313d]/15 bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Then and now"
          title="1966 to 2026."
          description="A first comparison frame for the playground's public life across sixty years."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <TimelineImage
            year="1966"
            title="Dedication-era memory"
            image="/images/archive/junk-boat-1966-01.jpg"
            body="A placeholder archival view for the moment when the playground entered the neighborhood's civic landscape."
          />
          <TimelineImage
            year="2026"
            title="Contemporary field view"
            image="/images/archive/junk-boat-2026-01.jpg"
            body="A placeholder present-day view for studying surface change, ongoing use, and what still feels familiar."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineImage({
  year,
  title,
  image,
  body,
}: {
  year: string;
  title: string;
  image: string;
  body: string;
}) {
  return (
    <article className="border border-[#23313d] bg-[#fff6dc] p-4 shadow-[8px_8px_0_#23313d]">
      <ExhibitImage
        src={image}
        alt={`${year} archive placeholder for the Junk Boat playground`}
        fallbackTitle={year}
        variant="archive"
        className="relative aspect-[4/3] border border-[#23313d]/25 bg-white"
      />
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
            a way to notice how public objects hold personal memory and shared
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
          Junk Boat means taking those ordinary traces seriously.
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
  variant = "artifact",
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
  variant?: "archive" | "artifact" | "boat" | "hero";
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
          className={`object-cover ${
            variant === "boat" ? "object-contain p-6" : ""
          }`}
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
  variant,
}: {
  title: string;
  variant: "archive" | "artifact" | "boat" | "hero";
}) {
  if (variant === "boat") {
    return (
      <div className="absolute inset-0 bg-[#ddf5f0]">
        <div className="absolute inset-x-[12%] bottom-[22%] h-[28%] skew-x-[-10deg] border-2 border-[#23313d] bg-[#d83f31] shadow-[10px_10px_0_rgba(35,49,61,0.22)]" />
        <div className="absolute left-[26%] top-[24%] h-[28%] w-[34%] border-2 border-[#23313d] bg-[#f6c744]" />
        <div className="absolute left-[44%] top-[17%] h-[42%] w-[8%] border-2 border-[#23313d] bg-white" />
        <div className="absolute left-[53%] top-[23%] h-[29%] w-[22%] border-2 border-[#23313d] bg-[#4a76c9]" />
        <div className="absolute inset-x-[18%] bottom-[15%] h-2 bg-[#23313d]/35" />
        <span className="absolute left-4 top-4 border border-[#23313d] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#23313d] shadow-[4px_4px_0_#23313d]">
          {title}
        </span>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff6dc_0%,#aee5dc_42%,#f6c744_42%,#f6c744_64%,#ef5d45_64%,#ef5d45_100%)]">
        <div className="absolute bottom-[18%] right-[3%] h-[24%] w-[31%] -skew-x-12 border-2 border-[#23313d] bg-[#d83f31]/72" />
        <div className="absolute bottom-[38%] right-[17%] h-[22%] w-[17%] border-2 border-[#23313d] bg-[#4a76c9]/78" />
        <div className="absolute bottom-[59%] right-[26%] h-[26%] w-[5%] border-2 border-[#23313d] bg-white/86" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#fff6dc,#ffffff_55%,#aee5dc)] p-5">
      <div className="w-full border border-[#23313d] bg-white px-4 py-5 text-center shadow-[5px_5px_0_#23313d]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ef5d45]">
          Image placeholder
        </p>
        <p className="mt-2 text-lg font-black leading-tight text-[#23313d]">
          {title}
        </p>
      </div>
    </div>
  );
}
