import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { LuxryFrame } from "../LuxryFrame/LuxryFrame";
import Header from "../Header/Header";
import SEO from "../SEO/SEO";
import StructuredData from "../SEO/StructuredData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./NewHeroSection.css";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../utils/analytics";

gsap.registerPlugin(ScrollTrigger);

const NewHeroSection = () => {
  const container = useRef();
  const innerImage = useRef();
  const leftCard = useRef();
  const rightCard = useRef();
  const cardsGrid = useRef();
  const description = useRef();
  const cardsSectionHeader = useRef();
  const girlCard = useRef();
  const whiteBgRef = useRef();
  const outerGirl = useRef();
  const threeCard = useRef();
  const navigate = useNavigate();
  // const fourCard = useRef();

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
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    const matchMediaScreen = gsap.matchMedia();

    matchMediaScreen.add(
      "(min-width: 1024px)",
      () => {
        const ctx = gsap.context(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current,
                start: "top+=50 top",
                end: "top+=50 top",
                scrub: 2,
              },
            })
            .to(whiteBgRef.current, {
              bottom: 0,
              borderRadius: 0,
              width: "100vw",
              height: "100vh",
              ease: "power1.inOut",
            })
            .to(
              cardsGrid.current,
              {
                scale: 0.6,
                ease: "power1.inOut",
              },
              "<",
            )
            .to(
              innerImage.current,
              {
                scale: 1.3,
                ease: "power1.inOut",
              },
              "<",
            )
            .to(
              outerGirl.current,
              {
                scale: 1.3,
                ease: "power1.inOut",
              },
              "<",
            )
            .to(
              leftCard.current,
              {
                opacity: 1,
                "--website-hero-carousel-left-translate": "-95%",
                ease: "power1.inOut",
              },
              "<",
            )
            .to(
              rightCard.current,
              {
                opacity: 1,
                "--website-hero-carousel-left-translate": "95%",
                ease: "power1.inOut",
              },
              "<",
            )
            // .to(
            //   threeCard.current,
            //   {
            //     opacity: 1,
            //     "--website-hero-carousel-left-translate": "95%",
            //     ease: "power1.inOut",
            //   },
            //   "<",
            // )
            // .to(
            //   fourCard.current,
            //   {
            //     opacity: 1,
            //     "--website-hero-carousel-left-translate": "95%",
            //     ease: "power1.inOut",
            //   },
            //   "<",
            // )
            .to(
              cardsSectionHeader.current,
              {
                opacity: 1,
                y: "50%",
                ease: "power3.inOut",
              },
              "<",
            );

          gsap.to(description.current, {
            y: -200,
            opacity: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: container.current,
              start: "top+=50 top",
              toggleActions: "play reverse play reverse",
            },
          });
        });
        return () => ctx.revert();
      },
      [],
    );
  });

  useEffect(() => {
    const matchMediaScreen = gsap.matchMedia();
    matchMediaScreen.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top+=200 top",
              end: "top+=300 top",
              scrub: 2,
            },
          })
          .to(
            cardsGrid.current,
            {
              translateX: "-29%",
              ease: "power1.inOut",
            },
            "<",
          )
          .to(
            girlCard.current,
            {
              scale: 0.92,
              ease: "none",
            },
            "<",
          )
          .to(
            threeCard.current,
            {
              opacity: 1,
              ease: "power1.inOut",
            },
            "<",
          )
        // .to(
        //   fourCard.current,
        //   {
        //     opacity: 1,
        //     ease: "power1.inOut",
        //   },
        //   "<",
        // );
      });
      return () => ctx.revert();
    });
  });

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
        style={{ backgroundImage: `url('/images/imgi_13_banner-bg.png')` }}
      >
        <Header />
        <div className="sticky-container">
          {/* Layer 1: Base background (Solid White) */}
          <div className="background-base"></div>

          {/* Layer 2: Background Image Fade */}
          <div className="background-image-fades">
            <div className="background-image-fade-inner">
              <div className="background-image-fade-img">
                <img src="/images/imgi_3_girl-banner.png" alt="" ref={outerGirl} />
              </div>
            </div>
            <div className="description-text" ref={description}>
              <div className="description-text-inner">
                <motion.h1
                  className="hero-main-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  A smarter way to {" "}
                  <span className="highlight-text">
                    sell your luxury watch for immediate cash
                  </span>{" "}
                  at the highest prices…with an option to buy back
                </motion.h1>
                <motion.p
                  className="hero-sub-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                Priced globally; traded locally...no shipping hassles or payment delays
                </motion.p>
                <motion.button
                  className="cta-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  onClick={() => {trackEvent("click", "learn_more", "new_hero_section"); navigate("/about")}}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
            {/* Card 2 - Girl (expanding box mobile) - CENTERED */}
            <div
              className="expanding-box expanding-boxs expanding-box-mobile"
              style={{ backgroundImage: `url('/images/imgi_13_banner-bg.png')` }}
            >
              <div className="expanding-box-in">
                <div className="expanding-box-img">
                  <img
                    className="box-inner-image"
                    src="/images/imgi_3_girl-banner.png"
                    alt="Hero"
                  />
                </div>
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
            </div>
            {/* Card 2 - Girl (expanding box mobile) - CENTERED */}
          </div>

          {/* Cards Section Title */}
          <div className="cards-section-header" ref={cardsSectionHeader}>
            <h2 className="cards-section-title">Luxury trading, reimagined</h2>
            <p className="cards-section-subtitle">
              Speed, convenience and security like never before
            </p>
          </div>

          {!isMobile ? (
            <div className="animation-viewport">
              <div
                className="animation-viewport-white-bg"
                ref={whiteBgRef}
              ></div>
              {/* Cards Section Title */}
              <div className="cards-section-header cards-section-header-mobile">
                <h2 className="cards-section-title">
                  Luxury trading, reimagined
                </h2>
                <p className="cards-section-subtitle">
                  Speed, convenience and security like never before
                </p>
              </div>
              {/* Cards Section Title */}

              <div className="cards-grid">
                <div className="cards-grid-inner" ref={cardsGrid}>
                  {/* Card 1 - Get Immediate funds */}
                  <div className="side-card card-left" ref={leftCard}>
                    <div className="side-card-left-in">
                      <img
                        className="box-inner-image"
                        src="/images/cash.png"
                        alt="Image 1"
                      />
                      <div className="ui-overlay ui-bottom">
                        <div className="card-notification">
                          <div className="card-notification-title">
                            Get Immediate funds
                          </div>
                          <div className="card-notification-subtitle">
                            Cash or bank transfer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Girl (expanding box) - CENTERED */}
                  <div
                    className="expanding-box expanding-boxs"
                    style={{ backgroundImage: `url('/images/imgi_13_banner-bg.png')` }}
                    ref={girlCard}
                  >
                    <div className="expanding-box-in">
                      <div className="expanding-box-img">
                        <img
                          className="box-inner-image"
                          src="/images/imgi_3_girl-banner.png"
                          alt="Hero"
                          ref={innerImage}
                        />
                      </div>
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
                  </div>

                  {/* Card 3 - Track value */}
                  <div className="side-card card-right" ref={rightCard}>
                    <div className="side-card-right-in">
                      <img
                        className="box-inner-image"
                        src="/images/track-value.png"
                        alt="Image 1"
                      />
                      <div className="ui-overlay ui-bottom">
                        <div className="card-notification">
                          <div className="card-notification-title">
                            Get Cash & Buy Back
                          </div>
                          <div className="card-notification-subtitle">
                            Fixed price to buy back
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="side-card card-three" ref={threeCard}>
                    <div className="side-card-right-in">
                      <img
                        className="box-inner-image"
                        src="/images/img3.png"
                        alt="Image 1"
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
          ) : (
            <div className="animation-viewport">
              {/* Cards Section Title */}
              {/* <div className="cards-section-header cards-section-header-mobile">
                <h2 className="cards-section-title">
                  Luxury trading, reimagined
                </h2>
                <p className="cards-section-subtitle">
                  Speed, convenience and security like never before
                </p>
              </div> */}
              {/* Cards Section Title */}
              <div className="cards-grid">
                <div className="cards-grid-inner viewport-swiper">
                  <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={16}
                    pagination={{ clickable: true }}
                    grabCursor
                    loop={true}
                    centeredSlides
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        centeredSlides: false,
                      },
                      600: {
                        slidesPerView: 2,
                        centeredSlides: true,
                      },
                      992: {
                        slidesPerView: 3,
                        centeredSlides: true,
                      },
                      1024: {
                        slidesPerView: 1, // or whatever layout you want above 1024
                        centeredSlides: false,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="side-card card-left">
                        <div className="side-card-left-in">
                          <img
                            className="box-inner-image"
                            src="/images/cash.png"
                            alt="Image 1"
                          />
                          <div className="ui-overlay ui-bottom">
                            <div className="card-notification">
                              <div className="card-notification-title">
                                Get Immediate funds
                              </div>
                              <div className="card-notification-subtitle">
                                Cash or bank transfer
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                      <div
                        className="expanding-box expanding-boxs"
                        style={{
                          backgroundImage: `url('/images/banner-bg.png')`,
                        }}
                      >
                        <div className="expanding-box-in">
                          <div className="expanding-box-img">
                            <img
                              className="box-inner-image"
                              src="/images/imgi_3_girl-banner.png"
                              alt="Hero"
                              ref={innerImage}
                            />
                          </div>
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
                      </div>
                    </SwiperSlide> */}

                    <SwiperSlide>
                      <div className="side-card card-right">
                        <div className="side-card-right-in">
                          <img
                            className="box-inner-image"
                            src="/images/track-value.png"
                            alt="Image 1"
                          />
                          <div className="ui-overlay ui-bottom">
                            <div className="card-notification">
                              <div className="card-notification-title">
                                Get Cash & Buy Back
                              </div>
                              <div className="card-notification-subtitle">
                                Fixed price to buy back
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="side-card card-right">
                        <div className="side-card-right-in">
                          <img
                            className="box-inner-image"
                            src="/images/img3.png"
                            alt="Image 1"
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
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <LuxryFrame />
    </>
  );
};

export default NewHeroSection;
