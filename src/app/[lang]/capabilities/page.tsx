import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  assets,
  isLang,
  Lang,
  t,
} from '@/data/site';

export default async function CapabilitiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">{copy.labels.capabilities}</span>
        <h1>{copy.capabilities.title}</h1>
        <p>{copy.capabilities.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.flow}</span>
          <h2>{copy.capabilities.processTitle}</h2>
          <p>{copy.capabilities.processLead}</p>
          <div className="process-flow" style={{ marginTop: 20 }}>
            {copy.capabilities.serviceFlow.map((item) => (
              <span key={item} className="flow-step">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.injection}</span>
          <h2>{copy.capabilities.injectionTitle}</h2>
          <p>{copy.capabilities.injectionLead}</p>
        </article>
      </section>

      <section className="section shell table-block">
        <div className="content-card table-card">
          <h2>{copy.capabilities.injectionTable}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <thead>
                <tr>
                  {copy.capabilities.injectionHeaders.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.capabilities.injectionRows.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section shell table-grid">
        <div className="content-card table-card">
          <h2>{copy.capabilities.assemblyTable}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <thead>
                <tr>
                  {copy.capabilities.assemblyHeaders.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.capabilities.assemblyRows.map(([label, value]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="image-card single-image-card">
          <Image src={assets.assemblyLine} alt="" width={1546} height={1017} />
        </div>
      </section>

      <section className="section shell three-column-grid">
        {copy.capabilities.groups.map((group) => (
          <article key={group.title} className="content-card compact-card">
            <span className="section-kicker">{group.kicker}</span>
            <h2>{group.title}</h2>
            {'body' in group ? <p>{group.body}</p> : null}
            <ul className="clean-list spaced-list" style={{ marginTop: 'body' in group ? 18 : 0 }}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section shell two-image-strip">
        <div className="image-card single-image-card">
          <Image src={assets.moldingFloor} alt="" width={1576} height={998} />
        </div>
        <div className="image-card single-image-card">
          <Image src={assets.cleanroom} alt="" width={2631} height={1155} />
        </div>
      </section>
    </main>
  );
}
