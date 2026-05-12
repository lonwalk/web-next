import { Lang, t } from '@/data/site';

export function SiteFooter({ lang }: { lang: Lang }) {
  const copy = t(lang);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-label">{copy.footer.company}</p>
          <p className="footer-title">{copy.companyName}</p>
          <p>{copy.companyNameEn}</p>
        </div>
        <div>
          <p className="footer-label">{copy.footer.contact}</p>
          <p>{copy.common.address}</p>
          <p>{copy.common.phone}</p>
          <p>{copy.common.mobile}</p>
        </div>
        <div className="footer-positioning">
          <p className="footer-label">{copy.labels.footerPositioning}</p>
          <p>{copy.footer.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
