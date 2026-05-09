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

      <section className="section shell single-image-section">
        <article className="content-card large-copy">
          <h2>{copy.quality.policyTitle}</h2>
          <p>{copy.quality.policyLead}</p>
          <div className="tag-grid" style={{ marginTop: 18 }}>
            {copy.quality.policyItems.map((item) => (
              <span key={item} className="tag-chip">{item}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="section shell single-image-section">
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
          <div className="image-card single-image-card">
            <Image src={assets.twoDimensional} alt="二次元检测设备" width={831} height={543} />
          </div>
          <div className="image-card single-image-card">
            <Image src={assets.rohsSea1000s} alt="精工SEA1000S X射线荧光分光器" width={830} height={544} />
          </div>
          <div className="image-card single-image-card">
            <Image src={assets.temperatureHumidity} alt="恒温恒湿炉" width={689} height={789} />
          </div>
          <div className="image-card single-image-card">
            <Image src={assets.saltSpray} alt="德仪盐雾测试机" width={815} height={376} />
          </div>
          <div className="image-card single-image-card">
            <Image src={assets.vibration} alt="模拟振动台" width={814} height={392} />
          </div>
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
          <div className="image-card certificate-card">
            <Image src={assets.iso14001} alt="ISO14001:2004认证" width={389} height={532} />
          </div>
          <div className="image-card certificate-card">
            <Image src={assets.iso9001} alt="ISO9001:2008认证" width={378} height={532} />
          </div>
          <div className="image-card certificate-card">
            <Image src={assets.icti} alt="ICTI认证" width={363} height={531} />
          </div>
        </div>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card large-copy">
          <h2>{copy.quality.recognitionTitle}</h2>
          <p>{copy.quality.recognitionBody}</p>
        </article>
        <div className="image-card single-image-card">
          <Image src={assets.awards2} alt="朗华客户认可奖项" width={716} height={480} />
        </div>
      </section>
    </main>
  );
}
