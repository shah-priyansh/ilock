import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import { LuxryFrame } from '../LuxryFrame/LuxryFrame';
import Header from '../Header/Header';
import SEO from '../SEO/SEO';
import StructuredData from '../SEO/StructuredData';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const container = useRef();
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
    const getDevice = () => {
        const w = window.innerWidth;
        if (w <= 768) return "mobile";
        if (w <= 1024) return "tablet";
        return "desktop";
    };
    const [device, setDevice] = useState(getDevice());
    const isDesktop = device === "desktop";

    // Handle resize - recreate animations when crossing breakpoint
    useEffect(() => {
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const next = getDevice();
                if (next !== device) {
                    setDevice(next);
                }
                ScrollTrigger.refresh();
            }, 150);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, [isDesktop]);

    // Set initial zoomed-in state for desktop
    useEffect(() => {
        if (innerImage.current) {
            gsap.set(innerImage.current, { scale: 1.5 });
        }
    }, []);

    // Run animations on all devices - recreates when isDesktop changes
    useGSAP(() => {
        const isMobile = device === "mobile";
        const isTablet = device === "tablet";
        const isSmallLaptop = !isDesktop && !isMobile && !isTablet; 
        const getEnd = () => {
            if (isDesktop) return "bottom bottom";
          
            // mobile + tablet + small laptop
            return "+=" + Math.max(window.innerHeight * 1.4, 700);
          };
        const getScrub = () => {
            if (isDesktop) return 1;
            if (isTablet) return 2.5;
            if (isSmallLaptop) return 6.5;
            return 3; // mobile + small laptop
          };
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: getEnd(),
              scrub: getScrub(),
              pin: !isDesktop,
              pinSpacing: true,
              anticipatePin: 1
            }
          });
        if (!isDesktop) {
            tl.timeScale(0.85); // subtle, safe
          }
        // 1. Description fade out/up
        tl.to(description.current, {
            x: -100,
            y: 0,
            opacity: 0,
            duration: 0.7, // Reduced from 1 to 0.7
            ease: "power2.inOut"
        }, 0);

        // 2. The background image layer fades to blue
        tl.to(backgroundFade.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power1.inOut"
        }, (isMobile || isTablet) ? 0.8 : 0);

        // 2.5. Cards section header fades in
        tl.to(cardsSectionHeader.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, 0.3);

        // 3. The "Box" fades in and shrinks down from full-screen to card size
        tl.fromTo(expandingBox.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power1.in" }, // Reduced from 0.5 to 0.3
            0
        );

        // Box shrinking animation - different sizes for mobile vs tablet vs desktop
        if (isMobile) {
            // Set centering for expanding-box on mobile (same as side cards)
            gsap.set(expandingBox.current, { xPercent: -50, yPercent: -50 });

            tl.fromTo(expandingBox.current,
                {
                    width: 340,
                    height: 580,
                    borderRadius: 20,
                },
                {
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
                    duration: 1.4,
                    ease: "expo.inOut"
                }, 0);
        } else if (isTablet) {
            // Tablet (1024px) - use larger card size
            tl.fromTo(expandingBox.current,
                {
                    width: 380,
                    height: 560,
                    borderRadius: 20,
                },
                {
                    width: 320,
                    height: 500,
                    borderRadius: 32,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
                    duration: 1.4,
                    ease: "expo.inOut"
                }, 0);
        } else {
            tl.fromTo(expandingBox.current,
                {
                    width: 420,
                    height: 600,
                    borderRadius: 20,
                },
                {
                    width: 340,
                    height: 480,
                    borderRadius: 40,
                    boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
                    duration: 1.4,
                    ease: "expo.inOut"
                }, 0);
        }

        // 4. The image inside the box ZOOMS OUT
        tl.fromTo(innerImage.current,
            { scale: 1.09 }, // Start 5% bigger
            { scale: 0.9, duration: 1.4, ease: "expo.inOut" }, // Scaled down by 10%
            0);

        // 5. Side cards slide in (desktop) or slide from right (mobile/tablet)
        if (isMobile) {
            // Mobile: Slide in from right like a carousel - wait for main animation
            // Set centering for positioning
            gsap.set(leftCard.current, { xPercent: -50, yPercent: -50 });
            gsap.set(rightCard.current, { xPercent: -50, yPercent: -50 });

            // Animate with explicit dimensions to match expanding-box
            tl.fromTo(leftCard.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 1.5);

            tl.fromTo(rightCard.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 2.0);

            // Mobile: Cards 4, 5 slide in from right
            gsap.set(card4.current, { xPercent: -50, yPercent: -50 });
            gsap.set(card5.current, { xPercent: -50, yPercent: -50 });

            tl.fromTo(card4.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 2.5);

            tl.fromTo(card5.current,
                {
                    opacity: 0,
                    x: window.innerWidth,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    width: 300,
                    height: 520,
                    borderRadius: 28,
                    duration: 0.8,
                    ease: "power2.out"
                }, 3.0);

        } else if (isTablet) {
            // Tablet (1024px): Use larger card sizes and desktop-style animation
            const cardShift = 352; // 320px card + 32px gap for tablet

            // Set initial positions for tablet cards (same as desktop)
            gsap.set(leftCard.current, {
                x: -150,
                y: 0,
                scale: 0.85,
                opacity: 0,
                width: 320,
                height: 500,
                borderRadius: 32
            });

            gsap.set(rightCard.current, {
                x: 150,
                y: 0,
                scale: 0.85,
                opacity: 0,
                width: 320,
                height: 500,
                borderRadius: 32
            });

            gsap.set(card4.current, {
                x: cardShift,
                opacity: 0,
                scale: 0.85,
                width: 320,
                height: 500,
                borderRadius: 32
            });

            gsap.set(card5.current, {
                x: cardShift * 2,
                opacity: 0,
                scale: 0.85,
                width: 320,
                height: 500,
                borderRadius: 32
            });

            // Phase 1: Left and right cards slide in
            tl.to(leftCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            tl.to(rightCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            // Phase 2: Card 4 enters - shift entire grid left
            tl.to(card4.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 1.5);

            // Shift entire grid left when card 4 enters
            tl.to(cardsGrid.current, {
                x: -cardShift,
                duration: 0.8,
                ease: "power2.out"
            }, 1.5);

            // Phase 3: Card 5 enters - shift grid more
            tl.to(card5.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

            // Shift entire grid left again when card 5 enters
            tl.to(cardsGrid.current, {
                x: -cardShift * 2,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

            // Fade out left card as it goes off screen
            tl.to(leftCard.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

        } else {
            // Desktop: Carousel-style animation
            // Card width + gap for shifting calculations
            const cardShift = 372; // 340px card + 32px gap

            // Phase 1: Left and right cards slide in (3 cards visible: left, center, right)
            tl.to(leftCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            tl.to(rightCard.current, {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.4)"
            }, 0.6);

            // Phase 2: Card 4 enters - shift entire grid left, card 4 fades in
            tl.to(card4.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 1.5);

            // Shift entire grid left when card 4 enters
            tl.to(cardsGrid.current, {
                x: -cardShift,
                duration: 0.8,
                ease: "power2.out"
            }, 1.5);

            // Phase 3: Card 5 enters - shift grid more, card 5 fades in
            tl.to(card5.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

            // Shift entire grid left again when card 5 enters
            tl.to(cardsGrid.current, {
                x: -cardShift * 2,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

            // Fade out left card as it goes off screen
            tl.to(leftCard.current, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, 2.3);

        }


    }, { scope: container, dependencies: [isDesktop] });

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

            <div className="hero-wrapper" ref={container}  style={{ backgroundImage: `url('/images/banner-bg.png')` }}>
                <Header />
                <div className="sticky-container">
                    {/* Layer 1: Base background (Solid White) */}
                    <div className="background-base"></div>

                    {/* Layer 2: Background Image Fade */}
                    <div
                        className="background-image-fade"
                        ref={backgroundFade}
                        style={{ backgroundImage: `url('/images/girl-banner.png')` }}
                    ></div>

                    <div className="description-text" ref={description}>
                        <motion.h1
                            className="hero-main-text"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            A safer, smarter way to{' '}
                            <span className="highlight-text">sell your watch for immediate cash</span>
                            {' '}at the highest prices… with options to buy back
                        </motion.h1>
                        <motion.p
                            className="hero-sub-text"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            End-to-end Global Trading of Luxury Watches with guaranteed protection
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
                        <p className="cards-section-subtitle">Speed, convenience and security like never before</p>
                    </div>

                    <div className="animation-viewport">
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
                                        <div className="card-notification-title">Get Immediate Cash</div>
                                        <div className="card-notification-subtitle">With option to buyback</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Girl (expanding box) - CENTERED */}
                            <div className="expanding-box" ref={expandingBox}>
                                <img
                                    className="box-inner-image"
                                    src="/images/girl-banner.png"
                                    alt="Hero"
                                    ref={innerImage}
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Get The Highest Prices</div>
                                        <div className="card-notification-subtitle">Through our global dealer auction platform</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Track value */}
                            <div className="side-card card-right" ref={rightCard}>
                                <img
                                    className="box-inner-image"
                                    src="/images/track-value.png"
                                    alt="Image 1"
                                />
                                <div className="ui-overlay ui-bottom">
                                    <div className="card-notification">
                                        <div className="card-notification-title">Track value of your collection in real-time</div>
                                        <div className="card-notification-subtitle">With our free Watch Collector's App</div>
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
                                        <div className="card-notification-title">Authenticate before you Buy</div>
                                        <div className="card-notification-subtitle">Through our network of certified Watch Makers</div>
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
                                        <div className="card-notification-title">Bank-Vault Storage</div>
                                        <div className="card-notification-subtitle">Secure, Insured & tamper proof</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <LuxryFrame />
        </>
    );
};

export default HeroSection;
