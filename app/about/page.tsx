export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <h1 className="font-heading text-3xl tracking-tight text-olive-700 md:text-4xl">
            Rooted in areca groves, crafted for modern brands.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-olive-700/85">
            Areca Studio works with naturally shed areca palm leaves, pressing
            each piece with minimal energy so it can return to the earth under
            suitable composting conditions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-olive-700/85">
            We partner with responsible farms and small-batch pressing units in
            South India, ensuring traceability, fair work and dignified
            livelihoods across our supply chain.
          </p>
          <div className="mt-6 rounded-2xl border border-gold-200/70 bg-beige-50/70 p-4 text-xs text-olive-700/85">
            <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-olive-700/70">
              Safety &amp; compliance
            </div>
            <p className="mt-2">
              Areca leaf materials are biodegradable and widely used as
              disposable tableware. Some regulators have observed migration of
              natural alkaloids into food simulants under laboratory conditions.
              For export markets or institutional buyers we recommend using our
              validated food-grade barrier lining or requesting migration test
              certificates and country-specific compliance documentation.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-2xl border border-sage-100 bg-beige-50/70 p-5 text-xs text-olive-700/85">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-olive-700/70">
              Impact at a glance
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                Replaces single-use plastic and mixed material packaging with a
                mono-material leaf.
              </li>
              <li>Home-compostable within months under the right conditions.</li>
              <li>
                Naturally heat resistant and widely used for serving food, with
                the option of a tested food-grade barrier lining where
                required.
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <section className="mt-16 border-t border-sage-100 pt-10">
        <h2 className="font-heading text-2xl tracking-tight text-olive-700 md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-6 text-sm leading-relaxed text-olive-700/85">
          <div>
            <h3 className="text-sm font-semibold text-olive-700">Are your plates and boxes safe for food?</h3>
            <p className="mt-2 text-xs md:text-sm">
              Our products are made from cleaned, pressed areca leaf sheaths and are widely used for serving food.
              Independent studies show the material is compostable and suitable for many food uses. Some regulators
              have raised concerns about natural compounds that can migrate in certain conditions, so for export to
              sensitive markets we provide products with a tested food-grade barrier lining and can share lab reports
              on request.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-olive-700">Can I compost the used packaging?</h3>
            <p className="mt-2 text-xs md:text-sm">
              Yes. Under normal home or industrial composting conditions, areca leaf products break down over weeks to
              months. The exact time depends on local temperature, moisture and microbial activity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-olive-700">Do you have lab tests or certificates?</h3>
            <p className="mt-2 text-xs md:text-sm">
              For lined products and specific markets, we can provide migration and food-safety test reports, as well
              as relevant certificates from accredited laboratories where available. Share your country and intended
              use and we will send the most relevant documentation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-olive-700">Can you print our names or logo on the packaging?</h3>
            <p className="mt-2 text-xs md:text-sm">
              Yes. We offer customised name and logo printing on selected areca products, subject to
              minimum order quantities and artwork suitability. Share your design and we will confirm
              available printing options, placement and lead times.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
