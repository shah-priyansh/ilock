import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React, { useState } from "react";
import { motion } from 'framer-motion';
import './ContactUs.css';
import SEO from '../components/SEO/SEO';
import StructuredData from '../components/SEO/StructuredData';

// Accordion Component
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "How quickly will I receive payment?",
            answer: "Once you accept our offer, you'll receive payment within 48 hours. We process all transactions securely and efficiently to ensure you get your funds as quickly as possible. Payment methods include bank transfer, wire transfer, or other secure payment options based on your preference."
        },
        {
            question: "Is the shipping process fully insured?",
            answer: "Yes, absolutely. Every watch is fully insured from the moment it leaves your hands until it reaches our secure facility. We partner with leading insurance providers to ensure comprehensive coverage. You'll receive tracking information and insurance details as soon as your watch is in transit."
        },
        {
            question: "What happens if I reject the final offer?",
            answer: "If you decide not to accept our offer, your watch will be returned to you at no cost. We cover all return shipping and insurance costs. There are no obligations or fees - you're free to accept or decline any offer we make. Your watch will be returned in the same condition it was received."
        },
        {
            question: "Do you authenticate every watch?",
            answer: "Yes, every watch undergoes a comprehensive authentication process by certified watch experts. Our team includes members of the Association of Independent Watch Specialists (AIWS) who verify authenticity, condition, and provenance. This authentication is recorded on an immutable NFT for future reference, significantly enhancing your watch's value."
        },
        {
            question: "What brands do you accept?",
            answer: "We accept all major luxury watch brands including Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, Vacheron Constantin, Jaeger-LeCoultre, and many others. Our global dealer network specializes in the best luxury brands, ensuring you receive competitive offers regardless of your watch's make or model."
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {questions.map((item, index) => (
                <div key={index} className="accordion-item">
                    <button
                        className={`accordion-button bg-white rounded-[12px] ${openIndex === index ? 'active' : ''}`}
                        onClick={() => toggleQuestion(index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="accordion-question">{item.question}</span>
                        <span className={`accordion-icon bg-transparent ${openIndex === index ? 'open' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {openIndex === index ? (
                                    <path d="M5 12H19" stroke="#6BC8AC" strokeWidth="2" strokeLinecap="round"/>
                                ) : (
                                    <>
                                        <path d="M12 5V19" stroke="#6BC8AC" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M5 12H19" stroke="#6BC8AC" strokeWidth="2" strokeLinecap="round"/>
                                    </>
                                )}
                            </svg>
                        </span>
                    </button>
                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                        <div className="accordion-answer">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
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

            const data = await response.json();

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

            {/*<div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[85%] mx-auto py-10 xl:py-32 px-3">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-[#000000] font-light mb-4">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-600">
                        Get in touch with our team. We're here to help.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-8">
                     Contact Form
                    <div className="col-span-12 md:col-span-8">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                                Send us a message
                            </h2>
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#83D7F5] focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#83D7F5] hover:bg-[#6BC8AC] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                     Contact Information
                    <div className="col-span-12 md:col-span-4">
                        <div className="bg-[#83D7F5] rounded-3xl p-6 sm:p-8 md:p-10 text-white h-full">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                                Get in Touch
                            </h2>
                            
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Email</h3>
                                    <p className="text-base sm:text-lg">
                                        <a href="mailto:info@ilock.com" className="hover:underline">
                                            info@ilock.com
                                        </a>
                                    </p>
                                    <p className="text-base sm:text-lg mt-2">
                                        <a href="mailto:support@ilock.com" className="hover:underline">
                                            support@ilock.com
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Phone</h3>
                                    <p className="text-base sm:text-lg">
                                        <a href="tel:+1234567890" className="hover:underline">
                                            +1 (234) 567-8900
                                        </a>
                                    </p>
                                    <p className="text-sm sm:text-base mt-2 text-gray-100">
                                        Monday - Friday: 9 AM - 6 PM EST
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Address</h3>
                                    <p className="text-base sm:text-lg">
                                        123 Luxury Watch Street<br />
                                        New York, NY 10001<br />
                                        United States
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            📘
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            📷
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            🐦
                                        </a>
                                        <a href="#" className="text-2xl hover:opacity-80 transition-opacity">
                                            💼
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 Additional Support Section
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-[#9CC2B8] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">💬</div>
                        <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                        <p className="text-sm sm:text-base">
                            Chat with our support team in real-time
                        </p>
                        <button className="mt-4 bg-white text-[#9CC2B8] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Start Chat
                        </button>
                    </div>

                    <div className="bg-[#83D7F5] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                        <p className="text-sm sm:text-base">
                            Book a consultation with our experts
                        </p>
                        <button className="mt-4 bg-white text-[#83D7F5] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Book Now
                        </button>
                    </div>

                    <div className="bg-[#484C52] rounded-3xl p-6 text-white text-center">
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                        <p className="text-sm sm:text-base">
                            Get help via email within 24 hours
                        </p>
                        <button className="mt-4 bg-white text-[#484C52] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Email Us
                        </button>
                    </div>
                </div>
            </div>*/}
            <Header />
            <motion.div
                className={'page-banner position-relative'}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <img src="/images/contact-banner.jpg" className={'img-fluid'} alt="Contact Banner"/>
                <motion.div 
                    className={'page-content text-center text-white'}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={fadeInUp}>
                        How can our concierge<br/> team assist you?
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        Whether you have questions about the process or need help with an existing<br/>
                        valuation, we are here to provide personalized support.
                    </motion.p>
                </motion.div>
            </motion.div>

            <div className={' bg-[#f9f9f9] py-5'}>
                <div className={'contact-div'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <motion.div 
                                className={'col-md-7 col-lg-7 col-xl-8'}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInLeft}
                            >
                                <div className={'contact-form'}>
                                    <motion.div 
                                        className={'cont-title'}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <h3>Send us a Message</h3>
                                    </motion.div>
                                    <motion.form
                                        onSubmit={handleSubmit}
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {message.text && (
                                            <motion.div
                                                className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {message.text}
                                            </motion.div>
                                        )}
                                        <motion.div
                                            className={'mb-4 form-group'}
                                            variants={cardAnimation}
                                        >
                                            <label>Full Name *</label>
                                            <input
                                                type={'text'}
                                                name="fullName"
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </motion.div>
                                        <motion.div
                                            className={'mb-4 form-group'}
                                            variants={cardAnimation}
                                        >
                                            <label>Email Address *</label>
                                            <input
                                                type={'email'}
                                                name="email"
                                                className="form-control"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </motion.div>
                                        <motion.div
                                            className={'mb-4 form-group'}
                                            variants={cardAnimation}
                                        >
                                            <label>Subject *</label>
                                            <select
                                                className={'form-control'}
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="General Question">General Question</option>
                                                <option value="Watch Valuation">Watch Valuation</option>
                                                <option value="Selling Process">Selling Process</option>
                                                <option value="Payment Inquiry">Payment Inquiry</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </motion.div>
                                        <motion.div
                                            className={'mb-4 form-group'}
                                            variants={cardAnimation}
                                        >
                                            <label>Message *</label>
                                            <textarea
                                                className={'form-control'}
                                                rows={'4'}
                                                name="message"
                                                placeholder={'Tell us how we can help...'}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </motion.div>
                                        <motion.div
                                            className={'mb-4 form-btn-div'}
                                            variants={cardAnimation}
                                        >
                                            <motion.button
                                                type="submit"
                                                className={'btn'}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                disabled={loading}
                                            >
                                                {loading ? 'Sending...' : 'Send Request'}
                                            </motion.button>
                                        </motion.div>
                                    </motion.form>
                                </div>
                            </motion.div>
                            <motion.div 
                                className={'col-md-5 col-lg-5 col-xl-4'}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInRight}
                            >
                                <motion.div 
                                    className={'cont-title'}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <h3>Direct Channels</h3>
                                </motion.div>
                                <motion.div 
                                    className={'contact-detail-div'}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.div 
                                        className={'contact-box mb-5'}
                                        variants={cardAnimation}
                                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                    >
                                        <div className={'icon-box'}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.72969 1.15418C7.36875 0.282307 6.41719 -0.181756 5.50781 0.0666819L1.38281 1.19168C0.567187 1.41668 0 2.15731 0 3.00106C0 14.5979 9.40312 24.0011 21 24.0011C21.8438 24.0011 22.5844 23.4339 22.8094 22.6182L23.9344 18.4932C24.1828 17.5839 23.7188 16.6323 22.8469 16.2714L18.3469 14.3964C17.5828 14.0776 16.6969 14.2979 16.1766 14.9401L14.2828 17.2511C10.9828 15.6901 8.31094 13.0182 6.75 9.71824L9.06094 7.82918C9.70312 7.30418 9.92344 6.42293 9.60469 5.65887L7.72969 1.15887V1.15418Z"
                                                    fill="#484C52"/>
                                            </svg>
                                        </div>
                                        <div className={'contact-detail-box'}>
                                            <h4>Speak to a Specialist</h4>
                                            <p>+971 4 123 4567</p>
                                            <span>Monday - Friday, 9am - 6pm (GMT+4)</span>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className={'contact-box mb-5'}
                                        variants={cardAnimation}
                                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                    >
                                        <div className={'icon-box'}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.25 3C1.00781 3 0 4.00781 0 5.25C0 5.95781 0.332812 6.62344 0.9 7.05L11.1 14.7C11.6344 15.0984 12.3656 15.0984 12.9 14.7L23.1 7.05C23.6672 6.62344 24 5.95781 24 5.25C24 4.00781 22.9922 3 21.75 3H2.25V3ZM0 8.25V18C0 19.6547 1.34531 21 3 21H21C22.6547 21 24 19.6547 24 18V8.25L13.8 15.9C12.7312 16.7016 11.2688 16.7016 10.2 15.9L0 8.25Z"
                                                    fill="#484C52"/>
                                            </svg>

                                        </div>
                                        <div className={'contact-detail-box'}>
                                            <h4>Email Support</h4>
                                            <p>info@ilocksecure.com</p>
                                            <span>We respond within 24 hours</span>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className={'contact-box mb-5'}
                                        variants={cardAnimation}
                                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                    >
                                        <div className={'icon-box'}>
                                            <svg width="18" height="24" viewBox="0 0 18 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.1109 23.4C12.5156 20.3906 18 13.0969 18 9C18 4.03125 13.9688 0 9 0C4.03125 0 0 4.03125 0 9C0 13.0969 5.48438 20.3906 7.88906 23.4C8.46562 24.1172 9.53437 24.1172 10.1109 23.4ZM9 6C10.6557 6 12 7.34425 12 9C12 10.6557 10.6557 12 9 12C7.34425 12 6 10.6557 6 9C6 7.34425 7.34425 6 9 6Z"
                                                    fill="#484C52"/>
                                            </svg>
                                        </div>
                                        <div className={'contact-detail-box'}>
                                            <h4>Global Headquarters</h4>
                                            <p>Dubai International Financial Centre</p>
                                            <span>DIFC, Dubai, United Arab Emirates</span>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className={'contact-box mb-5'}
                                        variants={cardAnimation}
                                        whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                    >
                                        <div className={'icon-box'}>
                                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.8547 4.55156C15.8906 2.58281 13.275 1.5 10.4953 1.5C4.75781 1.5 0.0890625 6.16875 0.0890625 11.9062C0.0890625 13.7391 0.567187 15.5297 1.47656 17.1094L0 22.5L5.51719 21.0516C7.03594 21.8813 8.74688 22.3172 10.4906 22.3172H10.4953C16.2281 22.3172 21 17.6484 21 11.9109C21 9.13125 19.8187 6.52031 17.8547 4.55156ZM10.4953 20.5641C8.93906 20.5641 7.41563 20.1469 6.08906 19.3594L5.775 19.1719L2.50312 20.0297L3.375 16.8375L3.16875 16.5094C2.30156 15.1312 1.84687 13.5422 1.84687 11.9062C1.84687 7.13906 5.72813 3.25781 10.5 3.25781C12.8109 3.25781 14.9812 4.15781 16.6125 5.79375C18.2437 7.42969 19.2469 9.6 19.2422 11.9109C19.2422 16.6828 15.2625 20.5641 10.4953 20.5641ZM15.2391 14.0859C14.9812 13.9547 13.7016 13.3266 13.4625 13.2422C13.2234 13.1531 13.05 13.1109 12.8766 13.3734C12.7031 13.6359 12.2063 14.2172 12.0516 14.3953C11.9016 14.5687 11.7469 14.5922 11.4891 14.4609C9.96094 13.6969 8.95781 13.0969 7.95 11.3672C7.68281 10.9078 8.21719 10.9406 8.71406 9.94687C8.79844 9.77344 8.75625 9.62344 8.69063 9.49219C8.625 9.36094 8.10469 8.08125 7.88906 7.56094C7.67812 7.05469 7.4625 7.125 7.30312 7.11562C7.15312 7.10625 6.97969 7.10625 6.80625 7.10625C6.63281 7.10625 6.35156 7.17188 6.1125 7.42969C5.87344 7.69219 5.20312 8.32031 5.20312 9.6C5.20312 10.8797 6.13594 12.1172 6.2625 12.2906C6.39375 12.4641 8.09531 15.0891 10.7063 16.2188C12.3562 16.9312 13.0031 16.9922 13.8281 16.8703C14.3297 16.7953 15.3656 16.2422 15.5813 15.6328C15.7969 15.0234 15.7969 14.5031 15.7312 14.3953C15.6703 14.2781 15.4969 14.2125 15.2391 14.0859Z"
                                                    fill="#484C52"/>
                                            </svg>

                                        </div>
                                        <div className={'contact-detail-box'}>
                                            <h4>WhatsApp Support</h4>
                                            <p>+971 50 123 4567</p>
                                            <span>Instant messaging available</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div 
                    className={'container py-5'}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <hr className={'border-black border-b-1'}/>
                </motion.div>

                <div className={'question-div'}>
                    <div className={'container'}>
                        <motion.div 
                            className={'ready-content mb-5'}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h1 className={'mb-3 text-center'}>
                                Common Questions
                            </h1>
                        </motion.div>

                        <motion.div 
                            className={'accordion-div'}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Accordion />
                        </motion.div>
                    </div>
                </div>


            </div>

            <motion.div 
                className={'ready-section py-5 py-md-5 my-md-5 text-center'}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <div className={'container'}>
                    <motion.div 
                        className={'ready-content mb-5'}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            className={'mb-3'}
                            variants={fadeInUp}
                        >
                            Ready to get your cash offer?
                        </motion.h1>
                        <motion.p variants={fadeInUp}>
                            Join thousands of satisfied sellers who got the best price for their luxury timepieces
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className={'ready-btn-div text-center'}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.button 
                            className={'btn mb-3'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get your free valuation now
                        </motion.button>
                        <p>100% Secured & Confidential</p>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
        </>
    );
}

