import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, Lang, t } from '@/data/site';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }, { lang: 'ja' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) {
    return {};
  }

  const copy = t(lang);
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
}

export default async function LangLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) {
    notFound();
  }

  return (
    <>
      <SiteHeader lang={lang as Lang} />
      {children}
      <SiteFooter lang={lang as Lang} />
    </>
  );
}
