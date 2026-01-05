import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Footer from "../Footer/Footer";
import SEO from '../SEO/SEO';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export default function LandingPage() {
    const [formData, setFormData] = useState({
        watchBrand: '',
        modelName: '',
        phone: '',
        email: '',
        photos: []
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                photos: Array.from(files)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            // Create FormData for file upload
            const submitData = new FormData();
            submitData.append('watchBrand', formData.watchBrand);
            submitData.append('modelName', formData.modelName);
            submitData.append('phone', formData.phone);
            submitData.append('email', formData.email);
            if (formData.photos.length > 0) {
                formData.photos.forEach((photo) => {
                    submitData.append('photos', photo);
                });
            }

            const response = await fetch('http://localhost:3001/api/submit-valuation', {
                method: 'POST',
                body: submitData
            });

            const data = await response.json();

            if (data.success) {
                setMessage({ type: 'success', text: data.message });
                // Reset form
                setFormData({
                    watchBrand: '',
                    modelName: '',
                    phone: '',
                    email: '',
                    photos: []
                });
                // Reset file input
                const fileInput = document.getElementById('Upload_Photo');
                if (fileInput) fileInput.value = '';
            } else {
                setMessage({ type: 'error', text: data.message });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({
                type: 'error',
                text: 'Failed to submit request. Please try again later.'
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
                staggerChildren: 0.2
            }
        }
    };

    const cardAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <SEO
                title="Discover Your Watch's True Value - Get Instant Cash Offer | iLockSecure"
                description="Get a valuation for your luxury watch in minutes. Upload photos, receive competitive offers from global dealers. Rolex, AP, Patek Philippe & all luxury brands."
                keywords="luxury watch valuation, watch appraisal, sell my Rolex, watch price estimate, luxury timepiece quote, online watch valuation"
                canonical="/sell-luxury-watches"
                ogTitle="Watch Valuation - Discover Your Watch's True Value | iLockSecure"
                ogDescription="Upload your watch details and photos to receive instant competitive offers from verified global dealers. Simple, secure, and free."
                ogUrl="https://ilocksecure.com/sell-luxury-watches"
            />

            <div className="landing-page">

                <div id="valuation-form" className={'landing-form-div py-5'}
                    style={{ backgroundImage: `url('/images/landing-img.jpg')` }}
                >
                    <div className={'container py-5'}>
                        <div className={'row'}>
                            <div className={'col-md-6 col-lg-6 col-xl-7'}>
                                <div className={'lf-left text-white mb-5 mb-sm-5 mb-md-0'}>
                                    <motion.div
                                        className={'landing-logo mb-3 mb-md-5 mt-[-60px]'}
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeInUp}
                                    >
                                        <Link to="/">
                                            <img src="/images/logo.svg" alt={'img'} width={'250'}
                                                className={'img-fluid'} />
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        className={'lf-content mb-3 mb-md-5'}
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeInUp}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h1 className={'mb-3'}>
                                            Sell Your Luxury<br />
                                            Watch for<br />
                                            Immediate Cash.<br />
                                        </h1>
                                        <p>
                                            Highest market prices guaranteed. Safe custody
                                            by TransGuard.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className={'lf-points-div mt-3'}
                                        variants={staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <div className={'row'}>
                                            <motion.div
                                                className={'col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mb-3'}
                                                variants={cardAnimation}
                                            >
                                                <div className={'lfp-box'}>
                                                    <div>
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="55.5556" height="55.5556" rx="27.7778"
                                                                fill="#6BC8AC" />
                                                            <path
                                                                d="M36.1606 21.895C36.6489 22.3833 36.6489 23.1763 36.1606 23.6646L26.1606 33.6646C25.6724 34.1528 24.8794 34.1528 24.3911 33.6646L19.3911 28.6646C18.9028 28.1763 18.9028 27.3833 19.3911 26.895C19.8794 26.4067 20.6724 26.4067 21.1606 26.895L25.2778 31.0083L34.395 21.895C34.8833 21.4067 35.6763 21.4067 36.1646 21.895H36.1606Z"
                                                                fill="white" />
                                                        </svg>

                                                    </div>
                                                    <h3>
                                                        Global Market<br />
                                                        Pricing
                                                    </h3>
                                                    <p>
                                                        Real-time valuations from<br />
                                                        international exchanges
                                                    </p>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                className={'col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mb-3'}
                                                variants={cardAnimation}
                                            >
                                                <div className={'lfp-box'}>
                                                    <div>
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="55.5556" height="55.5556" rx="27.7778"
                                                                fill="#6BC8AC" />
                                                            <path
                                                                d="M32.6762 19.5199C32.9066 18.9847 32.7348 18.3597 32.2621 18.016C31.7895 17.6722 31.1449 17.7035 30.7035 18.0863L20.7035 26.8363C20.3129 27.18 20.1723 27.7308 20.3559 28.2152C20.5395 28.6996 21.0082 29.0277 21.5277 29.0277H25.8832L22.8793 36.0355C22.6488 36.5707 22.8207 37.1957 23.2934 37.5394C23.766 37.8832 24.4106 37.8519 24.852 37.4691L34.852 28.7191C35.2426 28.3754 35.3832 27.8246 35.1996 27.3402C35.016 26.8558 34.5512 26.5316 34.0277 26.5316H29.6723L32.6762 19.5199Z"
                                                                fill="white" />
                                                        </svg>


                                                    </div>
                                                    <h3>
                                                        24-Hour
                                                        <br />
                                                        Payment
                                                    </h3>
                                                    <p>
                                                        Fast cash transfer after
                                                        <br />
                                                        authentication
                                                    </p>
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                className={'col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mb-3'}
                                                variants={cardAnimation}
                                            >
                                                <div className={'lfp-box'}>
                                                    <div>
                                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="55.5556" height="55.5556" rx="27.7778"
                                                                fill="#6BC8AC" />
                                                            <path
                                                                d="M24.6528 23.4028V25.2778H30.9028V23.4028C30.9028 21.6763 29.5044 20.2778 27.7778 20.2778C26.0513 20.2778 24.6528 21.6763 24.6528 23.4028ZM22.1528 25.2778V23.4028C22.1528 20.2974 24.6724 17.7778 27.7778 17.7778C30.8833 17.7778 33.4028 20.2974 33.4028 23.4028V25.2778H34.0278C35.4067 25.2778 36.5278 26.3989 36.5278 27.7778V35.2778C36.5278 36.6567 35.4067 37.7778 34.0278 37.7778H21.5278C20.1489 37.7778 19.0278 36.6567 19.0278 35.2778V27.7778C19.0278 26.3989 20.1489 25.2778 21.5278 25.2778H22.1528Z"
                                                                fill="white" />
                                                        </svg>
                                                    </div>
                                                    <h3>
                                                        Fully Insured
                                                        <br />
                                                        Transit
                                                    </h3>
                                                    <p>
                                                        Protected by TransGuard custody
                                                        <br />
                                                        services
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                            <motion.div
                                className={'col-md-6 col-lg-6 col-xl-5'}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInRight}
                                transition={{ delay: 0.3 }}
                            >
                                <div className={'landing-form'}>
                                    <div className={'lf-head text-center mb-4'}>
                                        <h4>Get Your Free Valuation</h4>
                                        <p>
                                            Receive a cash offer in 24 hours
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        {message.text && (
                                            <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} mb-3`}>
                                                {message.text}
                                            </div>
                                        )}
                                        <div className={'mb-3 form-group'}>
                                            <label>Watch Brand *</label>
                                            <select
                                                className={'form-control'}
                                                name="watchBrand"
                                                value={formData.watchBrand}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select Brand</option>
                                                <option value="Rolex">Rolex</option>
                                                <option value="Patek Philippe">Patek Philippe</option>
                                                <option value="Audemars Piguet">Audemars Piguet</option>
                                                <option value="Omega">Omega</option>
                                                <option value="Cartier">Cartier</option>
                                                <option value="TAG Heuer">TAG Heuer</option>
                                                <option value="Breitling">Breitling</option>
                                                <option value="IWC">IWC</option>
                                                <option value="Panerai">Panerai</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className={'mb-3 form-group'}>
                                            <label>Model Name *</label>
                                            <input
                                                className={'form-control'}
                                                placeholder={'e.g., Submariner, Nautilus'}
                                                name="modelName"
                                                value={formData.modelName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className={'mb-3 form-group'}>
                                            <label>Upload Photos (Optional)</label>
                                            <div className={'relative'}>
                                                <input
                                                    type={'file'}
                                                    className={'form-control d-none'}
                                                    id={'Upload_Photo'}
                                                    name="photo"
                                                    accept="image/png,image/jpeg,image/jpg"
                                                    onChange={handleInputChange}
                                                    multiple
                                                />
                                                <label
                                                    className={'attach-box d-flex flex-column gap-1 border border-2 border-dashed rounded-3 p-4 justify-content-center align-items-center'}
                                                    htmlFor={'Upload_Photo'}>
                                                    <div>
                                                        <svg width="45" height="32" viewBox="0 0 45 32" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.125 31.5C4.53516 31.5 0 26.9648 0 21.375C0 16.9594 2.82656 13.2047 6.76406 11.8195C6.75703 11.6297 6.75 11.4398 6.75 11.25C6.75 5.03438 11.7844 0 18 0C22.1695 0 25.8047 2.26406 27.7523 5.63906C28.8211 4.92188 30.1148 4.5 31.5 4.5C35.2266 4.5 38.25 7.52344 38.25 11.25C38.25 12.1078 38.0883 12.9234 37.8 13.6828C41.9062 14.5125 45 18.1477 45 22.5C45 27.4711 40.9711 31.5 36 31.5H10.125ZM15.6797 16.2422C15.0188 16.9031 15.0188 17.9719 15.6797 18.6258Cnan nan 17.4094 19.2867 18.0633 18.6258L20.8055 15.8836V25.3125C20.8055 26.2477 21.5578 27 22.493 27Cnan nan 24.1805 26.2477 24.1805 25.3125V15.8836L26.9227 18.6258C27.5836 19.2867 28.6523 19.2867 29.3062 18.6258Cnan nan 29.9672 16.8961 29.3062 16.2422L23.6812 10.6172C23.0203 9.95625 21.9516 9.95625 21.2977 10.6172L15.6727 16.2422H15.6797Z"
                                                                fill="#9CA3AF" />
                                                        </svg>


                                                    </div>
                                                    <div className={'text-sm text-[#4B5563]'}>Click to upload or drag and
                                                        drop
                                                    </div>
                                                    <div className={'text-xs text-[#6B7280]'}>PNG, JPG up to 10MB (Multiple files allowed)</div>
                                                </label>
                                                {formData.photos.length > 0 && (
                                                    <div className={'mt-3 p-3 bg-light rounded'}>
                                                        <div className={'text-sm fw-bold mb-2'}>Selected files ({formData.photos.length}):</div>
                                                        <ul className={'list-unstyled mb-0'}>
                                                            {formData.photos.map((photo, index) => (
                                                                <li key={index} className={'text-sm text-muted d-flex align-items-center gap-2'}>
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.48528 4.98528L5.48528 7.98528C5.34343 8.12714 5.15657 8.19807 4.96971 8.19807C4.78286 8.19807 4.596 8.12714 4.45414 7.98528L3.45414 6.98528C3.17014 6.70129 3.17014 6.24343 3.45414 5.95943C3.73814 5.67543 4.196 5.67543 4.48 5.95943L4.96971 6.44914L7.45943 3.95943C7.74343 3.67543 8.20129 3.67543 8.48528 3.95943C8.76928 4.24343 8.76928 4.70129 8.48528 4.98528Z" fill="#10B981" />
                                                                    </svg>
                                                                    {photo.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'mb-3 form-group'}>
                                            <label>Phone Number *</label>
                                            <input
                                                className={'form-control'}
                                                placeholder={'e.g., +1 (555) 123-4567'}
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className={'mb-3 form-group'}>
                                            <label>Email Address *</label>
                                            <input
                                                className={'form-control'}
                                                placeholder={'e.g., you@example.com'}
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className={'mb-3 form-group'}>
                                            <button className={'btn'} type="submit" disabled={loading}>
                                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.11748 0C5.73975 0 6.24248 0.502734 6.24248 1.125V2.38008C6.29873 2.38711 6.35147 2.39414 6.40772 2.40469C6.42178 2.4082 6.43233 2.4082 6.44639 2.41172L8.13389 2.72109C8.74561 2.83359 9.1499 3.4207 9.0374 4.02891C8.9249 4.63711 8.33779 5.04492 7.72959 4.93242L6.05967 4.62656C4.95928 4.46484 3.98897 4.57383 3.30694 4.84453C2.6249 5.11523 2.35069 5.48789 2.2874 5.83242C2.21709 6.20859 2.26983 6.41953 2.32959 6.54961C2.39287 6.68672 2.52295 6.84141 2.77959 7.01367C3.35264 7.38984 4.23154 7.63594 5.37061 7.93828L5.47256 7.96641C6.47803 8.23359 7.7085 8.55703 8.62256 9.15469C9.12178 9.48164 9.59287 9.92461 9.88467 10.5434C10.1835 11.1727 10.2468 11.8758 10.1097 12.6246C9.86709 13.9605 8.946 14.8535 7.80342 15.3211C7.32178 15.518 6.79795 15.6445 6.24248 15.7078V16.875C6.24248 17.4973 5.73975 18 5.11748 18C4.49522 18 3.99248 17.4973 3.99248 16.875V15.648C3.97842 15.6445 3.96084 15.6445 3.94678 15.641H3.93975V15.641C3.08194 15.5074 1.67217 15.1383 0.722951 14.7164C0.156936 14.4633 -0.0997051 13.7988 0.15342 13.2328C0.406545 12.6668 1.071 12.4102 1.63701 12.6633C2.37178 12.9902 3.58115 13.3137 4.28076 13.4227C5.40225 13.5879 6.32686 13.493 6.95264 13.2363C7.54678 12.9938 7.81748 12.6422 7.89483 12.2203C7.96162 11.8477 7.90889 11.6332 7.84912 11.5031C7.78233 11.3625 7.65225 11.2078 7.39209 11.0355C6.81553 10.6594 5.93311 10.4133 4.79053 10.1109L4.69209 10.0863V10.0863C3.69014 9.81914 2.45967 9.49219 1.54561 8.89453C1.04639 8.56758 0.578811 8.12109 0.287014 7.50234C-0.00829881 6.87305 -0.0680644 6.16992 0.0725606 5.42109C0.325686 4.07813 1.33115 3.20625 2.47373 2.75273C2.94131 2.56641 3.45459 2.43984 3.99248 2.36602V1.125C3.99248 0.502734 4.49522 0 5.11748 0V0"
                                                        fill="white" />
                                                </svg>

                                                {loading ? 'Submitting...' : 'Get Cash Offer Now'}
                                            </button>
                                        </div>
                                        <div className={'d-flex gap-2 align-items-center justify-content-center small'}>
                                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.375 3.375V4.5H7.125V3.375C7.125 2.33906 6.28594 1.5 5.25 1.5C4.21406 1.5 3.375 2.33906 3.375 3.375ZM1.875 4.5V3.375C1.875 1.51172 3.38672 0 5.25 0C7.11328 0 8.625 1.51172 8.625 3.375V4.5H9C9.82734 4.5 10.5 5.17266 10.5 6V10.5C10.5 11.3273 9.82734 12 9 12H1.5C0.672656 12 0 11.3273 0 10.5V6C0 5.17266 0.672656 4.5 1.5 4.5H1.875Z"
                                                    fill="#6B7280" />
                                            </svg>

                                            Your information is 100% secure and confidential
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className={'howit py-5 my-md-5'}>
                    <div className={'container'}>
                        <motion.div
                            className="ready-content text-center mb-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h1 className="mb-3">How It Works</h1>
                            <p>Get paid in 3 simple steps</p>
                        </motion.div>
                        <motion.div
                            className={'row text-black'}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.div
                                className={'col-sm-4 col-md-4 mb-4 mb-sm-4 mb-md-0'}
                                variants={cardAnimation}
                            >
                                <motion.div
                                    className={'howit-box text-center'}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className={'hi-icon mx-auto mb-4'}>
                                        <svg width="50" height="42" viewBox="0 0 50 42" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M36.8071 34.6369V26.159L42.0843 20.9012V36.3467C42.0843 39.4363 39.5111 42 36.4778 42H5.60645C2.50559 42 0 39.4363 0 36.3467V5.65328C0 2.56375 2.5077 0 5.60645 0H36.9401V0.0651981L31.6629 5.25789H7.38802C6.26715 5.25789 5.27716 6.24427 5.27716 7.42624V34.6369C5.27716 35.8209 6.26715 36.74 7.38802 36.74H34.6984C35.8192 36.74 36.8071 35.8188 36.8071 34.6369ZM41.8204 2.56375L47.4269 8.14973L50 5.58598L44.3935 0L41.8204 2.56375ZM22.0965 22.2808L27.6375 27.8668L45.5144 10.0552L39.9734 4.4692L22.0965 22.2808ZM18.1386 31.745L25.7905 29.7071L20.1841 24.1211L18.1386 31.745Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <h4>Submit Details</h4>
                                    <p>
                                        Enter your watch information and
                                        upload photos for accurate valuation
                                    </p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className={'col-sm-4 col-md-4 mb-4 mb-sm-4 mb-md-0'}
                                variants={cardAnimation}
                            >
                                <motion.div
                                    className={'howit-box text-center'}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className={'hi-icon mx-auto mb-4'}>
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M53 53H11.8889C8.77747 53 7.22178 53 6.03339 52.3944C4.98803 51.8619 4.13814 51.0119 3.60553 49.9667C3 48.7783 3 47.2225 3 44.1111V3M14.1111 36.3333L28 19.6667L39.1111 30.7778L53 14.1111"
                                                stroke="white" stroke-width="6" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <h4>Get Offer</h4>
                                    <p>
                                        Receive highest global market price
                                        within minutes of submission
                                    </p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className={'col-sm-4 col-md-4 mb-4 mb-sm-4 mb-md-0'}
                                variants={cardAnimation}
                            >
                                <motion.div
                                    className={'howit-box text-center'}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className={'hi-icon mx-auto mb-4'}>
                                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M26.4998 1.5V18.1667M26.4998 1.5L19.5554 8.44444M26.4998 1.5L33.4441 8.44444M9.34251 18.1677C10.4952 19.1856 11.2221 20.6746 11.2221 22.3333C11.2221 25.4017 8.73485 27.8889 5.66663 27.8889C4.00789 27.8889 2.51896 27.1619 1.50103 26.0092M9.34251 18.1677C9.67059 18.1667 10.0187 18.1667 10.3888 18.1667H15.3888M9.34251 18.1677C6.9125 18.1752 5.58038 18.2387 4.53336 18.7722C3.48801 19.3048 2.63813 20.1547 2.10552 21.2C1.57203 22.2472 1.50856 23.5792 1.50103 26.0092M1.50103 26.0092C1.5 26.3372 1.5 26.6856 1.5 27.0556V42.6111C1.5 42.9811 1.5 43.3294 1.50103 43.6575M1.50103 43.6575C2.51896 42.5047 4.00789 41.7778 5.66663 41.7778C8.73485 41.7778 11.2221 44.265 11.2221 47.3333C11.2221 48.9919 10.4952 50.4811 9.34251 51.4989M1.50103 43.6575C1.50856 46.0875 1.57203 47.4197 2.10552 48.4667C2.63813 49.5119 3.48801 50.3619 4.53336 50.8944C5.58038 51.4281 6.9125 51.4914 9.34251 51.4989M9.34251 51.4989C9.67059 51.5 10.0187 51.5 10.3888 51.5H42.6107C42.9807 51.5 43.329 51.5 43.6571 51.4989M43.6571 51.4989C42.5043 50.4811 41.7774 48.9919 41.7774 47.3333C41.7774 44.265 44.2646 41.7778 47.3329 41.7778C48.992 41.7778 50.4815 42.5053 51.4995 43.6586M43.6571 51.4989C46.0871 51.4914 47.4193 51.4281 48.4662 50.8944C49.5115 50.3619 50.3615 49.5119 50.894 48.4667C51.4273 47.4197 51.492 46.0878 51.4995 43.6586M51.4995 43.6586C51.5006 43.3303 51.4995 42.9817 51.4995 42.6111V27.0556C51.4995 26.6856 51.4995 26.3372 51.4984 26.0092M51.4984 26.0092C50.4806 27.1619 48.9915 27.8889 47.3329 27.8889C44.2646 27.8889 41.7774 25.4017 41.7774 22.3333C41.7774 20.6746 42.5043 19.1856 43.6571 18.1677M51.4984 26.0092C51.4909 23.5792 51.4276 22.2472 50.894 21.2C50.3615 20.1547 49.5115 19.3048 48.4662 18.7722C47.4193 18.2387 46.0871 18.1752 43.6571 18.1677M43.6571 18.1677C43.329 18.1667 42.9807 18.1667 42.6107 18.1667H37.6108M32.0553 34.8333C32.0553 37.9017 29.5681 40.3889 26.4998 40.3889C23.4315 40.3889 20.9443 37.9017 20.9443 34.8333C20.9443 31.765 23.4315 29.2778 26.4998 29.2778C29.5681 29.2778 32.0553 31.765 32.0553 34.8333Z"
                                                stroke="white" stroke-width="3" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <h4>Get Paid</h4>
                                    <p>
                                        Immediate cash transfer upon
                                        verification and authentication
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <section className="secure-storage-section" style={{ backgroundColor: '#484C52' }}>
                    <div className="container-fluid px-0 overflow-hidden">
                        <div className="row align-items-center">
                            <motion.div
                                className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInRight}
                            >
                                <motion.img
                                    src="/images/custody2.jpg"
                                    className="img-fluid w-100"
                                    alt="Secure Storage"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            <div className="col-md-6 order-2 order-sm-2 order-md-1">
                                <div className="section-content left-custom-padding animated wow fadeInLeft">
                                    <div className="sec-tag mb-5">
                                        <motion.span
                                            className="text-white"
                                            initial={{ opacity: 0, y: 50, borderColor: "transparent" }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                borderColor: "#0290C4"
                                            }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut",
                                                borderColor: { duration: 0.8, delay: 0.2 }
                                            }}
                                        >
                                            Secure Storage
                                        </motion.span>
                                    </div>
                                    <motion.h1
                                        className="mb-3 text-white"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    >
                                        Custody by<br />
                                        TransGuard
                                    </motion.h1>
                                    <motion.div
                                        className="sec-pra"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    >
                                        <p className="text-white">
                                            We've partnered with the best in the business!
                                        </p>
                                        <p className="text-white">
                                            TransGuard is the trusted custodian of banks, bullion investors and jewelers and
                                            holds Billions of dollars in Cash and valuables in their ultra-secured sites
                                            across the country
                                        </p>
                                        <p className="text-white">
                                            Your assets are not only insured and stored under the highest levels of security
                                            available in the country, your ownership is also assured via your unique Digital
                                            NFT (Non-fungible Token) stored on the blockchain and accessible only by you
                                        </p>
                                    </motion.div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="our-globle-section custom-padding" style={{ backgroundColor: 'rgb(149, 219, 247)' }}>
                    <div className="container overflow-hidden">
                        <div className="row align-items-center">

                            <motion.div
                                className="col-md-12 mb-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                            >
                                <div className="section-content">
                                    <motion.h1
                                        className="mb-3 text-white text-center"
                                        variants={fadeInUp}
                                    >
                                        Our global dealer network<br />
                                        specilizes in the best luxury brands
                                    </motion.h1>
                                </div>
                            </motion.div>
                            <div className="col-md-12 text-center">
                                <VideoPlayer src="/images/brandscoin.mp4" className="img-fluid mx-auto" />
                            </div>
                        </div>
                        <div className={'py-5'}>
                            <hr className={'border-white border-1 opacity-100'} />
                        </div>
                        <div className="">
                            <div className="container">
                                <motion.h2
                                    className="display-4 text-center text-white mb-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                >
                                    Trusted by Collectors Worldwide
                                </motion.h2>
                                <motion.p
                                    className="section-subheadline white centered"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                    transition={{ delay: 0.2 }}
                                >
                                    Our reputation is built on thousands of successful, secure, and transparent
                                    transactions.
                                </motion.p>
                                <motion.div
                                    className="testimonials-container"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                >
                                    <motion.div
                                        className="p-4 rounded-4 bg-white bg-opacity-75"
                                        variants={cardAnimation}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    >
                                        <div className="stars flex gap-1">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>


                                        </div>
                                        <p className="text-base text-center text-[#374151] mb-2">
                                            "Exceptional service from start to finish. The valuation was fair,
                                            and the entire process was transparent and secure."
                                        </p>
                                        <p className="testimonial-author text-center">-Robert S.</p>
                                    </motion.div>
                                    <motion.div
                                        className="p-4 rounded-4 bg-white bg-opacity-75"
                                        variants={cardAnimation}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    >
                                        <div className="stars flex gap-1">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>


                                        </div>
                                        <p className="text-base text-center text-[#374151] mb-2">
                                            "I was hesitant to send my Patek online, but TransGuard's security gave me peace
                                            of mind. Got paid instantly."
                                        </p>
                                        <p className="testimonial-author text-center">- Sarah L.</p>
                                    </motion.div>
                                    <motion.div
                                        className="p-4 rounded-4 bg-white bg-opacity-75"
                                        variants={cardAnimation}
                                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    >
                                        <div className="stars flex gap-1">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>

                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                                                    fill="#CCA35A" />
                                            </svg>


                                        </div>
                                        <p className="text-base text-center text-[#374151] mb-2">
                                            "The best service for selling luxury
                                            watches, period. Professional, fast, and
                                            offered the highest price."
                                        </p>
                                        <p className="testimonial-author text-center">- Michael P.</p>
                                    </motion.div>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Security Section */}
                <div style={{ backgroundColor: '#9CC2B8' }} className={'overflow-hidden'}>
                    <div className="container-fluid">
                        <div className="row align-items-center g-0">
                            <motion.div
                                className="col-12 col-md-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInLeft}
                            >
                                <div className="p-4 p-lg-5" style={{ paddingLeft: 'clamp(2.5rem, 10vw, 10rem)' }}>
                                    <motion.div
                                        className="d-flex flex-column text-white mb-4"
                                        style={{ gap: '1rem' }}
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <motion.h2
                                            className="display-1 fw-light"
                                            style={{
                                                fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                            }}
                                            variants={fadeInUp}
                                        >
                                            Expert <br />Authentication<br /> & Valuation
                                        </motion.h2>
                                        <motion.div
                                            className="d-flex flex-column"
                                            style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.5rem)',
                                                gap: '1.25rem'
                                            }}
                                            variants={fadeInUp}
                                        >
                                            <p>
                                                Our team of certified horologists uses advanced technology and
                                                decades of expertise to ensure accurate authentication and fair
                                                market valuation.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="row g-3"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className="col-12 col-lg-4"
                                            variants={cardAnimation}
                                        >
                                            <motion.div
                                                className="d-flex flex-column text-white"
                                                style={{ gap: '0.5rem' }}
                                                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                            >
                                                <motion.div
                                                    className="d-flex justify-content-center align-items-center rounded-circle"
                                                    style={{
                                                        width: '55px',
                                                        height: '55px',
                                                        backgroundColor: '#484C52'
                                                    }}
                                                    variants={scaleIn}
                                                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                                                >
                                                    <span className="fw-bold">
                                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.375 18.75H10.0781V19.6875C10.0781 20.2055 10.4977 20.625 11.0156 20.625H13.3594C13.8773 20.625 14.2969 20.2055 14.2969 19.6875V18.75H15C16.0354 18.75 16.875 17.9104 16.875 16.875V3.75C16.875 2.71465 16.0354 1.875 15 1.875V0.9375C15 0.419531 14.5805 0 14.0625 0H10.3125C9.79453 0 9.375 0.419531 9.375 0.9375V1.875C8.33965 1.875 7.5 2.71465 7.5 3.75V16.875C7.5 17.9104 8.33965 18.75 9.375 18.75ZM27.1875 26.25H27.1119C28.9008 24.2572 30 21.6328 30 18.75C30 12.5461 24.9539 7.5 18.75 7.5V11.25C22.8855 11.25 26.25 14.6145 26.25 18.75C26.25 22.8855 22.8855 26.25 18.75 26.25H2.8125C1.25918 26.25 0 27.5092 0 29.0625C0 29.5805 0.419531 30 0.9375 30H29.0625C29.5805 30 30 29.5805 30 29.0625C30 27.5092 28.7408 26.25 27.1875 26.25ZM6.09375 24.375H18.2813C18.5402 24.375 18.75 24.1652 18.75 23.9063V22.9688C18.75 22.7098 18.5402 22.5 18.2813 22.5H6.09375C5.83477 22.5 5.625 22.7098 5.625 22.9688V23.9063C5.625 24.1652 5.83477 24.375 6.09375 24.375Z"
                                                                fill="white" />
                                                        </svg>

                                                    </span>
                                                </motion.div>
                                                <h5 className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                                }}>
                                                    Microscopic
                                                    <br />
                                                    Inspection
                                                </h5>
                                                <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                    Every detail examined under
                                                    high-powered magnification
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div
                                            className="col-12 col-lg-4"
                                            variants={cardAnimation}
                                        >
                                            <motion.div
                                                className="d-flex flex-column text-white"
                                                style={{ gap: '0.5rem' }}
                                                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                            >
                                                <motion.div
                                                    className="d-flex justify-content-center align-items-center rounded-circle"
                                                    style={{
                                                        width: '55px',
                                                        height: '55px',
                                                        backgroundColor: '#484C52'
                                                    }}
                                                    variants={scaleIn}
                                                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                                                >
                                                    <span className="fw-bold">
                                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M12.0886 31.5L15.1345 26.6282C16.0374 25.1829 16.6712 23.5862 17.0051 21.9151L17.1092 21.4017C17.2914 20.4895 17.383 19.5615 17.3827 18.6314V15.6193M1.50037 21.7951C2.38272 20.0306 3.26507 18.1902 3.26507 15.6193C3.26507 12.5491 4.24625 9.70466 5.91213 7.38784M5.91213 27.0887C9.44154 23.5597 10.3239 17.8479 10.3239 15.6193C10.3216 13.8393 10.9921 12.1241 12.201 10.8174C13.4099 9.51068 15.0679 8.70896 16.843 8.57285C18.618 8.43673 20.3789 8.97627 21.7729 10.0834C23.167 11.1905 24.0912 12.7834 24.3604 14.543M30.618 25.3242C31.5004 21.7951 31.5004 18.2661 31.5004 15.6193C31.5009 13.1412 30.849 10.7065 29.6101 8.56014C28.3713 6.41377 26.5892 4.63133 24.4429 3.392C22.2967 2.15267 19.8619 1.50014 17.3835 1.5C14.9051 1.49986 12.4703 2.15212 10.3239 3.39121M24.3604 20.9129C24.0533 23.3709 23.1851 26.5258 20.9121 30.6177"
                                                                stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                    </span>
                                                </motion.div>
                                                <h5 className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                                }}>
                                                    Serial
                                                    <br />
                                                    Verification
                                                </h5>
                                                <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                    Cross-referenced with
                                                    manufacturer database
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                        <motion.div
                                            className="col-12 col-lg-4"
                                            variants={cardAnimation}
                                        >
                                            <motion.div
                                                className="d-flex flex-column text-white"
                                                style={{ gap: '0.5rem' }}
                                                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                            >
                                                <motion.div
                                                    className="d-flex justify-content-center align-items-center rounded-circle"
                                                    style={{
                                                        width: '55px',
                                                        height: '55px',
                                                        backgroundColor: '#484C52'
                                                    }}
                                                    variants={scaleIn}
                                                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                                                >
                                                    <span className="fw-bold">
                                                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M18.9209 18.3338C18.9923 18.0672 18.9557 17.7888 18.8177 17.5497L16.6666 13.8237C16.4825 13.505 16.1393 13.3067 15.7707 13.3067C15.5904 13.3067 15.4121 13.3547 15.2552 13.4454L14.1339 14.0929C13.6782 13.7586 13.1853 13.4721 12.6629 13.2407V11.9488C12.6629 11.379 12.1992 10.9156 11.6296 10.9156H7.32698C6.75736 10.9156 6.29388 11.379 6.29388 11.9488V13.2406C5.77136 13.472 5.2786 13.7586 4.8228 14.0929L3.70145 13.4455C3.54457 13.3548 3.36624 13.3069 3.18593 13.3069C2.8174 13.3069 2.47419 13.5049 2.29008 13.8237L0.138932 17.5497C0.000937874 17.7888 -0.035767 18.0672 0.0355807 18.3338C0.107093 18.6004 0.277998 18.8233 0.516951 18.9611L1.63517 19.6066C1.60506 19.8863 1.58906 20.1701 1.58906 20.4577C1.58906 20.7452 1.60498 21.0291 1.63517 21.3088L0.516951 21.9544C0.277915 22.0923 0.107093 22.3151 0.0355807 22.5818C-0.035767 22.8483 0.000937874 23.1268 0.138932 23.3658L2.29 27.0919C2.4741 27.4106 2.8174 27.6087 3.18585 27.6087C3.36616 27.6087 3.54448 27.5609 3.70137 27.4701L4.8228 26.8227C5.27852 27.1569 5.77136 27.4435 6.2938 27.6749V28.9667C6.2938 29.2427 6.40128 29.5021 6.59651 29.6972C6.79167 29.8923 7.05116 30 7.3269 30H11.6295C12.1992 30 12.6628 29.5364 12.6628 28.9667V27.6748C13.1852 27.4434 13.678 27.1569 14.1337 26.8226L15.2552 27.47C15.412 27.5608 15.5904 27.6086 15.7706 27.6086C16.1393 27.6086 16.4824 27.4107 16.6665 27.0918L18.8176 23.3657C18.9556 23.1267 18.9922 22.8483 18.9209 22.5817C18.8495 22.315 18.6785 22.0922 18.4396 21.9543L17.3214 21.3087C17.3515 21.029 17.3675 20.745 17.3675 20.4575C17.3675 20.17 17.3516 19.8861 17.3214 19.6065L18.4396 18.9609C18.6787 18.8233 18.8496 18.6005 18.9209 18.3338ZM9.4783 24.9447C7.00027 24.9447 4.99156 22.9359 4.99156 20.4578C4.99156 17.98 7.00035 15.9711 9.4783 15.9711C11.9562 15.9711 13.9651 17.98 13.9651 20.4578C13.9651 22.9358 11.9563 24.9447 9.4783 24.9447Z"
                                                                fill="white" />
                                                            <path
                                                                d="M13.2513 7.71982C13.2041 7.89633 13.2284 8.0806 13.3198 8.23863L14.7431 10.7042C14.8651 10.9153 15.0921 11.0462 15.336 11.0462C15.4553 11.0462 15.5732 11.0145 15.6772 10.9545L16.4197 10.5259C16.7211 10.7469 17.0471 10.936 17.3926 11.089V11.9449C17.3926 12.1275 17.4636 12.2992 17.5929 12.4284C17.722 12.5575 17.8937 12.6285 18.0762 12.6285H20.9233C21.3002 12.6285 21.6071 12.3219 21.6071 11.9449V11.089C21.9525 10.9359 22.2785 10.7469 22.5799 10.5258L23.3225 10.9545C23.4263 11.0146 23.5442 11.0462 23.6636 11.0462C23.9075 11.0462 24.1347 10.9152 24.2565 10.7042L25.6798 8.23863C25.7712 8.0806 25.7955 7.89633 25.7483 7.71982C25.7009 7.54339 25.5879 7.39599 25.4298 7.30468L24.6895 6.87726C24.7094 6.69225 24.7203 6.50452 24.7203 6.31431C24.7203 6.1241 24.7094 5.93646 24.6895 5.75136L25.4298 5.32402C25.5879 5.23271 25.7009 5.08523 25.7483 4.9088C25.7955 4.73237 25.7711 4.54819 25.6798 4.38998L24.2565 1.92441C24.1347 1.71342 23.9076 1.58235 23.6636 1.58235C23.5442 1.58235 23.4263 1.61411 23.3225 1.67415L22.5799 2.1029C22.2785 1.88185 21.9526 1.6928 21.6071 1.53979V0.6837C21.6071 0.306754 21.3002 0 20.9233 0H18.0762C17.6993 0 17.3926 0.306754 17.3926 0.6837V1.53971C17.0472 1.6928 16.7211 1.88185 16.4198 2.10282L15.6772 1.67407C15.5732 1.61394 15.4554 1.58227 15.336 1.58227C15.0921 1.58227 14.8651 1.71342 14.7431 1.92432L13.3198 4.3899C13.2284 4.5481 13.2041 4.73229 13.2513 4.90872C13.2986 5.08523 13.4117 5.23263 13.5698 5.32394L14.31 5.75128C14.2902 5.93629 14.2793 6.12402 14.2793 6.31423C14.2793 6.50452 14.2902 6.69216 14.31 6.87717L13.5698 7.3046C13.4117 7.39599 13.2986 7.54339 13.2513 7.71982ZM19.4997 3.34534C21.1395 3.34534 22.4688 4.67463 22.4688 6.31431C22.4688 7.95399 21.1395 9.28328 19.4997 9.28328C17.8599 9.28328 16.5307 7.95399 16.5307 6.31431C16.5307 4.67463 17.8599 3.34534 19.4997 3.34534Z"
                                                                fill="white" />
                                                            <path
                                                                d="M28.6335 17.2782L28.1239 16.984C28.1376 16.8567 28.1451 16.7274 28.1451 16.5964C28.1451 16.4655 28.1376 16.3363 28.1239 16.2088L28.6335 15.9146C28.7423 15.8518 28.8202 15.7503 28.8527 15.6288C28.8853 15.5073 28.8684 15.3806 28.8057 15.2717L27.8258 13.5745C27.7419 13.4292 27.5857 13.339 27.4178 13.339C27.3357 13.339 27.2545 13.3609 27.1829 13.4022L26.6718 13.6973C26.4642 13.5451 26.2399 13.415 26.0021 13.3097V12.7204C26.0021 12.461 25.7909 12.2498 25.5315 12.2498H23.5717C23.3121 12.2498 23.1011 12.461 23.1011 12.7204V13.3097C22.8632 13.415 22.6389 13.5451 22.4314 13.6973L21.9202 13.4022C21.8487 13.3609 21.7675 13.339 21.6853 13.339C21.5175 13.339 21.3611 13.4292 21.2774 13.5745L20.2976 15.2717C20.2345 15.3806 20.2178 15.5073 20.2504 15.6288C20.283 15.7503 20.3608 15.8518 20.4696 15.9146L20.9794 16.2088C20.9656 16.3362 20.9581 16.4654 20.9581 16.5964C20.9581 16.7273 20.9656 16.8565 20.9794 16.9839L20.4696 17.2781C20.3608 17.3408 20.283 17.4422 20.2504 17.5638C20.2178 17.6853 20.2346 17.8122 20.2976 17.9209L21.2774 19.6181C21.3612 19.7634 21.5175 19.8536 21.6853 19.8536C21.7675 19.8536 21.8487 19.8317 21.9202 19.7904L22.4314 19.4953C22.6389 19.6475 22.8632 19.7776 23.1011 19.883V20.4722C23.1011 20.5978 23.15 20.7161 23.2389 20.805C23.3278 20.894 23.4461 20.9429 23.5717 20.9429H25.5315C25.7909 20.9429 26.0021 20.7317 26.0021 20.4722V19.883C26.2399 19.7776 26.4643 19.6475 26.6718 19.4953L27.1829 19.7904C27.2544 19.8317 27.3357 19.8536 27.4178 19.8536C27.5857 19.8536 27.742 19.7634 27.8258 19.6181L28.8057 17.9209C28.8685 17.8122 28.8853 17.6853 28.8527 17.5638C28.8202 17.4424 28.7423 17.3409 28.6335 17.2782ZM24.5516 18.6402C23.4228 18.6402 22.5079 17.725 22.5079 16.5964C22.5079 15.4677 23.4228 14.5526 24.5516 14.5526C25.6804 14.5526 26.5953 15.4677 26.5953 16.5964C26.5953 17.7251 25.6803 18.6402 24.5516 18.6402Z"
                                                                fill="white" />
                                                        </svg>


                                                    </span>
                                                </motion.div>
                                                <h5 className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                                }}>
                                                    Movement
                                                    <br />
                                                    Analysis
                                                </h5>
                                                <p className="small mb-0" style={{ fontSize: '0.875rem' }}>
                                                    Protected by TransGuard custody
                                                    services
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="col-12 col-md-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInRight}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src="/images/expert-auth.jpg" className="img-fluid w-100"
                                        style={{ objectFit: 'cover' }}
                                        alt="Security" />
                                </motion.div>
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
                            <motion.p
                                variants={fadeInUp}
                            >
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
                                onClick={() => document.getElementById('valuation-form').scrollIntoView({ behavior: 'smooth' })}
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
