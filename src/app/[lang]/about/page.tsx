import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">{copy.labels.about}</span>
        <h1>{copy.about.title}</h1>
        <p>{copy.about.subtitle}</p>
      </section>

      <section className="section shell two-column-grid">
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.positioning}</span>
          <h2>{copy.about.introTitle}</h2>
          <p>{copy.about.introBody}</p>
        </article>
        <div className="image-card tall-image">
          <Image src={assets.detailFactory} alt="Lonwalk facility" width={4288} height={2848} />
        </div>
      </section>

      <section className="section shell table-block">
        <div className="content-card table-card">
          <h2>{copy.about.factsTitle}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <tbody>
                {copy.about.facts.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section shell three-column-grid">
        <article className="content-card compact-card">
          <span className="section-kicker">{copy.labels.market}</span>
          <h2>{copy.about.legacyTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.about.legacyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <span className="section-kicker">{copy.labels.capabilities}</span>
          <h2>{copy.about.currentTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.about.currentItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <span className="section-kicker">{copy.labels.positioning}</span>
          <h2>{copy.about.historyTitle}</h2>
          <div className="timeline-list dense-timeline">
            {copy.about.history.map((item) => (
              <article key={item.year} className="timeline-item">
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section shell single-image-section">
        <div className="image-card single-image-card">
          <Image src={assets.team} alt="Lonwalk team" width={3082} height={1167} />
        </div>
      </section>
    </main>
  );
}
