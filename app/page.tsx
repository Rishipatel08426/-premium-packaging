export default function Home() {
  return (
    <>
      <section className="border-b border-gold-200/70 bg-gradient-to-b from-beige-50 to-sage-50/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 md:flex-row md:items-center md:pb-20 md:pt-16">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700/70">
              Premium areca leaf packaging
            </p>
            <h1 className="font-heading text-4xl tracking-tight text-olive-700 sm:text-5xl">
              Natural forms for thoughtful brands.
            </h1>
            <p className="text-sm leading-relaxed text-olive-700/85">
              Areca Studio crafts boxes, plates, bowls and bottles from
              naturally fallen areca leavesfor tasting rooms, gift hampers and
              conscious hospitality experiences.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <a
                href="/products"
                className="inline-flex items-center rounded-full bg-olive-700 px-5 py-2 font-semibold uppercase tracking-[0.18em] text-beige-50 transition-colors hover:bg-olive-500"
              >
                View collection
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-olive-700/30 px-4 py-2 font-medium uppercase tracking-[0.18em] text-olive-700/80 transition-colors hover:border-olive-700 hover:text-olive-700"
              >
                Request samples
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-gold-200/70 bg-beige-50/80 p-6 shadow-sm">
              <div className="mb-4 h-40 rounded-2xl bg-sage-50" />
              <p className="text-xs leading-relaxed text-olive-700/80">
                Pressed from single-origin areca leaves, each piece carries a
                unique grain patternsubtle, warm and unmistakably natural.
              </p>
              <div className="mt-4 flex gap-6 text-[11px] text-olive-700/70">
                <div>
                  <div className="font-semibold text-olive-700">Home-compostable</div>
                  <p>Breaks down within months under the right conditions.</p>
                </div>
                <div>
                  <div className="font-semibold text-olive-700">Food-safe</div>
                  <p>No synthetic liners or added coatings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg text-olive-700">Areca, not paper.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              We work with naturally shed areca palm leavesa by-product of
              existing farmsavoiding tree felling and energy-intensive pulping.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg text-olive-700">Refined silhouettes.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              Thoughtful forms for tasting menus, amenity kits and gift boxes
              that feel as considered as the products they hold.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg text-olive-700">Supply-ready.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              Built for hospitality, D2C and boutique brands with reliable
              volumes, quality checks and custom development on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
