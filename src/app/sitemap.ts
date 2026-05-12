import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lonwalk.org'

  const routes = [
    '',
    '/zh/about',
    '/zh/clients',
    '/zh/capabilities',
    '/zh/quality',
    '/zh/strengths',
    '/zh/contact',

    '/en/about',
    '/en/clients',
    '/en/capabilities',
    '/en/quality',
    '/en/strengths',
    '/en/contact',

    '/ja/about',
    '/ja/clients',
    '/ja/capabilities',
    '/ja/quality',
    '/ja/strengths',
    '/ja/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
