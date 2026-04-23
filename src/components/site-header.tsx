'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { assets, Lang, languages, t } from '@/data/site';

export function SiteHeader({ lang }: { lang: Lang }) {
  const copy = t(lang);
  const segments = useSelectedLayoutSegments();
  const currentPath = segments.length ? `/${segments.join('/')}` : '';

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={`/${lang}`} className="brand-mark" aria-label={copy.companyName}>
          <Image src={assets.logo} alt="Lonwalk logo" width={873} height={105} className="brand-logo" priority />
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {copy.nav.map((item) => (
            <Link key={item.href || 'home'} href={`/${lang}${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="language-picker" aria-label={copy.common.language}>
          {languages.map((item) => (
            <Link key={item.code} href={`/${item.code}${currentPath}`} className={item.code === lang ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
