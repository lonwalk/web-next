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
        <div className="image-card placeholder-card">
          <span>产品设计与开发照片预留</span>
        </div>
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
        <div className="image-card single-image-card">
          <Image src={assets.injection} alt="注塑成型设备" width={1060} height={534} />
        </div>
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
        <div className="image-card placeholder-card">
          <span>自动化设备照片预留</span>
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
        <div className="image-card placeholder-card">
          <span>Cell Line生产照片预留</span>
        </div>
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
        <div className="image-card single-image-card">
          <Image src={assets.assembly} alt="装配流水线" width={1000} height={551} />
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
        <div className="image-card single-image-card">
          <Image src={assets.uvPrinting} alt="UV打印设备" width={1070} height={669} />
        </div>
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
        <div className="image-card placeholder-card">
          <span>洁净车间照片预留</span>
        </div>
      </section>

      <section className="section shell single-image-section">
        <article className="content-card compact-card">
          <h2>{copy.capabilities.erpTitle}</h2>
          <ul className="clean-list spaced-list">
            {copy.capabilities.erpItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
