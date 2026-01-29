import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/SEO';

export default function AboutUs() {
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
                title="About iLockSecure - Redefining Global Luxury Watch Trading"
                description="Learn how iLockSecure revolutionized luxury watch trading with our secure global auction platform. Trusted by collectors worldwide for authentication, highest prices, and buyback options."
                keywords="luxury watch trading company, authenticated watch platform, secure watch marketplace, global watch auction, iLockSecure about us"
                canonical="/about"
                ogTitle="About iLockSecure - Trusted Global Luxury Watch Trading Platform"
                ogDescription="Discover how iLockSecure combines cutting-edge technology with expert authentication to deliver the highest prices for luxury watches. Join thousands of satisfied collectors worldwide."
                ogUrl="https://ilocksecure.com/about"
            />

            <div style={{minHeight: '100vh'}}>
                {/* Header */}
                <Header />

            <motion.div 
                className={'page-banner position-relative'}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <img src="/images/about-banner.jpg" className={'img-fluid'} alt="About Banner"/>
                <motion.div 
                    className={'page-content text-center text-white'}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={fadeInUp}>
                        Redefining how the world<br/>
                        trades luxury timepieces
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        Combining advanced re-commerce technology with legacy wealth expertise
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Mission Section */}
            <div className="bg-white py-5">
                <div className="container">
                    <div className="row align-items-center py-5 py-xl-5">
                        <motion.div
                            className="col-12 col-md-6 mb-4 mb-md-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <motion.img
                                src="/images/our-mission.jpg"
                                className={'img-fluid'}
                                alt="Our Mission"
                                style={{ borderRadius: '30px' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <motion.div
                            className="col-12 col-md-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInRight}
                        >
                            <div className="d-flex flex-column" style={{gap: '1rem'}}>
                                <motion.h1
                                    className="display-1 fw-light text-black mb-3"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                        color: '#000000'
                                    }}
                                    variants={fadeInUp}
                                >
                                    Our Mission
                                </motion.h1>
                                <motion.div
                                    className="d-flex flex-column"
                                    style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                        gap: '1.5rem'
                                    }}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.p variants={fadeInUp}>
                                    The luxury watch market has long been plagued by slow transactions, opaque pricing, and high risk with authentication, ownership and settlement.
                                    </motion.p>
                                    <motion.p variants={fadeInUp}>
                                    Traditional dealers take weeks to assess quality and process sales, leaving sellers vulnerable and uncertain.
                                    </motion.p>
                                    <motion.p variants={fadeInUp}>
                                    iLockSecure was created to solve these problems through technology and trust. We've built a platform that combines instant liquidity with bank-grade security, giving both buyers and sellers the confidence to trade their most valuable assets safely and securely.
                                    </motion.p>
                                    <motion.p
                                        style={{color: '#9CC2B8', fontSize: 'clamp(1.25rem, 2vw, 1.5rem)'}}
                                        variants={fadeInUp}
                                    >
                                        Fast. Fair. Secure. That's the iLock promise.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Core Pillars Section */}
            <div style={{backgroundColor: '#83D7F5'}}>
                <div className="container-fluid px-3">
                    <div className="container" style={{maxWidth: '85%'}}>
                        <div className="py-5 py-xl-5">
                            <motion.h2
                                className="display-1 fw-light text-center mb-5"
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                                    color: '#000000'
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-100px"}}
                                variants={fadeInUp}
                            >
                                Our Core Pillars
                            </motion.h2>
                            <motion.div
                                className="row g-3 g-lg-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-50px"}}
                            >
                                <motion.div
                                    className="col-12 col-sm-6 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '30px'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">
                                               <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
<path
    d="M44.5867 15.2489C42.4369 15.9004 38.706 16.9591 34.7079 17.7834C33.7871 12.186 32.1727 6.60314 31.3962 4.07495C37.1712 5.83806 41.9319 9.92639 44.5867 15.2489Z"
    fill="white"/>
<path
    d="M31.4825 18.3798C29.2193 18.7454 26.9818 18.9844 25 18.9844C23.0181 18.9844 20.7807 18.7454 18.5175 18.3798C19.3847 13.0834 20.9329 7.67304 21.7243 5.09027C21.927 4.42929 22.0075 4.16967 22.147 3.82121C22.2166 3.64712 22.2875 3.48746 22.3868 3.27946C23.2437 3.17746 24.1156 3.125 25 3.125C25.9235 3.125 26.8339 3.18225 27.7275 3.2934C27.7466 3.36592 27.7641 3.43081 27.7814 3.49221C27.8325 3.6736 27.9127 3.92854 28.0472 4.35633L28.0614 4.40127C28.7364 6.54631 30.5245 12.5292 31.4825 18.3798Z"
    fill="white"/>
<path
    d="M15.2916 17.7833C16.2084 12.2106 17.8121 6.65785 18.5872 4.12878L18.6037 4.07495C12.8285 5.83803 8.068 9.92637 5.41309 15.2489C7.56275 15.9004 11.2935 16.9591 15.2916 17.7833Z"
    fill="white"/>
<path
    d="M25 35.3906C26.8269 35.3906 28.8311 35.2077 30.8652 34.9164C30.0033 39.0469 28.9023 42.8646 28.2754 44.9096C28.0729 45.5706 27.9923 45.8302 27.8529 46.1787C27.7833 46.3529 27.7123 46.5125 27.6129 46.7206C26.7563 46.8225 25.8842 46.875 25 46.875C24.1156 46.875 23.2438 46.8225 22.3869 46.7206C22.2875 46.5125 22.2167 46.3529 22.1471 46.1787C22.0077 45.8304 21.9271 45.5706 21.7244 44.9098C21.0977 42.8648 19.9967 39.0473 19.1349 34.9173C21.1623 35.2075 23.1667 35.3906 25 35.3906Z"
    fill="white"/>
<path
    d="M10.4968 33.1789C7.78852 32.505 5.48189 31.8281 4.07483 31.3962C6.19279 38.3337 11.6662 43.8071 18.6037 45.925L18.5872 45.8712C17.9104 43.6629 16.6019 39.1494 15.6705 34.33C13.8593 33.9798 12.0983 33.5773 10.4968 33.1789Z"
    fill="white"/>
<path
    d="M45.8712 31.4127C43.6627 32.0896 39.1489 33.3981 34.3293 34.3294C33.3981 39.1489 32.0893 43.6627 31.4127 45.8712L31.396 45.925C38.3335 43.8071 43.807 38.3337 45.925 31.3962L45.8712 31.4127Z"
    fill="white"/>
<path
    d="M4.1705 18.2994C3.49163 20.4112 3.125 22.6631 3.125 25.0004C3.125 25.915 3.1811 26.8163 3.29006 27.7011L3.63481 27.8161L3.63756 27.8171L3.64094 27.8181L3.64331 27.819C3.75427 27.8556 7.00635 28.9296 11.2891 29.9952C12.4976 30.2959 13.7772 30.5931 15.0835 30.8654C14.7922 28.8315 14.6094 26.8273 14.6094 25.0004C14.6094 23.7481 14.6953 22.4125 14.8432 21.0409C10.4881 20.1554 6.48371 19.0049 4.34577 18.3544L4.3309 18.3499L4.1705 18.2994Z"
    fill="white"/>
<path
    d="M3.35474 27.7567C3.43047 27.7665 3.49219 27.7769 3.51267 27.7815C3.53061 27.7861 3.55872 27.7934 3.5689 27.7963L3.59142 27.8028L3.60355 27.8063L3.6163 27.8103L3.62699 27.8136C3.62099 27.8117 3.49944 27.7813 3.35474 27.7567Z"
    fill="white"/>
<path
    d="M35.1567 21.0409C35.3048 22.4127 35.3907 23.7486 35.3907 25.0004C35.3907 26.8275 35.208 28.8317 34.9165 30.8656C39.0469 30.0038 42.8648 28.9027 44.9098 28.2761C45.5707 28.0734 45.8305 27.9927 46.1788 27.8534C46.353 27.7838 46.5125 27.7129 46.7207 27.6136C46.8225 26.7567 46.875 25.8848 46.875 25.0004C46.875 22.6631 46.5084 20.4112 45.8296 18.2994L45.6528 18.355C43.5144 19.0056 39.5109 20.1557 35.1567 21.0409Z"
    fill="white"/>
<path
    d="M31.9213 21.6317C32.0408 22.804 32.1094 23.9386 32.1094 25.0005C32.1094 26.9882 31.8692 29.2328 31.5017 31.5021C29.2323 31.8694 26.9877 32.1098 25 32.1098C23.0213 32.1098 20.7774 31.8703 18.4981 31.5013C18.1309 29.2321 17.8906 26.988 17.8906 25.0005C17.8906 23.939 17.9591 22.8042 18.0789 21.6317C20.471 22.0146 22.8573 22.2661 25 22.2661C27.1429 22.2661 29.5292 22.0146 31.9213 21.6317Z"
    fill="white"/>
</svg>


                                            </span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Microscopic<br/>
                                                Inspection
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                                Unrivaled market access to vetted dealers across continents. Our network
                                                ensures
                                                you receive the most competitive offers, anywhere in the world.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-sm-6 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '30px'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">
                                                <svg width="48" height="50" viewBox="0 0 48 50" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M23.5664 0C24.0181 0 24.4698 0.0981932 24.8822 0.28476L43.372 8.1304C45.5322 9.0436 47.1426 11.1744 47.1328 13.7471C47.0837 23.4878 43.0774 41.3099 26.1587 49.4108C24.5189 50.1964 22.6139 50.1964 20.9741 49.4108C4.05543 41.3099 0.0491413 23.4878 4.46631e-05 13.7471C-0.00977466 11.1744 1.60059 9.0436 3.76085 8.1304L22.2605 0.28476C22.663 0.0981932 23.1147 0 23.5664 0ZM23.5664 6.55931V43.6764C37.1171 37.117 40.7601 22.5943 40.8484 13.8845L23.5664 6.55931Z"
    fill="white"/>
</svg>

                                            </span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Bank-Grade <br/>
                                                Custody
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                                Assets insured and protected by TransGuard. Your timepieces are secured
                                                in
                                                climate-controlled vaults with 24/7 monitoring and full insurance
                                                coverage.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-sm-12 col-lg-4 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="bg-white shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '30px'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <motion.div
                                            className="d-flex justify-content-center align-items-center mb-3 mb-md-4"
                                            style={{
                                                width: '105px',
                                                height: '105px',
                                                borderRadius: '50%',
                                                backgroundColor: '#83D7F5'
                                            }}
                                            variants={scaleIn}
                                            whileHover={{rotate: 360, transition: {duration: 0.6}}}
                                        >
                                            <span className="fs-1 fw-bold">
                                                <svg width="39" height="50" viewBox="0 0 39 50" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
<path
    d="M30.9389 4.8545C31.4964 3.55976 31.0806 2.04767 29.9371 1.21601C28.7936 0.384361 27.2342 0.459965 26.1663 1.38612L1.97275 22.5555C1.02769 23.3871 0.687472 24.7197 1.13165 25.8915C1.57583 27.0634 2.7099 27.8573 3.96683 27.8573H14.5043L7.23674 44.8117C6.67916 46.1064 7.09498 47.6185 8.23851 48.4501C9.38203 49.2818 10.9414 49.2062 12.0093 48.28L36.2028 27.1107C37.1479 26.279 37.4881 24.9465 37.0439 23.7746C36.5998 22.6027 35.4752 21.8183 34.2088 21.8183H23.6713L30.9389 4.8545Z"
    fill="white"/>
</svg>

                                            </span>
                                        </motion.div>
                                        <div>
                                            <h3 className="fw-semibold mb-3 mb-md-4" style={{
                                                fontSize: 'clamp(1.25rem, 2vw, 2.25rem)'
                                            }}>
                                                Immediate <br/>
                                                Liquidity
                                            </h3>
                                            <p style={{fontSize: 'clamp(1rem, 1.5vw, 1.5rem)'}}>
                                            Instant offers and fast payments. No waiting weeks for a sale. Get your
                                                cash
                                                offer within 24 hours and payment within 48 hours of acceptance.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust & Expertise Section */}
            <div style={{backgroundColor: '#9CC2B8'}}>
                <div className="container-fluid px-3">
                    <div className="container" style={{maxWidth: '1240px'}}>
                        <div className="py-5 py-xl-5">
                            <motion.div
                                className="mb-5 text-white text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-100px"}}
                                variants={staggerContainer}
                            >
                                <motion.div
                                    style={{fontSize: 'clamp(1.5rem, 3vw, 3.75rem)'}}
                                    variants={fadeInUp}
                                >
                                    Build on a foundation of
                                </motion.div>
                                <motion.h2
                                    className="display-1 fw-bold"
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                    }}
                                    variants={fadeInUp}
                                >
                                    Trust & Expertise
                                </motion.h2>
                            </motion.div>
                            <motion.div
                                className="row"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, margin: "-50px"}}
                            >
                                <motion.div
                                    className="col-12 col-md-6 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="person-card bg-white shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '30px'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <div className="d-flex align-items-center mb-4" style={{gap: '1rem'}}>
                                            <motion.div
                                                whileHover={{scale: 1.1, rotate: 5}}
                                                transition={{duration: 0.3}}
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center border-2 rounded-circle ust-div"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        borderColor: '#6BC8AC',
                                                        backgroundColor: '#83D7F5'
                                                    }}>
                                                    <span className="fs-2 fw-bold">
                                                        <img src="/images/pishu.png" alt={'Pishu Uttam Ganglani'} className={'w-full h-full object-cover rounded-full'}/>
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <div className="d-flex flex-column">
                                                <h4 className="fw-bold mb-0" style={{
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)'
                                                }}>
                                                    Pishu Uttam Ganglani
                                                </h4>
                                                <p className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                                    color: '#6BC8AC'
                                                }}>
                                                    Co-Founder & Operational Strategist
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column" style={{
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            gap: '1.5rem'
                                        }}>
                                            <p>
                                                Former McKinsey consultant and founder of NorthLadder, Pishu brings
                                                world-class
                                                expertise in re-commerce operations, architecting the technology that
                                                powers
                                                iLock's speed and fairness.
                                            </p>
                                            <p>
                                                With deep experience in scaling marketplace platforms and optimizing
                                                supply
                                                chains, Pishu ensures every transaction on iLock is seamless,
                                                transparent, and
                                                built on cutting-edge infrastructure.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="col-12 col-md-6 h-100"
                                    variants={cardAnimation}
                                >
                                    <motion.div
                                        className="person-card bg-white shadow h-100 p-4 p-xl-5"
                                        style={{borderRadius: '30px'}}
                                        whileHover={{y: -10, transition: {duration: 0.3}}}
                                    >
                                        <div className="d-flex align-items-center mb-4" style={{gap: '1rem'}}>
                                            <motion.div
                                                whileHover={{scale: 1.1, rotate: 5}}
                                                transition={{duration: 0.3}}
                                            >
                                                <div
                                                    className="d-flex justify-content-center align-items-center border border-2 rounded-circle ust-div"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        borderColor: '#6BC8AC',
                                                        backgroundColor: '#83D7F5'
                                                    }}>
                                                    <span className="fs-2 fw-bold">
                                                        <img src="/images/harsh.png" alt={'Harsh Kamani'}
                                                             className={'w-full h-full object-cover rounded-full'}/>
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <div className="d-flex flex-column">
                                                <h4 className="fw-bold mb-0" style={{
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)'
                                                }}>
                                                    Harsh Kamani
                                                </h4>
                                                <p className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                                    color: '#6BC8AC'
                                                }}>
                                                    Co-Founder & Wealth Strategist
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column" style={{
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            gap: '1.5rem'
                                        }}>
                                            <p>
                                                With a background in high-net-worth asset management and industrial
                                                legacy,
                                                Harsh ensures iLock adheres to the highest standards of financial
                                                security and
                                                wealth preservation.
                                            </p>
                                            <p>
                                                Drawing from years in private banking and family office management,
                                                Harsh has
                                                built iLock's trust framework around institutional-grade protocols that
                                                protect
                                                client assets like Fort Knox.
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div style={{backgroundColor: '#484C52'}} className={'overflow-hidden'}>
                <div className="container-fluid">
                    <div className="row align-items-center g-0">
                        <motion.div
                            className="col-12 col-md-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInLeft}
                        >
                            <div className="p-4 p-lg-5" style={{paddingLeft: 'clamp(2.5rem, 10vw, 10rem)'}}>
                                <motion.div
                                    className="d-flex flex-column text-white mb-4"
                                    style={{gap: '1rem'}}
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.h2
                                        className="display-1 fw-light"
                                        style={{
                                            fontSize: 'clamp(2rem, 5vw, 4.5rem)'
                                        }}
                                        variants={fadeInUp}
                                    >
                                        Security is<br/>
                                        our Obsession
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
                                            When you trust us with your luxury timepieces, we take that responsibility
                                            seriously. Every watch is stored in state-of-the-art facilities with
                                            multiple layers of protection.
                                        </p>
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="row g-3"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_41_53)">
<path
    d="M15 7.96875C15.7767 7.96875 16.4062 7.33915 16.4062 6.5625C16.4062 5.78585 15.7767 5.15625 15 5.15625C14.2233 5.15625 13.5938 5.78585 13.5938 6.5625C13.5938 7.33915 14.2233 7.96875 15 7.96875Z"
    fill="#484C52"/>
<path
    d="M1.87499 11.7188H28.125C28.9659 11.7188 29.7037 11.1591 29.9306 10.3491C30.1575 9.53906 29.8172 8.6775 29.0986 8.24109L15.9736 0.272344C15.6741 0.0904687 15.337 0 15 0C14.663 0 14.3259 0.0904687 14.0269 0.272344L0.901869 8.24109C0.183275 8.6775 -0.157506 9.53953 0.0698378 10.3491C0.296244 11.1591 1.03406 11.7188 1.87499 11.7188ZM15 4.21875C16.2947 4.21875 17.3437 5.26781 17.3437 6.5625C17.3437 7.85719 16.2947 8.90625 15 8.90625C13.7053 8.90625 12.6562 7.85719 12.6562 6.5625C12.6562 5.26781 13.7053 4.21875 15 4.21875Z"
    fill="#484C52"/>
<path d="M19.6875 12.6562H15.9375V24.375H19.6875V12.6562Z" fill="#484C52"/>
<path d="M25.3125 12.6562H21.5625V24.375H25.3125V12.6562Z" fill="#484C52"/>
<path d="M14.0625 12.6562H10.3125V24.375H14.0625V12.6562Z" fill="#484C52"/>
<path d="M8.4375 12.6562H4.6875V24.375H8.4375V12.6562Z" fill="#484C52"/>
<path
    d="M1.875 27.1875H28.125C28.125 26.152 27.2855 25.3125 26.25 25.3125H3.75C2.71453 25.3125 1.875 26.152 1.875 27.1875Z"
    fill="#484C52"/>
<path
    d="M29.7398 28.125H0.260156C0.0989062 28.402 0 28.7194 0 29.0625V30H30V29.0625C30 28.7194 29.9011 28.402 29.7398 28.125Z"
    fill="#484C52"/>
</g>
<defs>
<clipPath id="clip0_41_53">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>

                                                </span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                TransGuard<br/>
                                                Partnership
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Industry-leading custody and insurance protocols backed by Lloyd's of
                                                London.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M8.16175 12.2513H18.0627C18.6809 12.2513 19.1821 11.7501 19.1821 11.1318C19.1821 10.5136 18.6809 10.0124 18.0627 10.0124H8.16175C7.54351 10.0124 7.0423 10.5136 7.0423 11.1318C7.0423 11.7501 7.54351 12.2513 8.16175 12.2513Z"
    fill="#484C52"/>
<path
    d="M22.0389 18.9542H21.4385C20.7695 18.9542 20.225 19.4987 20.225 20.1679V21.6347H23.2524V20.1679C23.2524 19.4987 22.708 18.9542 22.0389 18.9542Z"
    fill="#484C52"/>
<path
    d="M26.4943 20.2684V20.1679C26.4943 18.2452 25.2702 16.6033 23.5605 15.9802V5.50046C23.5605 5.20679 23.444 4.92536 23.2363 4.71804L18.8424 0.32382C18.6345 0.116497 18.3535 0 18.06 0H4.83663C3.63859 0 2.664 0.974668 2.664 2.17263V25.4643C2.664 26.6624 3.63859 27.637 4.83656 27.637H16.1414V27.7442C16.1414 28.9881 17.1533 30 18.3972 30H25.0801C26.324 30 27.3359 28.9881 27.3359 27.7442V22.0247C27.3359 21.3158 27.0073 20.6823 26.4943 20.2684ZM16.9831 20.1679V20.2684C16.4701 20.6823 16.1414 21.3158 16.1414 22.0247V25.2179H5.02335V2.41898H16.5229V5.67114C16.5229 6.45886 17.1613 7.09702 17.9488 7.09702H21.2011V15.7188C20.1707 15.7732 19.2328 16.1799 18.5039 16.8196C18.3685 16.7615 18.2194 16.729 18.0626 16.729H8.16177C7.54354 16.729 7.04232 17.2302 7.04232 17.8484C7.04232 18.4667 7.54354 18.9679 8.16177 18.9679H17.1486C17.0416 19.35 16.9831 19.7521 16.9831 20.1679ZM25.4702 23.5442H24.1444C23.8105 23.5442 23.5389 23.8159 23.5389 24.1496C23.5389 24.4836 23.8106 24.7551 24.1444 24.7551H25.4702V25.8743H24.1444C23.8105 25.8743 23.5389 26.146 23.5389 26.4798C23.5389 26.8137 23.8106 27.0853 24.1444 27.0853H25.4702V27.7441C25.4702 27.9595 25.2956 28.1341 25.0801 28.1341H18.3972C18.1817 28.1341 18.0071 27.9595 18.0071 27.7441V22.0246C18.0071 21.8092 18.1817 21.6345 18.3972 21.6345H18.8489V20.1677C18.8489 18.7397 20.0106 17.578 21.4385 17.578H22.0389C23.4667 17.578 24.6284 18.7397 24.6284 20.1677V21.6345H25.0801C25.2956 21.6345 25.4702 21.8092 25.4702 22.0246V23.5442Z"
    fill="#484C52"/>
</svg>

                                                </span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                24/7 <br/>
                                                Surveillance
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Real-time monitoring with biometric access controls and redundant
                                                security systems.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div
                                        className="col-12 col-lg-4"
                                        variants={cardAnimation}
                                    >
                                        <motion.div
                                            className="d-flex flex-column text-white"
                                            style={{gap: '0.5rem'}}
                                            whileHover={{x: 10, transition: {duration: 0.3}}}
                                        >
                                            <motion.div
                                                className="d-flex justify-content-center align-items-center rounded-circle"
                                                style={{
                                                    width: '55px',
                                                    height: '55px',
                                                    backgroundColor: '#9CC2B8'
                                                }}
                                                variants={scaleIn}
                                                whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                            >
                                                <span className="fw-bold">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 5.625H0V24.375H18.75V5.625Z" fill="#484C52"/>
<path d="M28.125 5.625L22.5 11.25V18.75L28.125 24.375H30V5.625H28.125Z" fill="#484C52"/>
</svg>

                                                </span>
                                            </motion.div>
                                            <h5 className="fw-semibold mb-0" style={{
                                                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                            }}>
                                                Full Insurance<br/>
                                                Coverage
                                            </h5>
                                            <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                Every asset is insured from the moment it enters our custody until final
                                                delivery.
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
                            viewport={{once: true, margin: "-100px"}}
                            variants={fadeInRight}
                        >
                            <motion.div
                                whileHover={{scale: 1.05}}
                                transition={{duration: 0.3}}
                            >
                                <img src="/images/securty.jpg" className="img-fluid w-100" style={{objectFit: 'cover'}}
                                     alt="Security"/>
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
                            Redefining how the world<br/>
                            trades luxury timepieces
                        </motion.h1>
                        <motion.p variants={fadeInUp}>
                            Combining advanced re-commerce technology with legacy wealth expertise
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
