import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function ClientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <h1>{copy.clients.title}</h1>
        <p>{copy.clients.subtitle}</p>
      </section>

      <section className="section shell single-image-section">
        <article className="content-card large-copy">
          <p>{copy.clients.lead}</p>
        </article>
      </section>

      <section className="section shell single-image-section">
        <article className="content-card compact-card">
          <h2>{copy.clients.currentTitle}</h2>
          <div className="client-logo-grid current-client-grid">
            {copy.clients.currentClients.map((client) => (
              <article key={client.name} className="client-logo-card">
                <Image src={assets[client.asset]} alt={client.name} width={620} height={420} />
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section shell single-image-section">
        <article className="content-card compact-card">
          <h2>{copy.clients.pastTitle}</h2>
          <div className="client-logo-grid past-client-grid">
            {copy.clients.pastClients.map((client) => (
              <article key={client.name} className="client-logo-card">
                <Image src={assets[client.asset]} alt={client.name} width={420} height={180} />
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section shell award-recognition-grid">
        <article className="content-card large-copy">
          <h2>{copy.clients.awardTitle}</h2>
          <p>{copy.clients.awardLead}</p>
        </article>
        <div className="image-card award-image-card">
          <Image src={assets.customerRecognition1} alt={copy.media.clientAwards} width={1448} height={1086} />
        </div>
        <div className="image-card award-image-card">
          <Image src={assets.customerRecognition2} alt={copy.media.clientAwards} width={1276} height={976} />
        </div>
      </section>
    </main>
  );
}
