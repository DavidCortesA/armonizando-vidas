import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = 'Armonizando Vidas A.B.P.';
const DEFAULT_URL = 'https://armonizandovidas.org';
const DEFAULT_IMAGE = `${DEFAULT_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION =
  'Armonizando Vidas A.B.P. — Asociación civil que transforma comunidades a través del Banco de Alimentos y Orquestas del Rey. Dona, sé voluntario y únete a nuestra misión.';

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = 'asociación civil, banco de alimentos, orquesta infantil, voluntariado, donar, apoyo social, Monterrey, México',
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
  type = 'website',
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Transformando comunidades`;

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
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_MX" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NGO',
          name: SITE_NAME,
          url: DEFAULT_URL,
          logo: `${DEFAULT_URL}/logos/armonizando-vidas-logo.png`,
          description: DEFAULT_DESCRIPTION,
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
