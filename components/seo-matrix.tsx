import { competitors } from "@/lib/competitors";

export function SeoMatrix() {
  return (
    <section className="section-padding bg-white" aria-labelledby="seo-heading">
      <div className="mx-auto max-w-7xl space-y-10 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">SEO Infrastructure Audit</p>
          <h2 id="seo-heading" className="section-heading">
            Metadata cadence, schema adoption, and internal linking blueprints.
          </h2>
          <p className="text-lg text-brand-muted">
            The matrix outlines how each competitor handles crawlability, structured data, and authority flow—informing the
            new architecture we will outpace.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] border border-brand-muted/20 shadow-fly">
          <table className="min-w-full divide-y divide-brand-muted/20 text-left text-sm">
            <thead className="bg-brand-surface/90 uppercase tracking-[0.3em] text-brand-muted">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Competitor</th>
                <th scope="col" className="px-6 py-4 font-semibold">SEO Highlights</th>
                <th scope="col" className="px-6 py-4 font-semibold">Internal Linking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-muted/10 bg-white">
              {competitors.map((competitor) => (
                <tr key={competitor.id} className="align-top">
                  <td className="px-6 py-6">
                    <div className="font-semibold text-brand-primary">{competitor.name}</div>
                    <div className="text-xs text-brand-muted">{competitor.url}</div>
                  </td>
                  <td className="px-6 py-6">
                    <ul className="space-y-2 text-brand-muted">
                      {competitor.seoHighlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-6">
                    <ul className="space-y-2 text-brand-muted">
                      {competitor.internalLinking.map((note) => (
                        <li key={note}>• {note}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
