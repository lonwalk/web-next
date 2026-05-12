import Image from 'next/image';
import { notFound } from 'next/navigation';
import { assets, isLang, Lang, t } from '@/data/site';

function productImage(src: string, width: number, height: number) {
  const fileName = src.split('/').pop()?.replace(/\.png$/, '') ?? '';

  return {
    src,
    width,
    height,
    thumbSrc: `/assets/lonwalk-new/clients/product-thumbs/${fileName}.jpg`,
    previewSrc: `/assets/lonwalk-new/clients/product-previews/${fileName}.jpg`,
  };
}

const productShowcases = [
  {
    id: 'electronic',
    images: [
      productImage('/assets/lonwalk-new/clients/产品/带电子/elec1.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/带电子/elec2.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/带电子/elec3.png', 1296, 910),
      productImage('/assets/lonwalk-new/clients/产品/带电子/elec4.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/带电子/elec5.png', 1398, 996),
    ],
  },
  {
    id: 'optical',
    images: [
      productImage('/assets/lonwalk-new/clients/产品/带镜片/lens1.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/带镜片/lens2.png', 1086, 1448),
    ],
  },
  {
    id: 'complex',
    images: [
      productImage('/assets/lonwalk-new/clients/产品/高难度塑胶产品/hard1.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/高难度塑胶产品/hard2.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/高难度塑胶产品/hard3.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/高难度塑胶产品/hard4.png', 1448, 1086),
    ],
  },
  {
    id: 'printing',
    images: [
      productImage('/assets/lonwalk-new/clients/产品/印刷细节/print1.png', 1166, 1349),
      productImage('/assets/lonwalk-new/clients/产品/印刷细节/print2.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/印刷细节/print3.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/印刷细节/print4.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/印刷细节/print5.png', 1448, 1086),
    ],
  },
  {
    id: 'comprehensive',
    images: [
      productImage('/assets/lonwalk-new/clients/产品/more/more1.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more2.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more3.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more4.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more5.png', 1254, 1254),
      productImage('/assets/lonwalk-new/clients/产品/more/more6.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more7.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more8.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more9.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more10.png', 1129, 1393),
      productImage('/assets/lonwalk-new/clients/产品/more/more11.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more12.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more13.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more14.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more15.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more16.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more17.png', 1277, 1232),
      productImage('/assets/lonwalk-new/clients/产品/more/more18.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more19.png', 1204, 1306),
      productImage('/assets/lonwalk-new/clients/产品/more/more20.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more21.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more22.png', 1086, 1448),
      productImage('/assets/lonwalk-new/clients/产品/more/more23.png', 1448, 1086),
      productImage('/assets/lonwalk-new/clients/产品/more/more24.png', 1086, 1448),
    ],
  },
] as const;

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
                <div className="product-gallery-grid">
                  {category.images.map((image, index) => (
                    <figure key={image.src} className="product-gallery-card">
                      <Image
                        src={image.thumbSrc}
                        alt={`${title} ${index + 1}`}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 720px) 46vw, (max-width: 1200px) 22vw, 220px"
                        data-lightbox-src={image.previewSrc}
                        unoptimized
                      />
                    </figure>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
