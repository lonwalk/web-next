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
        <span className="section-kicker">Contact</span>
        <h1>{copy.contact.title}</h1>
        <p>{copy.contact.subtitle}</p>
      </section>

      <section className="section shell two-column-grid equal-grid">
        <article className="content-card form-card">
          <span className="section-kicker">Form</span>
          <h2>{copy.contact.formTitle}</h2>
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Name" />
            </label>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Company" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Email" />
            </label>
            <label>
              <span>Phone</span>
              <input type="text" name="phone" placeholder="Phone" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={6} placeholder="Message" />
            </label>
            <button type="button" className="button-primary">Submit</button>
          </form>
        </article>
        <article className="content-card large-copy">
          <span className="section-kicker">Contact</span>
          <h2>{copy.contact.infoTitle}</h2>
          <ul className="clean-list spaced-list">
            <li>{copy.companyName}</li>
            <li>{copy.companyNameEn}</li>
            <li>{copy.common.address}</li>
            <li>{copy.common.phone}</li>
            <li>{copy.common.fax}</li>
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
