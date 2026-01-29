import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import SEO from "../SEO/SEO";
import StructuredData from "../SEO/StructuredData";
import "./HeroSection.css";
import "./NewHereSection.css";

gsap.registerPlugin(ScrollTrigger);

const NewHereSection = () => {
  const container = useRef();
  const whiteBgRef = useRef();
  const backgroundFade = useRef();
  const expandingBox = useRef();
  const innerImage = useRef();
  const leftCard = useRef();
  const rightCard = useRef();
  const card4 = useRef();
  const card5 = useRef();
  const cardsGrid = useRef();
  const description = useRef();
  const cardsSectionHeader = useRef();

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(whiteBgRef.current, {
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top+=20 top",
  //         end: "top+=20 top",
  //         scrub: 1.5,
  //         markers: true,
  //       },

  //       bottom: 0,
  //       borderRadius: 0,
  //       scale: 5,
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top+=50 top",
          end: "top+=50 top",
          scrub: 3,
          markers: true,
        },
      });

      tl.to(whiteBgRef.current, {
        bottom: 0,
        borderRadius: 0,
        width: "100vw",
        height: "100vh",
        ease: "power3.in",
      });
      tl.to(description.current, {
        y: -100,
        opacity: 0,
        ease: "power3.in",
      });
    });

    return () => ctx.revert();
  }, []);

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

      <div
        className="hero-wrapper"
        ref={container}
        style={{ backgroundImage: `url('/images/banner-bg.png')` }}
      >
        <Header />
        <div className="sticky-container">
          {/* Layer 1: Base background (Solid White) */}
          <div className="background-base"></div>

          {/* Layer 2: Background Image Fade */}
          {/* <div
            className="background-image-fade"
            ref={backgroundFade}
            style={{ backgroundImage: `url('/images/girl-banner.png')` }}
          ></div> */}
          <img
            className="background-image-fade"
            src="/images/girl-banner.png"
            alt="Hero"
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            ref={backgroundFade}
          />

          <div className="description-text" ref={description}>
            <motion.h1
              className="hero-main-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              A safer, smarter way to{" "}
              <span className="highlight-text">
                sell your watch for immediate cash
              </span>{" "}
              at the highest prices… with options to buy back
            </motion.h1>
            <motion.p
              className="hero-sub-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              End-to-end Global Trading of Luxury Watches with guaranteed
              protection
            </motion.p>
            <motion.button
              className="cta-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              Learn More
            </motion.button>
          </div>

          {/* Cards Section Title */}
          <div className="cards-section-header" ref={cardsSectionHeader}>
            <h2 className="cards-section-title">Luxury trading, reimagined</h2>
            <p className="cards-section-subtitle">
              Speed, convenience and security like never before
            </p>
          </div>

          <div className="animation-viewport">
            <div className="animation-viewport-white-bg" ref={whiteBgRef}></div>
            <div className="cards-grid" ref={cardsGrid}>
              {/* Card 1 - Get Immediate Cash */}
              <div className="side-card card-left" ref={leftCard}>
                <img
                  className="box-inner-image"
                  src="/images/cash.png"
                  alt="Image 1"
                />
                <div className="ui-overlay ui-bottom">
                  <div className="card-notification">
                    <div className="card-notification-title">
                      Get Immediate Cash
                    </div>
                    <div className="card-notification-subtitle">
                      With option to buyback
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Girl (expanding box) - CENTERED */}
              <div className="side-card card-right" ref={rightCard}>
                <img
                  className="box-inner-image"
                  src="/images/track-value.png"
                  alt="Image 1"
                />
                <div className="ui-overlay ui-bottom">
                  <div className="card-notification">
                    <div className="card-notification-title">
                      Track value of your collection in real-time
                    </div>
                    <div className="card-notification-subtitle">
                      With our free Watch Collector's App
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Track value */}
              <div
                className="expanding-box"
                ref={expandingBox}
                style={{ backgroundImage: `url('/images/banner-bg.png')` }}
              >
                <img
                  className="box-inner-image"
                  src="/images/girl-banner.png"
                  alt="Hero"
                  ref={innerImage}
                />
                <div className="ui-overlay ui-bottom">
                  <div className="card-notification">
                    <div className="card-notification-title">
                      Get The Highest Prices
                    </div>
                    <div className="card-notification-subtitle">
                      Through our global dealer auction platform
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 - Authenticate */}
              <div className="side-card card-4" ref={card4}>
                <img
                  className="box-inner-image"
                  src="/images/authenticate.webp"
                  alt="Authenticate"
                />
                <div className="ui-overlay ui-bottom">
                  <div className="card-notification">
                    <div className="card-notification-title">
                      Authenticate before you Buy
                    </div>
                    <div className="card-notification-subtitle">
                      Through our network of certified Watch Makers
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 - Bank Vault */}
              <div className="side-card card-5" ref={card5}>
                <img
                  className="box-inner-image"
                  src="/images/bank-vault.webp"
                  alt="Bank Vault Storage"
                />
                <div className="ui-overlay ui-bottom">
                  <div className="card-notification">
                    <div className="card-notification-title">
                      Bank-Vault Storage
                    </div>
                    <div className="card-notification-subtitle">
                      Secure, Insured & tamper proof
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHereSection;
