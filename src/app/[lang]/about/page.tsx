import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="hero-section shell landing-hero">
        <div className="hero-card landing-hero-card">
          <div className="hero-media hero-media-cover landing-hero-media">
            <Image src={assets.campus} alt="朗华厂区" width={2726} height={1158} priority />
          </div>
          <div className="landing-hero-panel">
            <h1>{copy.companyName}</h1>
            <p className="company-name-en">{copy.companyNameEn}</p>
            <p className="hero-intro">{copy.about.subtitle}</p>
            <div className="landing-hero-actions">
              <Link href={`/${lang}/capabilities`} className="button-primary">
                {copy.common.capabilities}
              </Link>
              <Link href={`/${lang}/contact`} className="button-secondary">
                {copy.common.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <h2>{copy.about.introTitle}</h2>
          <p>{copy.about.introBody}</p>
        </article>
        <article className="content-card large-copy">
          <h2>{copy.about.positioningTitle}</h2>
          <p>{copy.about.positioningBody}</p>
        </article>
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

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card compact-card">
          <h2>{copy.about.developmentTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.about.developmentItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <h2>{copy.about.capabilityTitle}</h2>
          <div className="placeholder-grid">
            {copy.about.capabilityItems.map((item) => (
              <div key={item} className="placeholder-tile">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section shell single-image-section">
        <article className="content-card compact-card">
          <h2>{copy.about.serviceFeatureTitle}</h2>
          <div className="feature-grid">
            {copy.about.serviceFeatures.map((item) => (
              <article key={item.title} className="feature-item">
                <div className="placeholder-frame">
                  <span>照片预留</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
