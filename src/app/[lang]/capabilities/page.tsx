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
          <Image src={assets.assemblyWide} alt="产品设计与生产导入现场" width={1000} height={574} />
          <figcaption>产品设计与生产导入</figcaption>
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
          <Image src={assets.injection} alt="注塑成型设备" width={1060} height={534} />
          <figcaption>注塑成型设备</figcaption>
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
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.assembly} alt="自动化组装生产线" width={1000} height={551} />
          <figcaption>自动化组装生产线</figcaption>
        </figure>
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
          <Image src={assets.assemblyWide} alt="连线生产" width={1000} height={574} />
          <figcaption>连线生产</figcaption>
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
        <figure className="image-card figure-card single-image-card">
          <Image src={assets.assembly} alt="装配流水线" width={1000} height={551} />
          <figcaption>装配流水线</figcaption>
        </figure>
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
          <Image src={assets.uvPrinting} alt="UV打印设备" width={1070} height={669} />
          <figcaption>UV打印设备</figcaption>
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
          <Image src={assets.cleanroom} alt="洁净车间" width={2300} height={840} />
          <figcaption>洁净车间</figcaption>
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
          <Image src={assets.erpSystem} alt="ERP管理系统" width={1600} height={1923} />
          <figcaption>ERP管理系统</figcaption>
        </figure>
      </section>
    </main>
  );
}
