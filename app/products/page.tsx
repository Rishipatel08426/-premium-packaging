"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductsPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-heading text-3xl tracking-tight text-olive-700 md:text-4xl">
            Areca leaf collection
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-olive-700/80">
            Plates, bowls, boxes and bottles crafted from naturally fallen areca
            leaf sheaths. Compostable under suitable conditions and designed for
            elevated dining and gifting experiences, with optional tested
            food-grade barrier lining for sensitive markets.
          </p>
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <div className="mb-4 h-40 overflow-hidden rounded-xl bg-sage-50 flex gap-1">
            <button
              type="button"
              className="relative h-full w-1/2 overflow-hidden"
              onClick={() => setLightboxSrc("/main.jpeg")}
            >
              <Image
                src="/main.jpeg"
                alt="Areca leaf food packaging overview"
                width={400}
                height={200}
                className="h-full w-full object-cover"
              />
            </button>
            <button
              type="button"
              className="relative h-full w-1/2 overflow-hidden"
              onClick={() => setLightboxSrc("/box.jpeg")}
            >
              <Image
                src="/box.jpeg"
                alt="Areca leaf food boxes"
                width={400}
                height={200}
                className="h-full w-full object-cover"
              />
            </button>
          </div>
          <h2 className="font-heading text-lg text-olive-700">Food boxes</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Rigid, gift-ready boxes and takeaway formats for confectionery,
            hampers and premium food drops.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <button
            type="button"
            className="mb-4 h-40 overflow-hidden rounded-xl bg-sage-50 w-full"
            onClick={() => setLightboxSrc("/bottle.jpeg")}
          >
            <Image
              src="/bottle.jpeg"
              alt="Areca leaf water bottles and carafes"
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </button>
          <h2 className="font-heading text-lg text-olive-700">Water bottles & carafes</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Sculpted areca forms for beverages, infused waters, oils and
            pour-over experiences.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <button
            type="button"
            className="mb-4 h-40 overflow-hidden rounded-xl bg-sage-50 w-full"
            onClick={() => setLightboxSrc("/plates.jpeg")}
          >
            <Image
              src="/plates.jpeg"
              alt="Areca leaf plates"
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </button>
          <h2 className="font-heading text-lg text-olive-700">Plates</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Wide range of dinner, snack and tasting plates with a smooth,
            naturally variegated grain.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <button
            type="button"
            className="mb-4 h-40 overflow-hidden rounded-xl bg-sage-50 w-full"
            onClick={() => setLightboxSrc("/bowls.jpeg")}
          >
            <Image
              src="/bowls.jpeg"
              alt="Areca leaf bowls"
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </button>
          <h2 className="font-heading text-lg text-olive-700">Bowls</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Deep and shallow bowls for tasting menus, artisanal snacks and
            thoughtful plating.
          </p>
        </div>
      </section>
      <section className="mt-12 rounded-2xl border border-sage-100 bg-beige-50/80 px-6 py-6 text-sm text-olive-700/85">
        <h2 className="font-heading text-lg text-olive-700">Custom branding & name printing</h2>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-olive-700/80">
          Make your areca packaging truly yours. We offer customised name and logo printing on selected
          plates, bowls, boxes and bottles, ideal for events, hotels and gifting. Share your artwork and
          quantities and we will confirm available printing methods, placement options and lead times.
        </p>
      </section>
      <section className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sage-100 bg-beige-50/70 px-6 py-6 text-sm text-olive-700/85 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-lg text-olive-700">Discuss formats, volumes and finishing</h2>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-olive-700/80">
            Share your product details and we will recommend the most suitable areca forms, sizes and
            finishing options for your brand. We also offer customised name and logo printing on
            selected products to match your event or brand identity.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-beige-50 transition-colors hover:bg-olive-500"
        >
          Contact our team
        </a>
      </section>
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-beige-50/90 p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Areca leaf product"
              width={1000}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
