import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React, { useState } from "react";
import { motion } from 'framer-motion';
import './ContactUs.css';
import SEO from '../components/SEO/SEO';
import StructuredData from '../components/SEO/StructuredData';

// Animation variant for each accordion item
const accordionItemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const accordionContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

// FAQ card stagger — each card uses custom={index} for its delay
const cardItemVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 }
    })
};

// Accordion Component
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "How can I get cash for my Rolex or luxury watch in Dubai?",
            answer: "<p>A luxury watch is a significant investment and, for some, a legacy to pass down to loved ones. However, if you’re looking to unlock liquidity from your investment in Dubai, we provide a structured solution. </p>" +
                "<p>We have a global network of professional dealers from the US, Europe, Asia and the GCC. And they compete on our platform to bid the highest price for your watch.</p>" +
                "<p>Plus, since our fees are based on the value of your watch, our interests are fully aligned with you to get the highest price. </p>" +
                "<p>As a Dealer’s Buying Platform, we buy your watch immediately based on competitive dealer pricing <b>and offer you the option to reacquire it later under agreed terms.</b></p>" +
                "<p>Instead of haggling with a few shops, our platform helps you determine value from a global network of professional watch dealers, ensuring a transparent and market-based price.</p>"

        },
        {
            question: "Do you offer loans against watches?",
            answer: "<p>No, Capital Custodia does not provide loans or financing. We operate a structured asset purchase model where we buy your watch outright and offer you a resale option if you wish to reacquire it later (known as a &ldquo;re-purchase Agreement&rdquo; in international financial markets)</p" +
                "<p>This ensures full transparency, avoids hidden interest or repayment structures and ensures you are never under any pressure or obligation to buy back the watch.</p>"
        },
        {
            question: "How is the price of my watch determined?",
            answer: "<p>Your watch is priced through a competitive process involving multiple professional dealers from around the world who simultaneously compete to bid their highest price.</p>" +
                "<p>Global dealers trust our platform to ensure: </p>" +
                "<ul><li>Watches are professionally authenticated</li><li>Legal ownership is checked and confirmed</li><li>Transguard, our partners, handle storage and shipment to any part of the world</li><li>And we buy the watches up-front so we have Custody before they pay</li></ul>"+
                "<p>This confidence encourages dealers to bid higher and ensures your price reflects real market demand rather than a single dealer’s opinion, providing a more transparent and competitive outcome.</p>"

        },
        {
            question: "Is this better than selling my watch to a dealer or pawn shop?",
            answer: "<p>Traditional dealers typically offer a single negotiated price, which may not reflect the full market value of your watch. Their intent is to acquire your watch at the lowest price to maximize their profit margins when they sell. Pawn shops give you the ability to buy back your watch but tend to offer very low market values and charge high interest rates.</p>"+
                "<p>Capital Custodia provides you access to multiple buyers competing simultaneously for your asset. This ensure you receive a fair and market-driven price without the pressure of one-on-one negotiations</p>"
        },

    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            className="faq-accordion"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={accordionContainerVariant}
        >
            {questions.map((item, index) => (
                <motion.div key={index} className="accordion-item" variants={accordionItemVariant}>
                    <button
                        className={`accordion-button bg-white rounded-[12px] ${openIndex === index ? 'active' : ''}`}
                        onClick={() => toggleQuestion(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="accordion-question">{item.question}</span>
                        <span className={`accordion-icon bg-transparent ${openIndex === index ? 'open' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {openIndex === index ? (
                                    <path d="M5 12H19" stroke="#CCA35A" strokeWidth="2" strokeLinecap="round"/>
                                ) : (
                                    <>
                                        <path d="M12 5V19" stroke="#CCA35A" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M5 12H19" stroke="#CCA35A" strokeWidth="2" strokeLinecap="round"/>
                                    </>
                                )}
                            </svg>
                        </span>
                    </button>
                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                        <div
                            className="accordion-answer"
                            dangerouslySetInnerHTML={{__html: item.answer}}
                        />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:3001/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json().catch(() => ({
                success: false,
                message: 'Invalid response from server. Please try again.'
            }));

            if (data.success) {
                setMessage({ type: 'success', text: data.message });
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setMessage({ type: 'error', text: data.message });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({
                type: 'error',
                text: 'Failed to submit message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <>
            <SEO
                title="FAQ | Capital Custodia - Luxury Watch Trading Questions"
                description="Frequently asked questions about Capital Custodia. Learn how we determine watch prices, our structured asset purchase model, global dealer network, and how we differ from pawn shops and traditional dealers."
                keywords="Capital Custodia FAQ, luxury watch trading questions, sell Rolex FAQ, watch buyback FAQ, Capital Custodia re-purchase agreement, how to sell luxury watch Dubai, watch valuation process"
                canonical="/faq"
                ogTitle="FAQ | Capital Custodia - Your Luxury Watch Trading Questions Answered"
                ogDescription="Get answers about selling luxury watches with Capital Custodia. Learn about our global dealer auction, pricing process, buyback options, and how we ensure the highest market value for your timepiece."
                ogUrl="https://capitalcustodia.com/faq"
            />
            <StructuredData type="faq" />

            <div className="min-h-screen bg-white">


                <Header/>
                <motion.div
                    className={'page-banner position-relative'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8}}
                >
                    <motion.img
                        src="/images/faq.png"
                        className={'img-fluid'}
                        alt="About Banner"
                        initial={{scale: 1.1}}
                        animate={{scale: 1}}
                        transition={{duration: 1.2, ease: "easeOut"}}
                    />
                    <motion.div
                        className={'page-content text-center text-white'}
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.3, ease: "easeOut"}}
                    >
                        <h1>
                            Frequently <span>Asked Questions</span>
                        </h1>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="py-5 text-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0, backgroundColor: "#003D69",}}
                    viewport={{once: true, margin: "-60px"}}
                    transition={{duration: 0.6}}

                >
                    <div className={'py-md-5'}>
                        <h2 className="features-title">
                            Secure Answers for  <strong>Your Peace of Mind</strong>
                        </h2>
                        <p className="features-subtitle text-white">
                            Everything you need to know about our bank-vault storage, global dealer network, and how <br/>we protect your luxury assets.
                        </p>
                    </div>
                </motion.div>

                <div className={'faq-card-section py-5 my-md-5'}>
                    <div className={'container'}>
                        {/* For Desktop Start */}

                        <div className={'d-none d-sm-none d-md-block'}>
                            <div className={'row px-3'}>
                                <div className={'col-md-4 px-0'}>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                1
                                            </div>
                                            <h3>
                                                How can I get cash for my Rolex or luxury watch in Dubai?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                A luxury watch is a significant investment and, for some, a legacy to
                                                pass
                                                down to loved ones. However, if you’re looking to unlock liquidity from
                                                your
                                                investment in Dubai, we provide a structured solution.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                4
                                            </div>
                                            <h3>
                                                Is this better than selling my watch to a dealer or pawn shop?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Traditional dealers typically offer a single negotiated price, which may
                                                not
                                                reflect the full market value of your watch. Their intent is to acquire
                                                your
                                                watch at the lowest price to maximize their profit margins when they
                                                sell.
                                                Pawn shops give you the ability to buy back your watch but tend to offer
                                                very low market values and charge high interest rates.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                7
                                            </div>
                                            <h3>
                                                What types of watches do you accept?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Our dealers specialize in high-value luxury watches from brands such as
                                                Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Omega, Franck
                                                Muller,
                                                Vacheron Constantin, Jaeger-lecoultre and other more exotic and rare
                                                brands
                                                through our US and European dealer network.
                                                <br/>
                                                <br/>
                                                Talk to us if you are unsure whether your watch qualifies. Our team of
                                                specialists can help you with an initial report.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={3} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                11
                                            </div>
                                            <h3>
                                                How is Capital Custodia different from a pawn shop?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Pawn shops typically provide short-term lending based on internal
                                                valuation and fixed pricing structures. They tend to offer very low
                                                values to protect themselves and maximize their profits while charging
                                                generally higher interest rates for short-term loans.

                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                </div>
                                <div className={'col-md-4 px-0 mt-md-5 pt-md-5'}>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                2
                                            </div>
                                            <h3>
                                                Do you offer loans against watches?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                No, Capital Custodia does not provide loans or financing. We operate a
                                                structured asset purchase model where we buy your watch outright and
                                                offer
                                                you a resale option if you wish to reacquire it later (known as a
                                                "re-purchase Agreement" in international financial markets)


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                5
                                            </div>
                                            <h3>
                                                Can I get my watch back after selling it?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Yes. Our structured deals provide you with the option, but never an
                                                obligation, to reacquire your watch at pre-agreed prices and terms.
                                                <br/>
                                                <br/>
                                                This gives you the flexibility get liquidity now without permanently
                                                parting
                                                with the asset. And all our watches are insured and stored at
                                                Transguard’s
                                                ultra-high security facilities under 24X7 survelience


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                8
                                            </div>
                                            <h3>
                                                Is my watch safe during the process?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Yes. All watches are packed in your presence and professionally managed
                                                throughout the process. Our watches are fully insured and stored at
                                                Transguard’s professionally managed, ultra-high security facilities
                                                under 24X7 survelience
                                                <br/>
                                                <br/>
                                                We take security, confidentiality, and safety very seriously and ensure
                                                proper handling of all client assets.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>


                                </div>
                                <div className={'col-md-4 px-0'}>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                3
                                            </div>
                                            <h3>
                                                How can I get cash for my Rolex or luxury watch in Dubai?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Your watch is priced through a competitive process involving multiple
                                                professional dealers from around the world who simultaneously compete to
                                                bid
                                                their highest price.


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                6
                                            </div>
                                            <h3>
                                                How quickly can I receive funds for my watch?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Once price are confirmed and your watch has been evaluated, funds can be
                                                arranged quickly either in cash or via bank transfer per your
                                                preference.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                9
                                            </div>
                                            <h3>
                                                Are there any hidden fees or charges?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                No. Capital Custodia operates with a poliy of clear and transparent
                                                pricing
                                                and processes.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={3} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                10
                                            </div>
                                            <h3>
                                                Why choose Capital Custodia instead of traditional options?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Capital Custodia offers a structured, transparent, and professional
                                                alternative to traditional vendors and dealers.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* For Desktop End */}

                        {/* For Mobile Start */}
                        <div className={'d-block d-sm-block d-md-none'}>
                            <div className={'row px-3'}>
                                <div className={'col-md-4 px-0'}>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                1
                                            </div>
                                            <h3>
                                                How can I get cash for my Rolex or luxury watch in Dubai?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                A luxury watch is a significant investment and, for some, a legacy to
                                                pass
                                                down to loved ones. However, if you’re looking to unlock liquidity from
                                                your
                                                investment in Dubai, we provide a structured solution.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                2
                                            </div>
                                            <h3>
                                                Do you offer loans against watches?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                No, Capital Custodia does not provide loans or financing. We operate a
                                                structured asset purchase model where we buy your watch outright and
                                                offer
                                                you a resale option if you wish to reacquire it later (known as a
                                                "re-purchase Agreement" in international financial markets)


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                3
                                            </div>
                                            <h3>
                                                How can I get cash for my Rolex or luxury watch in Dubai?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Your watch is priced through a competitive process involving multiple
                                                professional dealers from around the world who simultaneously compete to
                                                bid
                                                their highest price.


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                4
                                            </div>
                                            <h3>
                                                Is this better than selling my watch to a dealer or pawn shop?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Traditional dealers typically offer a single negotiated price, which may
                                                not
                                                reflect the full market value of your watch. Their intent is to acquire
                                                your
                                                watch at the lowest price to maximize their profit margins when they
                                                sell.
                                                Pawn shops give you the ability to buy back your watch but tend to offer
                                                very low market values and charge high interest rates.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                5
                                            </div>
                                            <h3>
                                                Can I get my watch back after selling it?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Yes. Our structured deals provide you with the option, but never an
                                                obligation, to reacquire your watch at pre-agreed prices and terms.
                                                <br/>
                                                <br/>
                                                This gives you the flexibility get liquidity now without permanently
                                                parting
                                                with the asset. And all our watches are insured and stored at
                                                Transguard’s
                                                ultra-high security facilities under 24X7 survelience


                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                6
                                            </div>
                                            <h3>
                                                How quickly can I receive funds for my watch?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Once price are confirmed and your watch has been evaluated, funds can be
                                                arranged quickly either in cash or via bank transfer per your
                                                preference.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                7
                                            </div>
                                            <h3>
                                                What types of watches do you accept?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Our dealers specialize in high-value luxury watches from brands such as
                                                Rolex, Patek Philippe, Audemars Piguet, Richard Mille, Omega, Franck
                                                Muller,
                                                Vacheron Constantin, Jaeger-lecoultre and other more exotic and rare
                                                brands
                                                through our US and European dealer network.
                                                <br/>
                                                <br/>
                                                Talk to us if you are unsure whether your watch qualifies. Our team of
                                                specialists can help you with an initial report.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                8
                                            </div>
                                            <h3>
                                                Is my watch safe during the process?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Yes. All watches are packed in your presence and professionally managed
                                                throughout the process. Our watches are fully insured and stored at
                                                Transguard’s professionally managed, ultra-high security facilities
                                                under
                                                24X7 survelience
                                                <br/>
                                                <br/>
                                                We take security, confidentiality, and safety very seriously and ensure
                                                proper handling of all client assets.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                9
                                            </div>
                                            <h3>
                                                Are there any hidden fees or charges?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                No. Capital Custodia operates with a poliy of clear and transparent
                                                pricing
                                                and processes.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                11
                                            </div>
                                            <h3>
                                                How is Capital Custodia different from a pawn shop?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Pawn shops typically provide short-term lending based on internal
                                                valuation
                                                and fixed pricing structures. They tend to offer very low values to
                                                protect
                                                themselves and maximize their profits while charging generally higher
                                                interest rates for short-term loans.

                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>
                                    <motion.div className={'faq-card'} variants={cardItemVariant} custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-50px" }}>
                                        <div className={'fc-head'}>
                                            <div className={'fc-number'}>
                                                10
                                            </div>
                                            <h3>
                                                Why choose Capital Custodia instead of traditional options?
                                            </h3>
                                        </div>
                                        <div className={'fc-body'}>
                                            <p>
                                                Capital Custodia offers a structured, transparent, and professional
                                                alternative to traditional vendors and dealers.
                                            </p>

                                            <a href={'#'}>
                                                [Read More]
                                            </a>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                        {/* For Mobile End */}
                    </div>
                </div>

                {/*<div className={'py-5'} style={{backgroundColor: '#003D69'}}>


                    <div className={'question-div py-md-5'}>
                        <div className={'container'}>
                            <div className={'mb-5 text-center'}>
                                <h2 className="features-title">
                                    <strong>Faq's</strong>
                                </h2>

                            </div>


                            <motion.div
                                className={'accordion-div'}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-50px"}}
                                variants={fadeInUp}
                                transition={{delay: 0.2}}
                            >
                                <Accordion/>
                            </motion.div>
                        </div>
                    </div>


                </div>*/}

                <motion.div
                    className={'ready-section py-5 py-md-5 my-md-5 text-center'}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={fadeInUp}
                >
                    <div className={'container'}>

                        <div className={'ps-title text-center mb-5'}>
                            <h3 className={'mb-2'}>
                                <span>Redefining</span> how the world trades<br/> <span>luxury timepieces</span>
                            </h3>
                            <p>
                                Combining advanced re-commerce technology with legacy wealth expertise
                            </p>
                        </div>


                        <motion.div
                            className={'ready-btn-div text-center'}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <motion.button
                                className={'btn mb-3'}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                Get your free valuation now
                            </motion.button>
                            <p>100% Secured & Confidential</p>
                        </motion.div>
                    </div>
                </motion.div>


                <Footer/>
            </div>
        </>
    );
}

