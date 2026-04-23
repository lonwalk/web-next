import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  assemblyLines,
  assets,
  auxiliaryEquipment,
  electronicsCapabilities,
  finishingCapabilities,
  injectionMachines,
  isLang,
  Lang,
  moldingCapabilities,
  otherEquipment,
  serviceFlow,
  t,
} from '@/data/site';

export default async function CapabilitiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">Capabilities</span>
        <h1>{copy.capabilities.title}</h1>
        <p>{copy.capabilities.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card large-copy">
          <span className="section-kicker">Flow</span>
          <h2>{copy.capabilities.processTitle}</h2>
          <p>{copy.capabilities.processLead}</p>
          <div className="process-flow" style={{ marginTop: 20 }}>
            {serviceFlow.map((item) => (
              <span key={item} className="flow-step">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="content-card large-copy">
          <span className="section-kicker">Injection</span>
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
                <tr><th>Brand</th><th>Model</th><th>T</th><th>Qty</th><th>ID</th></tr>
              </thead>
              <tbody>
                {injectionMachines.map((item) => (
                  <tr key={`${item.brand}-${item.model}-${item.serials}`}>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.tonnage}</td>
                    <td>{item.quantity}</td>
                    <td>{item.serials}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section shell table-grid">
        <div className="content-card table-card">
          <h2>{copy.capabilities.auxiliaryTable}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <thead>
                <tr><th>Name</th><th>No.</th><th>Status</th><th>Vendor</th></tr>
              </thead>
              <tbody>
                {auxiliaryEquipment.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>{item.status}</td>
                    <td>{item.vendor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-card table-card">
          <h2>{copy.capabilities.otherTable}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <thead>
                <tr><th>Name</th><th>Qty</th></tr>
              </thead>
              <tbody>
                {otherEquipment.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section shell three-column-grid">
        <article className="content-card compact-card">
          <span className="section-kicker">Molding</span>
          <h2>{copy.capabilities.moldingTitle}</h2>
          <ul className="clean-list spaced-list">
            {moldingCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="subsection-divider" />
          <ul className="clean-list spaced-list">
            {finishingCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <span className="section-kicker">Electronics</span>
          <h2>{copy.capabilities.electronicsTitle}</h2>
          <p>{copy.capabilities.electronicsLead}</p>
          <ul className="clean-list spaced-list" style={{ marginTop: 18 }}>
            {electronicsCapabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card compact-card">
          <span className="section-kicker">Assembly</span>
          <h2>Assembly Lines</h2>
          <ul className="clean-list spaced-list">
            {assemblyLines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section shell two-image-strip">
        <div className="image-card single-image-card">
          <Image src={assets.moldingFloor} alt="Injection molding workshop" width={1576} height={998} />
        </div>
        <div className="image-card single-image-card">
          <Image src={assets.assemblyLine} alt="Assembly line" width={1546} height={1017} />
        </div>
      </section>
    </main>
  );
}
