import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="hero-section shell">
        <div className="hero-card">
          <div className="hero-copy">
            <span className="section-kicker">{copy.home.kicker}</span>
            <h1>{copy.home.title}</h1>
            <p className="hero-intro">{copy.home.intro}</p>
            <div className="hero-actions">
              <Link href={`/${lang}/capabilities`} className="button-primary">
                {copy.common.capabilities}
              </Link>
              <Link href={`/${lang}/contact`} className="button-secondary">
                {copy.common.contact}
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <Image src={assets.heroCampus} alt="Lonwalk campus aerial view" width={1935} height={813} priority />
          </div>
        </div>
      </section>

      <section className="section shell compact-card-grid">
        {copy.home.cards.map((item) => (
          <article key={item.title} className="content-card compact-card">
            <span className="section-kicker">{item.title}</span>
            <p>{item.body}</p>
        </article>
      ))}
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.clients}</span>
          <h2>{copy.home.clientTitle}</h2>
          <p>{copy.home.clientLead}</p>
          <div className="logo-grid" style={{ marginTop: 18 }}>
            {copy.home.clientItems.map((item) => (
              <span key={item} className="logo-chip">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.market}</span>
          <h2>{copy.home.marketTitle}</h2>
          <p>{copy.home.marketLead}</p>
          <ul className="clean-list spaced-list" style={{ marginTop: 18 }}>
            {copy.home.marketItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
