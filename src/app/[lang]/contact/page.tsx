import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">{copy.labels.contact}</span>
        <h1>{copy.contact.title}</h1>
        <p>{copy.contact.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card form-card">
          <span className="section-kicker">{copy.labels.form}</span>
          <h2>{copy.contact.formTitle}</h2>
          <form className="contact-form">
            <label>
              <span>{copy.contact.fields.name}</span>
              <input type="text" name="name" placeholder={copy.contact.fields.name} />
            </label>
            <label>
              <span>{copy.contact.fields.company}</span>
              <input type="text" name="company" placeholder={copy.contact.fields.company} />
            </label>
            <label>
              <span>{copy.contact.fields.email}</span>
              <input type="email" name="email" placeholder={copy.contact.fields.email} />
            </label>
            <label>
              <span>{copy.contact.fields.phone}</span>
              <input type="text" name="phone" placeholder={copy.contact.fields.phone} />
            </label>
            <label>
              <span>{copy.contact.fields.message}</span>
              <textarea name="message" rows={6} placeholder={copy.contact.fields.message} />
            </label>
            <button type="button" className="button-primary">{copy.contact.fields.submit}</button>
          </form>
        </article>
        <article className="content-card large-copy">
          <span className="section-kicker">{copy.labels.contact}</span>
          <h2>{copy.contact.infoTitle}</h2>
          <ul className="clean-list spaced-list">
            <li>{copy.companyName}</li>
            <li>{copy.companyNameEn}</li>
            <li>{copy.common.address}</li>
            <li>{copy.common.phone}</li>
            <li>{copy.common.fax}</li>
            <li>{copy.common.mobile}</li>
          </ul>
        </article>
      </section>

      <section className="section shell single-image-section">
        <div className="image-card single-image-card">
          <Image src={assets.warehouse} alt="Warehouse system" width={486} height={226} />
        </div>
      </section>
    </main>
  );
}
