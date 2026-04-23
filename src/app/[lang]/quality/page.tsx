import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, coreStrengths, isLang, Lang, qualityCerts, qualityTools, t } from '@/data/site';

export default async function QualityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">Quality</span>
        <h1>{copy.quality.title}</h1>
        <p>{copy.quality.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <span className="section-kicker">Quality</span>
          <h2>{copy.quality.leadTitle}</h2>
          <p>{copy.quality.leadBody}</p>
          <ul className="clean-list spaced-list" style={{ marginTop: 18 }}>
            {coreStrengths.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <span className="section-kicker">Certification</span>
          <h2>{copy.quality.certTitle}</h2>
          <div className="tag-grid" style={{ marginTop: 12 }}>
            {qualityCerts.map((item) => (
              <span key={item} className="tag-chip">
                {item}
              </span>
            ))}
          </div>
          <ul className="clean-list spaced-list" style={{ marginTop: 20 }}>
            {qualityTools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section shell single-image-section">
        <div className="image-card single-image-card">
          <Image src={assets.cleanroom} alt="Cleanroom finishing process" width={2631} height={1155} />
        </div>
      </section>
    </main>
  );
}
