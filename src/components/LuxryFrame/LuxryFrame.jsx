import './LuxryFrame.css';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export const LuxryFrame = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className="luxry-frame overflow-hidden">



            <section className="highest-prices-section custom-padding" style={{ backgroundColor: '#c5d9de' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <motion.div
                            className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                        >
                            <VideoPlayer src="/images/map-ilock.mp4" className="img-fluid" />
                        </motion.div>

                        <motion.div
                            className="col-md-6 order-2 order-sm-2 order-md-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <div className="section-content">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        initial={{ opacity: 0, y: 50, borderColor: "white" }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#003D69"
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: { duration: 0.8, delay: 0.2 }
                                        }}
                                    >
                                        Highest Prices
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                >

                                    Get the <span>best price</span> from<br />
                                     our <span> Global Dealer</span><br />
                                     Network
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                >




                                    <p>
                                        Your watch is priced through a competitive global dealer auction.
                                    </p>
                                  <p>
                                      Our dealers specialize in both popular and rare brands and models.
                                  </p>
                                   <p>
                                       Auction results are tansparentso you know market value of your watch.
                                   </p>
                                    <p>
                                        And once you get the best price, we take care of the rest. You access liquidity easily and we manage shipping and transport to anywhere in the world
                                    </p>

                                </motion.div>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="highest-prices-section" style={{ backgroundColor: '#3581A3' }}>
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
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        initial={{ opacity: 0, y: 50, borderColor: "transparent" }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#ffffff",
                                            color: "#ffffff",
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: { duration: 0.8, delay: 0.2 }
                                        }}
                                    >
                                        Watch Buy Back

                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3 text-white"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                >
                                    <span>Selling your watch  </span> doesn't <br/> have to be
                                    <span>permanent</span>
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                                >
                                    <p className={'text-white'}>
                                        You can get the highest market price for your watch through our global dealer
                                        network and choose to lock in a future buy-back price with a timeline that suits
                                        you.
                                    </p>
                                    <p className={'text-white'}>
                                        We facilitate structured asset transactions for luxury timepieces, enabling owners to unlock value through transparent resale and marketplace mechanisms.
                                    </p>
                                </motion.div>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="secure-storage-section" style={{backgroundColor: '#003D69'}}>
            <div className="container-fluid px-0 overflow-hidden">
                    <div className="row align-items-center">
                        <motion.div
                            className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                        >
                            <img src="/images/secure.png " className="img-fluid w-100" alt="Secure Storage" />
                        </motion.div>
                        <motion.div
                            className="col-md-6 order-2 order-sm-2 order-md-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                        >
                            <div className="section-content left-custom-padding">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        className="text-white"
                                        initial={{ opacity: 0, y: 50, borderColor: "transparent" }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#ffffff"
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
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                >
                                    Custody by <span>TransGuard</span>

                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                                >
                                    <p className="text-white">
                                        We’ve partnered with the best in the business!
                                    </p>
                                    <p className="text-white">
                                        TransGuard is the trusted custodian of banks, bullion investors and jewelers and holds Billions of dollars in Cash and valuables in their ultra-secured sites across the country
                                    </p>
                                    <p className="text-white">
                                        All asset are:
                                    </p>
                                    <ul className={'text-white ps-4'}>
                                        <li>Fully insured</li>
                                        <li>Camera-controlled authentication</li>
                                        <li>Tamper-proof packaging</li>
                                        <li>24/7 monitored vault storage</li>
                                    </ul>




                                </motion.div>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="our-globle-section custom-padding">
                <div className="container overflow-hidden">
                    <div className="row align-items-center">

                        <div className="col-md-12 mb-5">
                            <div className="section-content">
                                <motion.h1
                                    className="mb-3 text-white text-center"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut"}}
                                >
                                    Our <span>global dealer network</span> specializes<br/>
                                    in the best luxury brands

                                </motion.h1>
                            </div>

                        </div>
                        <motion.div
                            className="col-md-12 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                        >
                            <VideoPlayer src="/images/Coin 01.mp4" className="img-fluid mx-auto" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* <section className="join-network-section custom-padding" style={{ backgroundColor: 'rgb(150, 187, 180)' }}>
                <div className="container overflow-hidden">
                    <div className="row align-items-center">
                        <div
                            className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0 animated wow fadeInRight">
                            <div className="text-end mb-5">
                                <motion.img
                                    src="/images/shield-logo.svg"
                                    className="img-fluid ms-auto"
                                    alt="Authentic"
                                    style={{ maxWidth: '50%' }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                            </div>
                            <VideoPlayer src="/images/shield.mp4" className="img-fluid w-100" />
                        </div>
                        <div className="col-md-6 order-2 order-sm-2 order-md-1 ">
                            <div className="section-content green-section-content animated wow fadeInLeft">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        className="px-5"
                                        initial={{ opacity: 0, y: 50, borderColor: "transparent" }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#388768"
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: { duration: 0.8, delay: 0.2 }
                                        }}
                                    >
                                        Join our global dealer network
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3 text-white"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                >
                                    AuthenticShield <small>TM</small>
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                >
                                    <p className="text-white mb-0">
                                        Our trademark service that digitally confirms
                                    </p>
                                    <ul className="mb-5 text-white">
                                        <li> Authenticity</li>
                                        <li> Quality & Condition</li>
                                        <li> Ownership and Provenance</li>
                                        <li> Money-back Guarantee of Authenticity option</li>
                                    </ul>
                                    <p className="text-white">
                                        All watches are inspected by a certified member of AIWS (Association of
                                        Independent Watch Specialists) and recorded on an immutable NFT (Non fungible
                                        token) for future reference, significantly enhancing the value of your watch
                                    </p>
                                </motion.div>

                            </div>

                        </div>
                    </div>
                </div>
            </section> */}

            <Footer />
        </div>
    );
};