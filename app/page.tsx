import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="border-b border-gold-200/70 bg-gradient-to-b from-beige-50 to-sage-50/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 md:flex-row md:items-center md:pb-20 md:pt-16">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-700/70">
              Premium areca leaf food packaging
            </p>
            <h1 className="font-heading text-4xl tracking-tight text-olive-700 sm:text-5xl">
              Compostable plates, bowls and boxes from areca leaves.
            </h1>
            <p className="text-sm leading-relaxed text-olive-700/85">
              We turn naturally fallen areca leaf sheaths into single-use food
              packaging  plates, bowls, trays and boxes that replace
              conventional plastic and coated paper. Each piece is made from a
              farm by-product and designed to break down under suitable
              composting conditions.
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
              <div className="mb-4 overflow-hidden rounded-2xl bg-sage-50">
                <Image
                  src="/main.jpeg"
                  alt="Areca leaf food packaging: plates, bowls and boxes"
                  width={640}
                  height={320}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="text-xs leading-relaxed text-olive-700/80">
                Pressed from single-origin areca leaves, each piece carries a
                unique grain patternsubtle, warm and unmistakably natural.
              </p>
              <div className="mt-4 flex gap-6 text-[11px] text-olive-700/70">
                <div>
                  <div className="font-semibold text-olive-700">Compostable material</div>
                  <p>
                    Made from naturally shed areca leaf sheaths and shown in
                    studies to break down under composting conditions.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-olive-700">For food applications</div>
                  <p>
                    Widely used as disposable food packaging, with optional
                    tested food-grade barrier lining recommended for sensitive
                    or export markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg text-olive-700">Upcycled farm by-product.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              Our material starts as naturally shed areca palm leaf sheaths 
              no tree cutting, no extra cultivation. Research highlights
              environmental and rural-economic benefits when these replace
              single-use plastics.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg text-olive-700">Engineered for food service.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              Optimised molding temperature, time and moisture deliver smooth
              surfaces, strength and heat resistance suitable for typical food
              packaging and tableware applications.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-lg text-olive-700">Transparent on safety.</h2>
            <p className="mt-3 text-xs leading-relaxed text-olive-700/85">
              Some regulators have reported migration of natural alkaloids from
              areca materials under test conditions. For export or institutional
              buyers, we provide options with tested food-grade barrier linings
              and can share migration test reports on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
