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
        <article className="content-card table-card">
          <span className="section-kicker">{copy.labels.contact}</span>
          <h2>{copy.contact.infoTitle}</h2>
          <div className="table-wrap compact-table-wrap">
            <table>
              <tbody>
                {copy.contact.rows.map(([label, value]) => (
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
          <Image src={assets.campus} alt="朗华厂区" width={2726} height={1158} />
        </div>
      </section>
    </main>
  );
}
