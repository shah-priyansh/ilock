import React from "react";
import { motion } from "framer-motion";
import { LuxryFrame } from "../LuxryFrame/LuxryFrame";
import Header from "../Header/Header";
import SEO from "../SEO/SEO";
import StructuredData from "../SEO/StructuredData";
import "./NewHeroSection.css";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../utils/analytics";

/* Card order and copy per Figma: Get Highest Market Price, Get Immediate Cash, Buy your watch back, Bank-Vault Storage */
const featureCards = [
  {
    image: "/images/1.png",
    title: "Get Immediate Cash",
    subtitle: "Cash or Bank Transfer",
  },
  {
    image: "/images/2.png",
    title: "Get Highest Market Price",
    subtitle: "Through our global dealer network",
  },
  {
    image: "/images/3.png",
    title: "Buy your watch back",
    subtitle: "Lock in a future buy-back price at low rates",
  },
  {
    image: "/images/4.png",
    title: "Bank-Vault Storage",
    subtitle: "Secured, Insured & Tamper Proof",
  },
];

const NewHeroSection = () => {
  const navigate = useNavigate();

  const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <SEO
        title="Sell Luxury Watches for Highest Cash Prices | iLockSecure"
        description="Get instant cash for your luxury watches with iLockSecure's global dealer auction. Guaranteed highest prices, authentication, and buyback options. Rolex, Patek Philippe, AP & more."
        keywords="sell luxury watches, luxury watch trading, sell Rolex, Patek Philippe buyers, authenticated watch dealers, watch buyback program, instant cash for watches"
        canonical="/"
        ogTitle="Sell or Buyback Your Luxury Watches Securely for Top Value | iLockSecure"
        ogDescription="Join thousands of watch owners who chose iLockSecure for instant cash. Global auction platform with authentication, bank-vault storage, and immediate payment. Get your valuation today."
        ogUrl="https://ilocksecure.com/"
      />
      <StructuredData type="all" />

      {/* Hero Section with Video */}
      <div className="hero-wrapper">
        <Header />
        <div className="hero-video-bg">
          <iframe
              src="https://www.youtube.com/embed/0M8OMMbyBD0?autoplay=1&mute=1&loop=1&playlist=0M8OMMbyBD0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="iLock Secure"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
          ></iframe>
          {/*<iframe
                src="https://www.youtube.com/embed/0M8OMMbyBD0?autoplay=1&mute=1&loop=1&playlist=0M8OMMbyBD0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="iLock Secure"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>*/}
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-text-overlay">
          <motion.div
              className="hero-text-content"
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
          >
            <h1 className="hero-main-text">
              <b>Sell your watch </b> today
              <br />
              <b>Buy it back</b>  tomorrow

              <br />
              <span className="hero-text-large">Live Better</span>
            </h1>
            <motion.button
              className="cta-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => {
                trackEvent("click", "get_an_offer", "hero_section");
                navigate("/contact");
              }}
            >
              Get An Offer
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="features-section">
        <div className="features-content">
          <motion.div
            className="features-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="features-title">
              What if selling your watch
              <strong>didn't have to be permanent? </strong>
            </h2>
            <p className="features-subtitle">
              Speed, convenience and security like never before
            </p>
          </motion.div>

          <div className="features-cards">
            {featureCards.map((card, index) => (
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: isMobile ? 0 : index * 0.1,
                }}
              >
                <div className="feature-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="feature-card-info">
                  <h3 className="feature-card-title">{card.title}</h3>
                  <p className="feature-card-subtitle">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <LuxryFrame />
    </>
  );
};

export default NewHeroSection;
