import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const StructuredData = ({ type = 'organization' }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iLockSecure",
    "description": "Global luxury watch trading platform with authentication, highest prices, and buyback options",
    "url": "https://ilocksecure.com",
    "logo": "https://ilocksecure.com/images/logo-icon.svg",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-123-4567",
      "contactType": "Customer Service",
      "email": "info@ilocksecure.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "iLockSecure",
    "image": "https://ilocksecure.com/images/logo-icon.svg",
    "description": "Luxury watch trading platform with global dealer auction and authentication services",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "DIFC",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "url": "https://ilocksecure.com",
    "telephone": "+971-4-123-4567",
    "email": "info@ilocksecure.com",
    "priceRange": "$$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Watch Trading",
    "provider": {
      "@type": "Organization",
      "name": "iLockSecure"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Watch Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Watch Authentication & Valuation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Dealer Auction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Watch Buyback Program"
          }
        }
      ]
    }
  };

  const schemas = {
    organization: organizationSchema,
    localBusiness: localBusinessSchema,
    service: serviceSchema,
    all: [organizationSchema, localBusinessSchema, serviceSchema]
  };

  const selectedSchema = schemas[type] || schemas.organization;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(selectedSchema)}
      </script>
    </Helmet>
  );
};

StructuredData.propTypes = {
  type: PropTypes.oneOf(['organization', 'localBusiness', 'service', 'all'])
};

export default StructuredData;
