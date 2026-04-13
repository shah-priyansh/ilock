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

// Accordion Component
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "How can I get cash for my Rolex or luxury watch in Dubai?",
            answer: "<p>A luxury watch is a significant investment and, for some, a legacy to pass down to loved ones. However, if you’re looking to unlock liquidity from your investment in Dubai, we provides a structured solution. </p>" +
                "<p>We have a global network of professional dealers from the US, Europe, Asia and the GCC. And they compete on our platform to bid the highest price for your watch.</p>" +
                "<p>Plus, since our fees are based on the value of your watch, our interests are fully aligned with you to get the highest price. </p>" +
                "<p>As a Dealer’s Buying Platform, we buy your watch immediately based on competitive dealer pricing <b>and offer you the option to reacquire it later under agreed terms.</b></p>" +
                "<p>Instead of haggling with a few shops, our platform helps you determine value from a global network of professional watch dealers, ensuring a transparent and market-based price.</p>"

        },
        {
            question: "Do you offer loans against watches?",
            answer: "<p>No, Capital Custodia does not provide loans or financing. We operate a structured asset purchase model where we buy your watch outright and offer you a resale option if you wish to reacquire it later (known as a “Repurchase Agreement” in international financial markets)</p" +
                "<p>This ensures full transparency, avoids hidden interest or repayment structures and ensures you are never under any pressure or obligation to buy back the watch.</p>"
        },
        {
            question: "How is the price of my watch determined?",
            answer: "<p>Your watch is priced through a competitive process involving multiple professional dealers from around the world who simultaniously compete to bid their highest price.</p>" +
                "<p>Global dealers trust our platform to ensure: </p>" +
                "<ul><li>Watches are professionally authenticated</li><li>Legal ownership is checked and confirmed</li><li>Transguard, our partners, handle storage and shipment to any part of the world</li><li>And we buy the watches up-front so we have Custody before thay pay</li></ul>"+
                "<p>This confience encourages dealers to bid higher and ensures your price reflects real market demand rather than a single dealer’s opinion, providing a more transparent and competitive outcome.</p>"

        },
        {
            question: "Is this better than selling my watch to a dealer or pawn shop?",
            answer: "<p>Traditional dealers typically offer a single negotiated price, which may not reflect the full market value of your watch. Their intent is to acquire your watch at the lowest price to maximize their profit margins when they sell. Pawn shops give you the ability to buy back your watch but tend to offer very low market values and charge high interest rates.</p>"+
                "<p>Capital Custodia provides you access to multiple buyers competing simultaniously for your asset. This ensure you receive a fair and market-driven price without the pressure of one-on-one negotiations</p>"
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
            viewport={{ once: true, margin: "-50px" }}
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
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
                title="Contact iLockSecure - Luxury Watch Trading Support | Dubai"
                description="Get in touch with iLockSecure's expert team. Based in Dubai DIFC, we provide 24/7 support for luxury watch trading, valuations, and secure transactions. Contact us today."
                keywords="contact iLockSecure, luxury watch support, Dubai DIFC watch traders, watch trading contact, iLockSecure support team"
                canonical="/contact"
                ogTitle="Contact iLockSecure - Expert Luxury Watch Trading Support"
                ogDescription="Reach our team of luxury watch experts based in Dubai DIFC. Get support for valuations, trading, authentication, and secure transactions."
                ogUrl="https://ilocksecure.com/contact"
            />
            <StructuredData type="localBusiness" />

            <div className="min-h-screen bg-white">


                <Header/>
                <motion.div
                    className={'page-banner position-relative'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src="/images/about.png"
                        className={'img-fluid'}
                        alt="About Banner"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <motion.div
                        className={'page-content text-center text-white'}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        <h1>
                             <span>FAQ</span>
                        </h1>
                    </motion.div>
                </motion.div>

                <div className={'py-5'} style={{backgroundColor: '#003D69'}}>


                    <div className={'question-div py-md-5'}>
                        <div className={'container'}>
                            {/*<div className={'mb-5 text-center'}>
                                <h2 className="features-title">
                                    <strong>Faq's</strong>
                                </h2>

                            </div>*/}


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


                </div>

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

