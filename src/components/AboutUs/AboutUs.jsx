import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SEO from '../SEO/SEO';
import React, {Fragment} from "react";

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
                title="About Capital Custodia by iLock | Redefining Global Luxury Watch Trading"
                description="Capital Custodia by iLock is redefining luxury watch trading with a secure global dealer auction platform. Professional authentication, competitive pricing from worldwide dealers, buyback options, and bank-vault storage — trusted by collectors and dealers globally."
                keywords="Capital Custodia, iLock, about iLockSecure, luxury watch trading company, authenticated watch platform, secure watch marketplace, global watch auction, luxury watch dealers Dubai, watch repurchase agreement, Capital Custodia watches"
                canonical="/about"
                ogTitle="About Capital Custodia by iLock | Trusted Global Luxury Watch Trading"
                ogDescription="Capital Custodia by iLock combines advanced re-commerce technology with legacy wealth expertise to deliver the highest prices for luxury watches. Trusted by collectors and professional dealers worldwide."
                ogUrl="https://ilocksecure.com/about"
            />

            <div style={{minHeight: '100vh'}}>
                {/* Header */}
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
                            About <span>Capital Custodia</span>
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
                            <strong>Redefining</strong> how the world trades<br/>
                            <strong>luxury timepieces</strong>
                        </h2>
                        <p className="features-subtitle text-white">
                            Combining advanced re-commerce technology with legacy wealth expertise
                        </p>
                    </div>
                </motion.div>

                <section className="highest-prices-section overflow-hidden" style={{backgroundColor: '#3581A3'}}>
                    <div className="container-fluid px-0">
                        <div className="row align-items-center">
                            <motion.div
                                className="col-md-6 order-1 order-sm-1 order-md-1 mb-5 mb-sm-5 mb-md-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInLeft}
                            >
                                <img src="/images/watch.png " className="img-fluid w-100"
                                     alt="Secure Storage"/>
                            </motion.div>
                            <motion.div
                                className="col-md-6 order-2 order-sm-2 order-md-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInRight}
                            >
                                <div className="section-content left-custom-padding">

                                    <motion.h1
                                        className="mb-3 text-white"
                                        initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                    >
                                        Our <span>Mission</span>
                                    </motion.h1>
                                    <motion.div
                                        className="sec-pra"
                                        initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                                    >
                                        <p className={'text-white'}>
                                            The luxury watch market has long been plagued by slow transactions, opaque pricing, and unnecessary risk. Traditional dealers take weeks to process sales, leaving sellers vulnerable and uncertain.
                                        </p>
                                        <p className={'text-white'}>
                                            iLock was founded to solve these problems through technology and trust.
                                            We've built a platform that combines instant liquidity with bank-grade
                                            security, giving collectors the confidence to trade their most valuable
                                            assets.
                                        </p>
                                        <p className={'text-white'}>
                                            <b>Transparent, Confidential, Secure.  That's the Capital Custodia promise.</b>
                                        </p>
                                    </motion.div>

                                </div>

                            </motion.div>
                        </div>
                    </div>
                </section>



                {/* Core Pillars Section */}
                <div className={'py-md-5'} style={{backgroundColor: '#ffffff'}}>
                    <div className="container-fluid px-3">
                        <div className="container" style={{maxWidth: '85%'}}>
                            <div className="py-5 py-xl-5">
                                <div className={'ps-title text-center mb-5'}>
                                    <motion.h3
                                    className="mb-2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                >Our <span> Core Pillars</span> </motion.h3>

                                </div>

                                <motion.div
                                    className={'row'}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={staggerContainer}
                                >
                                    <motion.div className={'col-md-4'} variants={cardAnimation}>
                                        <div className={'core-card mb-5 mb-sm-5 mb-md-0 text-center'}>
                                            <div className={'core-icon mx-auto'}>
                                                <svg width="90" height="103" viewBox="0 0 90 103" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_40001045_4081)">
                                                        <path
                                                            d="M88.9079 93.304L66.5618 70.3098C66.5618 70.3098 66.5811 70.2901 66.5907 70.2802C69.8043 65.6962 71.9354 60.5546 72.9313 55.0034C73.8934 49.625 73.701 43.9998 72.378 38.7299C72.1664 37.8812 71.5891 37.2052 70.7953 36.8746C69.9967 36.539 69.1163 36.6131 68.3659 37.0818C67.346 37.7183 66.8601 38.9421 67.1583 40.1214C68.5102 45.485 68.4861 51.1596 67.0958 56.5331C65.6622 62.0695 62.7998 67.1469 58.8165 71.2079C52.8559 77.287 44.947 80.6424 36.5474 80.6572H36.5041C28.1237 80.6572 20.2821 77.3265 14.413 71.272C2.25617 58.7338 2.39568 38.3006 14.7257 25.7278C19.6664 20.6898 25.9156 17.5269 32.7998 16.5746C34.2238 16.3772 35.234 15.0696 35.1041 13.5942C35.0368 12.8343 34.6808 12.1534 34.0987 11.6797C33.5214 11.206 32.7998 11.0037 32.0685 11.1073C24.0345 12.2323 16.7318 15.943 10.9492 21.8396C3.95918 28.9648 0.0672643 38.4388 -8.65559e-05 48.5098C-0.0674374 58.5809 3.68978 68.0499 10.5884 75.1603C16.7799 81.5454 25.0208 85.4189 33.7956 86.0702C34.6808 86.1344 35.566 86.1689 36.4512 86.1689C44.2302 86.1689 51.8553 83.6474 58.1766 78.94C58.1862 78.9302 58.1959 78.9203 58.2055 78.9154L80.5227 101.875C81.2202 102.595 82.1583 102.995 83.159 103C84.1885 103.01 85.1555 102.6 85.8819 101.86L88.879 98.7959C89.5958 98.0607 89.9951 97.0887 89.9999 96.0475C90.0047 95.0063 89.6199 94.0343 88.9079 93.304Z"
                                                            fill="white"/>
                                                        <path
                                                            d="M76.2849 19.318L74.0719 18.4792C72.393 17.8426 70.7766 17.0137 69.2708 16.0218C67.7795 15.0399 66.3891 13.8902 65.1383 12.6073C63.8875 11.3243 62.7666 9.89829 61.8093 8.36864C60.8423 6.82418 60.0341 5.16623 59.4135 3.44414L58.5957 1.17433C58.3407 0.468713 57.6864 0.00488281 56.9552 0.00488281C56.224 0.00488281 55.5697 0.473648 55.3147 1.17433L54.4969 3.44414C53.8763 5.16623 53.0681 6.82418 52.1011 8.36864C51.1438 9.89829 50.0229 11.3243 48.7721 12.6073C47.5213 13.8902 46.131 15.0399 44.6396 16.0218C43.1338 17.0137 41.5174 17.8426 39.8385 18.4792L37.6255 19.318C36.9376 19.5795 36.4854 20.2506 36.4854 21.0006C36.4854 21.7506 36.9424 22.4217 37.6255 22.6832L39.8385 23.5221C41.5174 24.1586 43.1338 24.9876 44.6396 25.9794C46.131 26.9613 47.5213 28.111 48.7721 29.394C50.0229 30.6769 51.1438 32.1029 52.1011 33.6326C53.0681 35.1771 53.8763 36.835 54.4969 38.5571L55.3147 40.8269C55.5697 41.5325 56.224 41.9964 56.9552 41.9964C57.6864 41.9964 58.3407 41.5276 58.5957 40.8269L59.4135 38.5571C60.0341 36.835 60.8423 35.1771 61.8093 33.6326C62.7666 32.1029 63.8875 30.6769 65.1383 29.394C66.3891 28.111 67.7795 26.9613 69.2708 25.9794C70.7766 24.9876 72.393 24.1586 74.0719 23.5221L76.2849 22.6832C76.9728 22.4217 77.4251 21.7506 77.4251 21.0006C77.4251 20.2506 76.968 19.5795 76.2849 19.318Z"
                                                            fill="white"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_40001045_4081">
                                                            <rect width="90" height="103" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <div className={'core-detail mt-3 mt-sm-3 mt-md-5'}>
                                                <h3 className={'mb-3'}>Transparency </h3>
                                                <p>
                                                    We create a full market pricing report so you know exatly what
                                                    professional dealers around the world are offering for your watch.
                                                    Our terms are clear, no fine print, no hidden clauses
                                                </p>
                                            </div>
                                        </div>

                                    </motion.div>
                                    <motion.div className={'col-md-4'} variants={cardAnimation}>
                                        <div className={'core-card mb-5 mb-sm-5 mb-md-0 text-center'}>
                                            <div className={'core-icon mx-auto'}>
                                                <svg width="87" height="87" viewBox="0 0 87 87" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_40001045_4085)">
                                                        <path
                                                            d="M55.5143 0C39.6134 0 26.4843 11.7934 24.3955 27.1318C27.0307 28.1799 29.4393 29.7288 31.5281 31.8218C36.8883 37.1927 38.8872 44.8402 37.0716 51.987L46.8859 61.821C49.611 62.6421 52.5193 63.0494 55.5176 63.0494C72.8743 63.0494 87.0029 48.936 87.0029 31.5481C87.0029 14.1601 72.871 0 55.5143 0ZM52.3361 12.017C53.2423 11.1525 54.335 10.6952 55.6509 10.6952C56.9668 10.6952 58.1028 11.1525 58.9656 12.017C59.8285 12.8816 60.3282 14.0199 60.3282 15.3384C60.3282 16.6569 59.8751 17.7518 58.9656 18.6598C58.1028 19.5243 56.9668 19.9349 55.6509 19.9349C54.335 19.9349 53.2423 19.5243 52.3361 18.6598C51.4733 17.7952 51.0169 16.6569 51.0169 15.3384C51.0169 14.0199 51.4699 12.8816 52.3361 12.017ZM63.7829 49.9375C63.7829 50.8454 63.1033 51.5297 62.1471 51.5297H49.4711C48.5916 51.5297 47.882 50.8154 47.882 49.9375V48.5255C47.882 47.6142 48.565 46.9332 49.4711 46.9332L52.3794 46.6161V29.9091L49.2446 29.5886C48.3817 29.4985 47.7454 28.8609 47.7454 27.9964V26.6745C47.7454 25.8066 48.3351 25.1724 49.1546 25.0822L55.7475 23.974C56.044 23.9239 56.3471 23.8972 56.6503 23.8972H57.9662C58.8757 23.8972 59.5553 24.5815 59.5553 25.4895V46.6561L62.327 46.9299C63.0999 46.9299 63.7795 47.6108 63.7795 48.5221V49.9341L63.7829 49.9375Z"
                                                            fill="white"/>
                                                        <path
                                                            d="M56.707 85.9185L56.4938 78.311C56.4871 78.044 56.3772 77.7869 56.1873 77.5967L31.8746 53.2355C34.4032 47.1969 33.2238 39.9667 28.3167 35.0463C21.8404 28.5571 11.3364 28.5571 4.86014 35.0463C-1.61614 41.5355 -1.61614 52.0605 4.86014 58.5497C9.76732 63.4666 16.9832 64.6516 23.013 62.1147L29.1062 68.22C29.3028 68.417 29.5693 68.5271 29.8491 68.5271H34.2732C34.8529 68.5271 35.3226 68.9978 35.3226 69.5786V74.0116C35.3226 74.292 35.4326 74.559 35.6291 74.756L37.7479 76.879C37.9445 77.0759 38.211 77.1861 38.4908 77.1861H42.9149C43.4946 77.1861 43.9643 77.6567 43.9643 78.2376V82.6705C43.9643 82.9509 44.0743 83.218 44.2708 83.4149L47.3224 86.4726C47.5123 86.6628 47.7688 86.773 48.0353 86.7797L55.6276 86.9967C56.2306 87.0133 56.7237 86.5193 56.707 85.9151V85.9185ZM9.41752 46.2189C7.59856 44.3963 7.59856 41.4387 9.41752 39.6128C11.2398 37.7869 14.1914 37.7869 16.0104 39.6128C17.8327 41.4354 17.8327 44.3929 16.0104 46.2189C14.1914 48.0448 11.2398 48.0448 9.41752 46.2189Z"
                                                            fill="white"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_40001045_4085">
                                                            <rect width="87" height="87" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>


                                            </div>
                                            <div className={'core-detail mt-3 mt-sm-3 mt-md-5'}>
                                                <h3 className={'mb-3'}>Confidentiality </h3>
                                                <p>
                                                    All our records are encrypted and customer information is never
                                                    shared or revealed to anyone. All client meetings are private and by
                                                    appointment only
                                                </p>
                                            </div>
                                        </div>

                                    </motion.div>
                                    <motion.div className={'col-md-4'} variants={cardAnimation}>
                                        <div className={'core-card mb-5 mb-sm-5 mb-md-0 text-center'}>
                                            <div className={'core-icon mx-auto'}>
                                                <svg width="80" height="84" viewBox="0 0 80 84" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M39.5916 0C40.3504 0 41.1093 0.164965 41.8021 0.478397L72.865 13.6591C76.4942 15.1932 79.1996 18.773 79.1831 23.0951C79.1006 39.4595 72.3701 69.4006 43.9467 83.0102C41.1917 84.3299 37.9914 84.3299 35.2365 83.0102C6.81312 69.4006 0.0825574 39.4595 7.5034e-05 23.0951C-0.0164214 18.773 2.689 15.1932 6.31822 13.6591L37.3976 0.478397C38.0739 0.164965 38.8328 0 39.5916 0ZM39.5916 11.0196V73.3763C62.3567 62.3566 68.4769 37.9584 68.6254 23.326L39.5916 11.0196Z"
                                                        fill="white"/>
                                                </svg>


                                            </div>
                                            <div className={'core-detail mt-3 mt-sm-3 mt-md-5'}>
                                                <h3 className={'mb-3'}>Security </h3>
                                                <p>
                                                    All assets in custody are fully insured and stored with Transguard,
                                                    a leading secure storage provider trusted by major banks, jewellers
                                                    and bullion tradewrs
                                                </p>
                                            </div>
                                        </div>

                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'team-section py-5'} style={{backgroundColor: '#003D69'}}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-12'}>
                                <motion.div
                                    className={'mb-5 py-md-5 text-center'}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeInUp}
                                >
                                    <h2 className="features-title">
                                        Build on a foundation of   <strong>Trust & Expertise</strong>
                                    </h2>
                                    <p className="features-subtitle text-white">
                                        Meet the visionaries behind iLock
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                        <motion.div
                            className={'row justify-content-center'}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div className={'col-md-4 mb-5 pb-md-5'} variants={cardAnimation}>
                                <div className={'team-card'}>
                                    <div className={'team-img mb-4'}>
                                        <img src={'/images/team1.png'} alt={'img'} className={'img-fluid'}/>
                                    </div>
                                    <div className={'team-detail'}>
                                        <h4>Pishu Ganglani</h4>
                                        <h6>Co-Founder & CEO</h6>
                                        <p>
                                            Senior roles in financial services and consulting with companies like
                                            McKinsey & Co, Metlife, EmiratesNBD and Reuters
                                        </p>
                                        <div className={'text-center td-icon mt-31'}>
                                            <a href={'#'}>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5317 8.02593C10.7963 7.72824 11.0132 7.42817 11.285 7.17334C12.1193 6.38744 13.1063 5.99211 14.2601 6.00163C14.8942 6.0064 15.5187 6.05165 16.129 6.22788C17.526 6.63036 18.3365 7.59249 18.7251 8.95472C19.0159 9.9764 19.0683 11.0266 19.0707 12.0793C19.0755 14.2989 19.0636 16.5208 19.0707 18.7404C19.0707 18.9476 19.0135 19.0024 18.8085 19C17.6642 18.9905 16.5176 18.9905 15.3733 19C15.1707 19 15.1278 18.9405 15.1278 18.7499C15.1349 16.6375 15.1349 14.5251 15.1278 12.4103C15.1278 11.8816 15.092 11.3505 14.9442 10.8361C14.6701 9.88828 13.9907 9.40483 12.9966 9.45722C11.6378 9.52867 10.9322 10.2003 10.7605 11.5792C10.72 11.9078 10.6986 12.2388 10.7009 12.5699C10.7009 14.6251 10.7009 16.6804 10.7057 18.7356C10.7057 18.9405 10.6556 19 10.4459 19C9.29207 18.9905 8.13828 18.9905 6.98448 19C6.79854 19 6.74609 18.9524 6.74609 18.7642C6.75086 14.6966 6.75086 10.6266 6.74609 6.55891C6.74609 6.35648 6.81285 6.31123 7.00356 6.31123C8.09775 6.31838 9.19433 6.32076 10.2885 6.31123C10.4912 6.31123 10.5412 6.37553 10.5388 6.56605C10.5269 7.05188 10.5341 7.53772 10.5341 8.02593H10.5317Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.25757 12.6745C4.25757 14.6869 4.25519 16.6992 4.26234 18.7116C4.26234 18.9355 4.20751 19.0022 3.97628 18.9998C2.83202 18.9879 1.68776 18.9903 0.541122 18.9998C0.357563 18.9998 0.302734 18.9545 0.302734 18.7664C0.307502 14.6916 0.307502 10.6168 0.302734 6.53966C0.302734 6.37057 0.343256 6.31104 0.522047 6.31104C1.68299 6.31818 2.84394 6.32056 4.00488 6.31104C4.22897 6.31104 4.25757 6.39439 4.25757 6.58729C4.2528 8.61635 4.25519 10.6454 4.25519 12.6745H4.25757Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.57467 2.27436C4.57467 3.53894 3.54959 4.56776 2.28614 4.56776C1.03938 4.56776 0.00478416 3.53894 1.64127e-05 2.29341C-0.00475133 1.03596 1.02985 0 2.29091 0C3.54245 0 4.57228 1.02644 4.57467 2.27197V2.27436Z"
                                                        fill="#FEFEFE"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className={'col-md-4 mb-5 pb-md-5'} variants={cardAnimation}>
                                <div className={'team-card'}>
                                    <div className={'team-img mb-4'}>
                                        <img src={'/images/team2.png'} alt={'img'} className={'img-fluid'}/>
                                    </div>
                                    <div className={'team-detail'}>
                                        <h4>Harsh Kamani </h4>
                                        <h6>Co-Founder & Board Member</h6>
                                        <p>
                                            CEO of Sun Global, a DFSA-regulated financial services firm with extensive
                                            experience managing family offices, UHNW investors across MEA, UK, Europe,
                                            and Asia
                                        </p>
                                        <div className={'text-center td-icon mt-31'}>
                                            <a href={'#'}>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5317 8.02593C10.7963 7.72824 11.0132 7.42817 11.285 7.17334C12.1193 6.38744 13.1063 5.99211 14.2601 6.00163C14.8942 6.0064 15.5187 6.05165 16.129 6.22788C17.526 6.63036 18.3365 7.59249 18.7251 8.95472C19.0159 9.9764 19.0683 11.0266 19.0707 12.0793C19.0755 14.2989 19.0636 16.5208 19.0707 18.7404C19.0707 18.9476 19.0135 19.0024 18.8085 19C17.6642 18.9905 16.5176 18.9905 15.3733 19C15.1707 19 15.1278 18.9405 15.1278 18.7499C15.1349 16.6375 15.1349 14.5251 15.1278 12.4103C15.1278 11.8816 15.092 11.3505 14.9442 10.8361C14.6701 9.88828 13.9907 9.40483 12.9966 9.45722C11.6378 9.52867 10.9322 10.2003 10.7605 11.5792C10.72 11.9078 10.6986 12.2388 10.7009 12.5699C10.7009 14.6251 10.7009 16.6804 10.7057 18.7356C10.7057 18.9405 10.6556 19 10.4459 19C9.29207 18.9905 8.13828 18.9905 6.98448 19C6.79854 19 6.74609 18.9524 6.74609 18.7642C6.75086 14.6966 6.75086 10.6266 6.74609 6.55891C6.74609 6.35648 6.81285 6.31123 7.00356 6.31123C8.09775 6.31838 9.19433 6.32076 10.2885 6.31123C10.4912 6.31123 10.5412 6.37553 10.5388 6.56605C10.5269 7.05188 10.5341 7.53772 10.5341 8.02593H10.5317Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.25757 12.6745C4.25757 14.6869 4.25519 16.6992 4.26234 18.7116C4.26234 18.9355 4.20751 19.0022 3.97628 18.9998C2.83202 18.9879 1.68776 18.9903 0.541122 18.9998C0.357563 18.9998 0.302734 18.9545 0.302734 18.7664C0.307502 14.6916 0.307502 10.6168 0.302734 6.53966C0.302734 6.37057 0.343256 6.31104 0.522047 6.31104C1.68299 6.31818 2.84394 6.32056 4.00488 6.31104C4.22897 6.31104 4.25757 6.39439 4.25757 6.58729C4.2528 8.61635 4.25519 10.6454 4.25519 12.6745H4.25757Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.57467 2.27436C4.57467 3.53894 3.54959 4.56776 2.28614 4.56776C1.03938 4.56776 0.00478416 3.53894 1.64127e-05 2.29341C-0.00475133 1.03596 1.02985 0 2.29091 0C3.54245 0 4.57228 1.02644 4.57467 2.27197V2.27436Z"
                                                        fill="#FEFEFE"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className={'col-md-4 mb-5 pb-md-5'} variants={cardAnimation}>
                                <div className={'team-card'}>
                                    <div className={'team-img mb-4'}>
                                        <img src={'/images/team3.png'} alt={'img'} className={'img-fluid'}/>
                                    </div>
                                    <div className={'team-detail'}>
                                        <h4>C’Quon Gottlieb </h4>
                                        <h6>Senior Director</h6>
                                        <p>
                                            Founder, Gottlieb & Co and Senior Advisor for some of the best US watch
                                            companies like The 1916 Co, DavidSW, WatchBox and Chronofy
                                        </p>
                                        <div className={'text-center td-icon mt-31'}>
                                            <a href={'#'}>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5317 8.02593C10.7963 7.72824 11.0132 7.42817 11.285 7.17334C12.1193 6.38744 13.1063 5.99211 14.2601 6.00163C14.8942 6.0064 15.5187 6.05165 16.129 6.22788C17.526 6.63036 18.3365 7.59249 18.7251 8.95472C19.0159 9.9764 19.0683 11.0266 19.0707 12.0793C19.0755 14.2989 19.0636 16.5208 19.0707 18.7404C19.0707 18.9476 19.0135 19.0024 18.8085 19C17.6642 18.9905 16.5176 18.9905 15.3733 19C15.1707 19 15.1278 18.9405 15.1278 18.7499C15.1349 16.6375 15.1349 14.5251 15.1278 12.4103C15.1278 11.8816 15.092 11.3505 14.9442 10.8361C14.6701 9.88828 13.9907 9.40483 12.9966 9.45722C11.6378 9.52867 10.9322 10.2003 10.7605 11.5792C10.72 11.9078 10.6986 12.2388 10.7009 12.5699C10.7009 14.6251 10.7009 16.6804 10.7057 18.7356C10.7057 18.9405 10.6556 19 10.4459 19C9.29207 18.9905 8.13828 18.9905 6.98448 19C6.79854 19 6.74609 18.9524 6.74609 18.7642C6.75086 14.6966 6.75086 10.6266 6.74609 6.55891C6.74609 6.35648 6.81285 6.31123 7.00356 6.31123C8.09775 6.31838 9.19433 6.32076 10.2885 6.31123C10.4912 6.31123 10.5412 6.37553 10.5388 6.56605C10.5269 7.05188 10.5341 7.53772 10.5341 8.02593H10.5317Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.25757 12.6745C4.25757 14.6869 4.25519 16.6992 4.26234 18.7116C4.26234 18.9355 4.20751 19.0022 3.97628 18.9998C2.83202 18.9879 1.68776 18.9903 0.541122 18.9998C0.357563 18.9998 0.302734 18.9545 0.302734 18.7664C0.307502 14.6916 0.307502 10.6168 0.302734 6.53966C0.302734 6.37057 0.343256 6.31104 0.522047 6.31104C1.68299 6.31818 2.84394 6.32056 4.00488 6.31104C4.22897 6.31104 4.25757 6.39439 4.25757 6.58729C4.2528 8.61635 4.25519 10.6454 4.25519 12.6745H4.25757Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.57467 2.27436C4.57467 3.53894 3.54959 4.56776 2.28614 4.56776C1.03938 4.56776 0.00478416 3.53894 1.64127e-05 2.29341C-0.00475133 1.03596 1.02985 0 2.29091 0C3.54245 0 4.57228 1.02644 4.57467 2.27197V2.27436Z"
                                                        fill="#FEFEFE"/>
                                                </svg>
                                            </a>
                                            <a href={'#'}>
                                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.0067 2.34342C20.7611 1.42177 20.0341 0.695405 19.1091 0.447727C17.4357 2.5551e-07 10.7274 0 10.7274 0C10.7274 0 4.01922 2.5551e-07 2.34574 0.447727C1.42318 0.695405 0.696092 1.41939 0.448169 2.34342C1.16514e-06 4.01525 0 7.5018 0 7.5018C0 7.5018 1.16514e-06 10.9884 0.448169 12.6602C0.693708 13.5818 1.42079 14.3082 2.34574 14.5559C4.01922 15.0036 10.7274 15.0036 10.7274 15.0036C10.7274 15.0036 17.4357 15.0036 19.1091 14.5559C20.0317 14.3082 20.7588 13.5842 21.0067 12.6602C21.4549 10.9884 21.4549 7.5018 21.4549 7.5018C21.4549 7.5018 21.4549 4.01525 21.0067 2.34342ZM8.58194 10.7169V4.28674L14.1554 7.5018L8.58194 10.7169Z"
                                                        fill="white"/>
                                                </svg>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className={'col-md-4 mb-5 pb-md-5'} variants={cardAnimation}>
                                <div className={'team-card'}>
                                    <div className={'team-img mb-4'}>
                                        <img src={'/images/team4.png'} alt={'img'} className={'img-fluid'}/>
                                    </div>
                                    <div className={'team-detail'}>
                                        <h4>Bilal Karimbath </h4>
                                        <h6>CFO</h6>
                                        <p>
                                            Senior roles in financial services and consulting with companies like
                                            McKinsey & Co, Metlife, EmiratesNBD and Reuters
                                        </p>
                                        <div className={'text-center td-icon mt-31'}>
                                            <a href={'#'}>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5317 8.02593C10.7963 7.72824 11.0132 7.42817 11.285 7.17334C12.1193 6.38744 13.1063 5.99211 14.2601 6.00163C14.8942 6.0064 15.5187 6.05165 16.129 6.22788C17.526 6.63036 18.3365 7.59249 18.7251 8.95472C19.0159 9.9764 19.0683 11.0266 19.0707 12.0793C19.0755 14.2989 19.0636 16.5208 19.0707 18.7404C19.0707 18.9476 19.0135 19.0024 18.8085 19C17.6642 18.9905 16.5176 18.9905 15.3733 19C15.1707 19 15.1278 18.9405 15.1278 18.7499C15.1349 16.6375 15.1349 14.5251 15.1278 12.4103C15.1278 11.8816 15.092 11.3505 14.9442 10.8361C14.6701 9.88828 13.9907 9.40483 12.9966 9.45722C11.6378 9.52867 10.9322 10.2003 10.7605 11.5792C10.72 11.9078 10.6986 12.2388 10.7009 12.5699C10.7009 14.6251 10.7009 16.6804 10.7057 18.7356C10.7057 18.9405 10.6556 19 10.4459 19C9.29207 18.9905 8.13828 18.9905 6.98448 19C6.79854 19 6.74609 18.9524 6.74609 18.7642C6.75086 14.6966 6.75086 10.6266 6.74609 6.55891C6.74609 6.35648 6.81285 6.31123 7.00356 6.31123C8.09775 6.31838 9.19433 6.32076 10.2885 6.31123C10.4912 6.31123 10.5412 6.37553 10.5388 6.56605C10.5269 7.05188 10.5341 7.53772 10.5341 8.02593H10.5317Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.25757 12.6745C4.25757 14.6869 4.25519 16.6992 4.26234 18.7116C4.26234 18.9355 4.20751 19.0022 3.97628 18.9998C2.83202 18.9879 1.68776 18.9903 0.541122 18.9998C0.357563 18.9998 0.302734 18.9545 0.302734 18.7664C0.307502 14.6916 0.307502 10.6168 0.302734 6.53966C0.302734 6.37057 0.343256 6.31104 0.522047 6.31104C1.68299 6.31818 2.84394 6.32056 4.00488 6.31104C4.22897 6.31104 4.25757 6.39439 4.25757 6.58729C4.2528 8.61635 4.25519 10.6454 4.25519 12.6745H4.25757Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.57467 2.27436C4.57467 3.53894 3.54959 4.56776 2.28614 4.56776C1.03938 4.56776 0.00478416 3.53894 1.64127e-05 2.29341C-0.00475133 1.03596 1.02985 0 2.29091 0C3.54245 0 4.57228 1.02644 4.57467 2.27197V2.27436Z"
                                                        fill="#FEFEFE"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div className={'col-md-4 mb-5 pb-md-5'} variants={cardAnimation}>
                                <div className={'team-card'}>
                                    <div className={'team-img mb-4'}>
                                        <img src={'/images/team5.png'} alt={'img'} className={'img-fluid'}/>
                                    </div>
                                    <div className={'team-detail'}>
                                        <h4>Dinesh Ganglani </h4>
                                        <h6>CFO</h6>
                                        <p>
                                            Managed SEC and global investor reporting at Fortune 500 companies like
                                            Hewlett Packard and BHP Billiton
                                        </p>
                                        <div className={'text-center td-icon mt-31'}>
                                            <a href={'#'}>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5317 8.02593C10.7963 7.72824 11.0132 7.42817 11.285 7.17334C12.1193 6.38744 13.1063 5.99211 14.2601 6.00163C14.8942 6.0064 15.5187 6.05165 16.129 6.22788C17.526 6.63036 18.3365 7.59249 18.7251 8.95472C19.0159 9.9764 19.0683 11.0266 19.0707 12.0793C19.0755 14.2989 19.0636 16.5208 19.0707 18.7404C19.0707 18.9476 19.0135 19.0024 18.8085 19C17.6642 18.9905 16.5176 18.9905 15.3733 19C15.1707 19 15.1278 18.9405 15.1278 18.7499C15.1349 16.6375 15.1349 14.5251 15.1278 12.4103C15.1278 11.8816 15.092 11.3505 14.9442 10.8361C14.6701 9.88828 13.9907 9.40483 12.9966 9.45722C11.6378 9.52867 10.9322 10.2003 10.7605 11.5792C10.72 11.9078 10.6986 12.2388 10.7009 12.5699C10.7009 14.6251 10.7009 16.6804 10.7057 18.7356C10.7057 18.9405 10.6556 19 10.4459 19C9.29207 18.9905 8.13828 18.9905 6.98448 19C6.79854 19 6.74609 18.9524 6.74609 18.7642C6.75086 14.6966 6.75086 10.6266 6.74609 6.55891C6.74609 6.35648 6.81285 6.31123 7.00356 6.31123C8.09775 6.31838 9.19433 6.32076 10.2885 6.31123C10.4912 6.31123 10.5412 6.37553 10.5388 6.56605C10.5269 7.05188 10.5341 7.53772 10.5341 8.02593H10.5317Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.25757 12.6745C4.25757 14.6869 4.25519 16.6992 4.26234 18.7116C4.26234 18.9355 4.20751 19.0022 3.97628 18.9998C2.83202 18.9879 1.68776 18.9903 0.541122 18.9998C0.357563 18.9998 0.302734 18.9545 0.302734 18.7664C0.307502 14.6916 0.307502 10.6168 0.302734 6.53966C0.302734 6.37057 0.343256 6.31104 0.522047 6.31104C1.68299 6.31818 2.84394 6.32056 4.00488 6.31104C4.22897 6.31104 4.25757 6.39439 4.25757 6.58729C4.2528 8.61635 4.25519 10.6454 4.25519 12.6745H4.25757Z"
                                                        fill="#FEFEFE"/>
                                                    <path
                                                        d="M4.57467 2.27436C4.57467 3.53894 3.54959 4.56776 2.28614 4.56776C1.03938 4.56776 0.00478416 3.53894 1.64127e-05 2.29341C-0.00475133 1.03596 1.02985 0 2.29091 0C3.54245 0 4.57228 1.02644 4.57467 2.27197V2.27436Z"
                                                        fill="#FEFEFE"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>



                {/* Security Section */}
                <div style={{backgroundColor: '#1F253B'}} className={'overflow-hidden'}>
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
                                        className="ps-title d-flex flex-column text-white mb-4"
                                        style={{gap: '1rem'}}
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{once: true}}
                                    >
                                        <motion.h3
                                            className="mb-3 text-start text-white"

                                            variants={fadeInUp}
                                        >
                                            Security is <span>our Obsession</span>

                                        </motion.h3>
                                        <p className={'text-white'}>
                                            When you trust us with your luxury timepieces, we take that
                                            responsibility
                                            seriously. Every watch is stored in state-of-the-art facilities with
                                            multiple layers of protection.
                                        </p>

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
                                                        backgroundColor: '#CCA35A'
                                                    }}
                                                    variants={scaleIn}
                                                    whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                                >
                                                <span className="fw-bold">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                         viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path
                                                        d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Z"/></svg>



                                                </span>
                                                </motion.div>
                                                <h5 className="fw-semibold mb-0" style={{
                                                    fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                                }}>
                                                    TransGuard<br/>
                                                    Partnership
                                                </h5>
                                                <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                    Industry-leading custody and insurance protocols backed by Lloyd's
                                                    of London.
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
                                                        backgroundColor: '#CCA35A'
                                                    }}
                                                    variants={scaleIn}
                                                       whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                                >
                                                <span className="fw-bold">
                                                   <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                        viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path
                                                       d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z"/></svg>


                                                </span>
                                                </motion.div>
                                        <h5 className="fw-semibold mb-0" style={{
                                            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'
                                        }}>
                                        24/7 <br/>
                                            Surveillance
                                        </h5>
                                        <p className="small mb-0" style={{fontSize: '0.875rem'}}>
                                                    Real-time monitoring with biometric access controls and redundant security systems.
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
                                                        backgroundColor: '#CCA35A'
                                                    }}
                                                    variants={scaleIn}
                                                    whileHover={{scale: 1.2, rotate: 360, transition: {duration: 0.5}}}
                                                >
                                                <span className="fw-bold">
                                                   <svg width="23" height="20" viewBox="0 0 23 20" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
<path
    d="M0 2.5C0 1.12109 1.12109 0 2.5 0H8.75V5C8.75 5.69141 9.30859 6.25 10 6.25H15V8.08594L11.375 9.53516C10.543 9.86719 10 10.6719 10 11.5664C10 13.7773 10.7383 17.3477 13.6797 19.7031C13.3281 19.8906 12.9258 20 12.5 20H2.5C1.12109 20 0 18.8789 0 17.5V2.5ZM15 5H10V0L15 5ZM16.5273 8.81641C16.75 8.72656 17 8.72656 17.2227 8.81641L21.9102 10.6914C22.2656 10.8359 22.5 11.1797 22.5 11.5625C22.5 14.0352 21.4883 18.1562 17.2344 19.9297C17.0039 20.0273 16.7422 20.0273 16.5117 19.9297C12.2617 18.1562 11.25 14.0352 11.25 11.5625C11.25 11.1797 11.4844 10.8359 11.8398 10.6914L16.5273 8.81641ZM20.6016 12.1875L16.875 10.6953V18.0352C19.5391 16.7461 20.4492 14.168 20.6016 12.1875Z"
    fill="white"/>
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
                                                    Every asset is insured from the moment it enters our custody until
                                                    final delivery.
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
                                    <img src="/images/securty.jpg" className="img-fluid w-100"
                                         style={{objectFit: 'cover'}}
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
