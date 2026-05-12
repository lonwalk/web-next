import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

function productImage(fileName: string, width: number, height: number) {
  return {
    src: `/assets/lonwalk-new/clients/product-thumbs/${fileName}.jpg`,
    width,
    height,
  };
}

const productShowcases = [
  {
    id: 'electronic',
    images: [
      productImage('elec1', 1448, 1086),
      productImage('elec2', 1448, 1086),
      productImage('elec3', 1296, 910),
      productImage('elec4', 1448, 1086),
      productImage('elec5', 1398, 996),
    ],
  },
  {
    id: 'optical',
    images: [
      productImage('lens1', 1448, 1086),
      productImage('lens2', 1086, 1448),
      productImage('lens3', 1401, 1123),
    ],
  },
  {
    id: 'complex',
    images: [
      productImage('hard1', 1448, 1086),
      productImage('hard2', 1448, 1086),
      productImage('hard3', 1448, 1086),
      productImage('hard4', 1448, 1086),
    ],
  },
  {
    id: 'comprehensive',
    images: [
      productImage('print1', 1166, 1349),
      productImage('print2', 1448, 1086),
      productImage('print3', 1448, 1086),
      productImage('print4', 1448, 1086),
      productImage('more1', 1448, 1086),
      productImage('more2', 1448, 1086),
      productImage('more3', 1086, 1448),
      productImage('more5', 1254, 1254),
      productImage('more6', 1448, 1086),
      productImage('more7', 1086, 1448),
      productImage('more8', 1448, 1086),
      productImage('more9', 1448, 1086),
      productImage('more10', 1129, 1393),
      productImage('more11', 1086, 1448),
      productImage('more12', 1086, 1448),
      productImage('more13', 1448, 1086),
      productImage('more14', 1086, 1448),
      productImage('more15', 1448, 1086),
      productImage('more16', 1086, 1448),
      productImage('more17', 1277, 1232),
      productImage('more18', 1448, 1086),
      productImage('more19', 1204, 1306),
      productImage('more20', 1448, 1086),
      productImage('more21', 1448, 1086),
      productImage('more22', 1086, 1448),
      productImage('more23', 1448, 1086),
      productImage('more24', 1086, 1448),
    ],
  },
] as const;

function splitIntoRows<T>(items: readonly T[], rowCount: number) {
  return Array.from({ length: rowCount }, (_, rowIndex) => items.filter((_, index) => index % rowCount === rowIndex));
}

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

      <section className="section shell product-showcase-section">
        <div className="section-heading-row">
          <h2>{copy.clients.productShowcaseTitle}</h2>
        </div>
        <div className="product-category-stack">
          {productShowcases.map((category) => {
            const title = copy.clients.productCategories[category.id];

            return (
              <section key={category.id} className="product-category-block" aria-labelledby={`product-${category.id}`}>
                <h3 id={`product-${category.id}`}>{title}</h3>
                {category.id === 'comprehensive' ? (
                  <div className="product-marquee-stack" aria-label={title}>
                    {splitIntoRows(category.images, 3).map((rowImages, rowIndex) => {
                      const marqueeImages = [...rowImages, ...rowImages];

                      return (
                        <div
                          key={rowIndex}
                          className={`product-marquee-row ${rowIndex === 1 ? 'is-reverse' : ''}`}
                          style={{ '--marquee-duration': `${34 + rowIndex * 6}s` } as React.CSSProperties}
                        >
                          <div className="product-marquee-track">
                            {marqueeImages.map((image, imageIndex) => (
                              <figure key={`${image.src}-${imageIndex}`} className="product-gallery-card product-marquee-card" aria-hidden={imageIndex >= rowImages.length}>
                                <Image
                                  src={image.src}
                                  alt={`${title} ${(imageIndex % rowImages.length) + 1}`}
                                  width={image.width}
                                  height={image.height}
                                  sizes="(max-width: 720px) 38vw, (max-width: 1200px) 18vw, 180px"
                                  unoptimized
                                />
                              </figure>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="product-gallery-grid">
                    {category.images.map((image, index) => (
                      <figure key={image.src} className="product-gallery-card">
                        <Image
                          src={image.src}
                          alt={`${title} ${index + 1}`}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 720px) 46vw, (max-width: 1200px) 22vw, 220px"
                          unoptimized
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
