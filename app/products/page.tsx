export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-heading text-3xl tracking-tight text-olive-700 md:text-4xl">
            Areca leaf collection
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-olive-700/80">
            Plates, bowls, boxes and bottles crafted from naturally fallen areca
            leaves. Food-safe, compostable and designed for elevated dining and
            gifting experiences.
          </p>
        </div>
      </section>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <div className="mb-4 h-40 rounded-xl bg-sage-50" />
          <h2 className="font-heading text-lg text-olive-700">Plates</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Wide range of dinner, snack and tasting plates with a smooth,
            naturally variegated grain.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <div className="mb-4 h-40 rounded-xl bg-sage-50" />
          <h2 className="font-heading text-lg text-olive-700">Bowls</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Deep and shallow bowls for tasting menus, artisanal snacks and
            thoughtful plating.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <div className="mb-4 h-40 rounded-xl bg-sage-50" />
          <h2 className="font-heading text-lg text-olive-700">Boxes</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Rigid, gift-ready packaging for confectionery, hampers and premium
            product drops.
          </p>
        </div>
        <div className="rounded-2xl border border-sage-100 bg-beige-50/60 p-5 shadow-sm">
          <div className="mb-4 h-40 rounded-xl bg-sage-50" />
          <h2 className="font-heading text-lg text-olive-700">Bottles & carafes</h2>
          <p className="mt-2 text-xs leading-relaxed text-olive-700/80">
            Sculpted areca forms for beverages, oils and pour-over experiences.
          </p>
        </div>
      </section>
      <section className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-sage-100 bg-beige-50/70 px-6 py-6 text-sm text-olive-700/85 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-lg text-olive-700">Discuss formats, volumes and finishing</h2>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-olive-700/80">
            Share your product details and we will recommend the most suitable areca forms, sizes and
            finishing options for your brand.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-beige-50 transition-colors hover:bg-olive-500"
        >
          Contact our team
        </a>
      </section>
    </main>
  );
}
