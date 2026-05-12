import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function CapabilitiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <h1>{copy.capabilities.title}</h1>
        <p>{copy.capabilities.subtitle}</p>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.designTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.capabilities.designItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.design} alt={copy.media.design} width={1774} height={887} priority />
        </figure>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card table-card">
          <h2>{copy.capabilities.injectionTitle}</h2>
          <p>{copy.capabilities.injectionLead}</p>
          <div className="table-wrap compact-table-wrap">
            <table>
              <tbody>
                {copy.capabilities.injectionRows.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.injection} alt={copy.media.injection} width={1060} height={534} />
        </figure>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.automationTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.capabilities.automationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <div className="image-card image-grid-card automation-image-grid">
          <Image src={assets.automationDetail1} alt={copy.capabilities.automationTitle} width={1089} height={1444} />
          <Image src={assets.automationDetail2} alt={copy.capabilities.automationTitle} width={944} height={718} />
        </div>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.cellTitle}</h2>
          <p>{copy.capabilities.cellLead}</p>
          <ul className="clean-list spaced-list" style={{ marginTop: 18 }}>
            {copy.capabilities.cellItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.lineProduction} alt={copy.media.lineProduction} width={1767} height={890} />
        </figure>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card table-card">
          <h2>{copy.capabilities.assemblyTitle}</h2>
          <p>{copy.capabilities.assemblyLead}</p>
          <div className="table-wrap compact-table-wrap">
            <table>
              <tbody>
                {copy.capabilities.assemblyRows.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <div className="image-card image-grid-card assembly-image-grid">
          <Image src={assets.assembly1} alt={copy.media.assemblyLine} width={1086} height={1448} />
          <Image src={assets.assembly2} alt={copy.media.assemblyLine} width={1086} height={1448} />
          <Image src={assets.assembly3} alt={copy.media.assemblyLine} width={2048} height={1536} />
          <Image src={assets.assembly4} alt={copy.media.assemblyLine} width={1086} height={1448} />
        </div>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.printingTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.capabilities.printingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.uvPrinting} alt={copy.media.uvPrinting} width={1428} height={1102} />
        </figure>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.cleanroomTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.capabilities.cleanroomItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.cleanroom} alt={copy.media.cleanroom} width={2300} height={840} />
        </figure>
      </section>

      <section className="section shell text-media-grid">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.erpTitle}</h2>
          <p>{copy.capabilities.erpLead}</p>
          <ul className="clean-list spaced-list">
            {copy.capabilities.erpItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="subsection-title">{copy.capabilities.erpModuleTitle}</h3>
          <div className="module-chip-grid">
            {copy.capabilities.erpModules.map((item) => (
              <span key={item} className="module-chip">{item}</span>
            ))}
          </div>
        </article>
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.erpSystem} alt={copy.media.erp} width={1731} height={909} />
        </figure>
      </section>
    </main>
  );
}
