export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <h1 className="font-heading text-3xl tracking-tight text-olive-700 md:text-4xl">
            Rooted in areca groves, crafted for modern brands.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-olive-700/85">
            Areca Studio works exclusively with naturally shed areca palm leaves.
            Each piece is pressed with minimal energy, without synthetic
            coatings, so it can safely return to the earth after use.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-olive-700/85">
            We partner with responsible farms and small-batch pressing units in
            South India, ensuring traceability, fair work and dignified
            livelihoods across our supply chain.
          </p>
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
                Naturally heat resistant, food-safe and free from additional
                liners.
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
