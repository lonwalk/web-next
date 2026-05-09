import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

export default async function StrengthsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const copy = t(lang as Lang);

  return (
    <main>
      <section className="page-hero shell">
        <span className="section-kicker">{copy.labels.strengths}</span>
        <h1>{copy.strengths.title}</h1>
        <p>{copy.strengths.subtitle}</p>
      </section>

      <section className="section shell three-column-grid">
        {copy.strengths.items.map((item) => (
          <article key={item.title} className="content-card compact-card">
            <span className="section-kicker">{item.title}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="section shell two-image-strip">
        <div className="image-card single-image-card">
          <Image src={assets.assemblyWide} alt="自动化组装生产现场" width={1000} height={574} />
        </div>
        <div className="image-card single-image-card">
          <Image src={assets.solar} alt="光伏绿色制造" width={1672} height={941} />
        </div>
      </section>
    </main>
  );
}
