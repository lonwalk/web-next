import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function QualityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <h1>{copy.quality.title}</h1>
        <p>{copy.quality.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <h2>{copy.quality.policyTitle}</h2>
          <p>{copy.quality.policyLead}</p>
          <div className="tag-grid" style={{ marginTop: 18 }}>
            {copy.quality.policyItems.map((item) => (
              <span key={item} className="tag-chip">{item}</span>
            ))}
          </div>
        </article>
        <article className="content-card compact-card">
          <h2>{copy.quality.systemTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.quality.systemItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.quality.labTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.quality.labItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <div className="media-grid">
          <figure className="image-card figure-card single-image-card">
            <Image src={assets.twoDimensional} alt={copy.media.twoDimensional} width={831} height={543} />
            <figcaption>{copy.media.twoDimensional}</figcaption>
          </figure>
          <figure className="image-card figure-card single-image-card">
            <Image src={assets.rohsSea1000s} alt={copy.media.rohsSea1000s} width={830} height={544} />
            <figcaption>{copy.media.rohsSea1000s}</figcaption>
          </figure>
          <figure className="image-card figure-card single-image-card">
            <Image src={assets.temperatureHumidity} alt={copy.media.temperatureHumidity} width={689} height={789} />
            <figcaption>{copy.media.temperatureHumidity}</figcaption>
          </figure>
          <figure className="image-card figure-card single-image-card">
            <Image src={assets.saltSpray} alt={copy.media.saltSpray} width={815} height={376} />
            <figcaption>{copy.media.saltSpray}</figcaption>
          </figure>
          <figure className="image-card figure-card single-image-card">
            <Image src={assets.vibration} alt={copy.media.vibration} width={814} height={392} />
            <figcaption>{copy.media.vibration}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.quality.certTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.quality.certs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <div className="certificate-grid">
          <figure className="image-card certificate-card figure-card">
            <Image src={assets.iso14001} alt={copy.media.iso14001} width={389} height={532} />
            <figcaption>{copy.media.iso14001}</figcaption>
          </figure>
          <figure className="image-card certificate-card figure-card">
            <Image src={assets.iso9001} alt={copy.media.iso9001} width={378} height={532} />
            <figcaption>{copy.media.iso9001}</figcaption>
          </figure>
          <figure className="image-card certificate-card figure-card rotated-certificate-card">
            <span className="rotated-certificate-media">
              <Image src={assets.icti} alt={copy.media.icti} width={363} height={531} />
            </span>
            <figcaption>{copy.media.icti}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section shell award-recognition-grid">
        <article className="content-card large-copy">
          <h2>{copy.quality.recognitionTitle}</h2>
          <p>{copy.quality.recognitionBody}</p>
        </article>
        <div className="image-card award-image-card">
          <Image src={assets.awards1} alt={copy.media.awards} width={741} height={480} />
        </div>
        <div className="image-card award-image-card">
          <Image src={assets.awards3} alt={copy.media.awards} width={690} height={462} />
        </div>
      </section>
    </main>
  );
}
