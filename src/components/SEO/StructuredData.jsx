import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const StructuredData = ({ type = 'organization' }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Capital Custodia",
    "alternateName": ["Capital Custodia"],
    "description": "Capital Custodia is a global luxury watch trading platform offering professional authentication, highest market prices through competitive dealer auctions, buyback options, and bank-vault storage.",
    "url": "https://capitalcustodia.com",
    "logo": "https://capitalcustodia.com/images/logo-icon.svg",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-4-123-4567",
      "contactType": "Customer Service",
      "email": "info@capitalcustodia.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Capital Custodia",
    "alternateName": "Capital Custodia",
    "image": "https://capitalcustodia.com/images/logo-icon.svg",
    "description": "Capital Custodia — luxury watch trading platform with global dealer auction, professional authentication, buyback options, and bank-vault storage services in Dubai DIFC.",
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
    "url": "https://capitalcustodia.com",
    "telephone": "+971-4-123-4567",
    "email": "info@capitalcustodia.com",
    "priceRange": "$$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Watch Trading",
    "provider": {
      "@type": "Organization",
      "name": "Capital Custodia"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Capital Custodia Luxury Watch Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Watch Authentication & Valuation"
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
            "name": "Watch Buyback & Re-purchase Program"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bank-Vault Storage by Transguard"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I get cash for my Rolex or luxury watch in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Capital Custodia has a global network of professional dealers from the US, Europe, Asia and the GCC who compete on our platform to bid the highest price for your watch. As a Dealer's Buying Platform, we buy your watch immediately based on competitive dealer pricing and offer you the option to reacquire it later under agreed terms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer loans against watches?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Capital Custodia does not provide loans or financing. We operate a structured asset purchase model where we buy your watch outright and offer you a resale option if you wish to reacquire it later (known as a re-purchase Agreement in international financial markets). This ensures full transparency and avoids hidden interest or repayment structures."
        }
      },
      {
        "@type": "Question",
        "name": "How is the price of my watch determined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your watch is priced through a competitive process involving multiple professional dealers from around the world who simultaneously compete to bid their highest price. Watches are professionally authenticated, legal ownership is checked, and Transguard handles storage and shipment. This ensures your price reflects real market demand rather than a single dealer's opinion."
        }
      },
      {
        "@type": "Question",
        "name": "Is this better than selling my watch to a dealer or pawn shop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional dealers typically offer a single negotiated price which may not reflect the full market value. Pawn shops offer low values and charge high interest rates. Capital Custodia provides access to multiple buyers competing simultaneously for your asset, ensuring you receive a fair and market-driven price without the pressure of one-on-one negotiations."
        }
      }
    ]
  };

  const schemas = {
    organization: organizationSchema,
    localBusiness: localBusinessSchema,
    service: serviceSchema,
    faq: faqSchema,
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
  type: PropTypes.oneOf(['organization', 'localBusiness', 'service', 'faq', 'all'])
};

export default StructuredData;
