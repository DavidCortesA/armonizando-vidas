import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogDescription?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = 'Armonizando Vidas A.B.P.';
const DEFAULT_URL = 'https://armonizandovidas.org';
const DEFAULT_IMAGE = `${DEFAULT_URL}/og/armonizando-vidas.png`;
const DEFAULT_IMAGE_ALT = 'Armonizando Vidas A.B.P., apoyo comunitario en Monterrey y Nuevo León';
const DEFAULT_DESCRIPTION =
  'Armonizando Vidas A.B.P. brinda apoyo comunitario, alimento y esperanza a familias en situación vulnerable en Monterrey y Nuevo León.';

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogDescription = description,
  keywords = 'apoyo comunitario, entrega de despensas, voluntariado, apoyo social, Monterrey, Nuevo León',
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  url = DEFAULT_URL,
  type = 'website',
}: SEOHeadProps) {
  const fullTitle = title ?? `${SITE_NAME} — Transformando comunidades`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: SITE_NAME,
          url: DEFAULT_URL,
          logo: `${DEFAULT_URL}/logos/armonizando-vidas.png`,
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Monterrey',
            addressRegion: 'Nuevo León',
            addressCountry: 'MX',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'contacto@armonizandovidas.org',
            contactType: 'customer service',
          },
        })}
      </script>
    </Helmet>
  );
}
