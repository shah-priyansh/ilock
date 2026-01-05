import './LuxryFrame.css';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export const LuxryFrame = () => {
    return (
        <div>



            <section className="highest-prices-section custom-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0">
                            <VideoPlayer src="/images/map.mp4" className="img-fluid animated wow fadeInRight" />
                        </div>
                        <div className="col-md-6 order-2 order-sm-2 order-md-1">
                            <div className="section-content animated wow fadeInLeft">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        initial={{opacity: 0, y: 50, borderColor: "white"}}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#0290C4"
                                        }}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: {duration: 0.8, delay: 0.2}
                                        }}
                                    >
                                        Highest Prices
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                >
                                    Get the best price<br/>
                                    from our Global<br/>
                                    Dealer Network
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                                >
                                    <p>
                                        We identify dealers specializing in your particular brand or model. All prices
                                        are fully transparent so you know exact market value for your watch before you
                                        trade
                                    </p>
                                    <p>
                                        And once you get the highest price, we take care of the rest
                                    </p>
                                    <p>
                                        You get instant cash with no hastles for shipping and transport, no matter where
                                        in the world the dealer may be
                                    </p>
                                </motion.div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="highest-prices-section" style={{backgroundColor: 'rgb(250, 250, 250)'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-1 order-sm-1 order-md-1 mb-5 mb-sm-5 mb-md-0">
                            <VideoPlayer src="/images/coin.mp4" className="img-fluid animated wow fadeInLeft" />
                        </div>
                        <div className="col-md-6 order-2 order-sm-2 order-md-2">
                            <div className="section-content animated wow fadeInRight">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        initial={{opacity: 0, y: 50, borderColor: "transparent"}}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#0290C4"
                                        }}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: {duration: 0.8, delay: 0.2}
                                        }}
                                    >
                                        Instant Finance
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3 text-primary"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                >
                                    Get immediate <br/>
                                    cash at the <br/>
                                    highest, globally<br/>
                                    traded prices.
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                                >
                                    <p>
                                        Option to buy back your watch at a fixed future price while your watch is stored
                                        safely in a tamper-proof and fully insured high-security facility
                                    </p>
                                </motion.div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="secure-storage-section" style={{backgroundColor: '#484C52'}}>
                <div className="container-fluid px-0 overflow-hidden">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-1 order-sm-1 order-md-2 mb-5 mb-sm-5 mb-md-0">
                            <img src="/images/img3.jpg" className="img-fluid w-100 animated wow fadeInRight" alt="Secure Storage"/>
                        </div>
                        <div className="col-md-6 order-2 order-sm-2 order-md-1">
                            <div className="section-content left-custom-padding animated wow fadeInLeft">
                                <div className="sec-tag mb-5">
                                    <motion.span
                                        className="text-white"
                                        initial={{opacity: 0, y: 50, borderColor: "transparent"}}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#0290C4"
                                        }}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: {duration: 0.8, delay: 0.2}
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
                                    Custody by<br/>
                                    TransGuard
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
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

            <section className="our-globle-section custom-padding" style={{backgroundColor: 'rgb(149, 219, 247)'}}>
                <div className="container overflow-hidden">
                    <div className="row align-items-center">

                        <div className="col-md-12 mb-5">
                            <div className="section-content animated wow fadeInDown">
                                <motion.h1
                                    className="mb-3 text-white text-center"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut"}}
                                >
                                    Our global dealer network<br/>
                                    specilizes in the best luxury brands
                                </motion.h1>
                            </div>

                        </div>
                        <div className="col-md-12 text-center">
                            <VideoPlayer src="/images/brandscoin.mp4" className="img-fluid animated wow zoomIn mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-network-section custom-padding" style={{backgroundColor: 'rgb(150, 187, 180)'}}>
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
                                        initial={{opacity: 0, y: 50, borderColor: "transparent"}}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            borderColor: "#388768"
                                        }}
                                        viewport={{once: true, margin: "-100px"}}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                            borderColor: {duration: 0.8, delay: 0.2}
                                        }}
                                    >
                                        Join our global dealer network
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="mb-3 text-white"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                                >
                                    AuthenticShield <small>TM</small>
                                </motion.h1>
                                <motion.div
                                    className="sec-pra"
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, margin: "-100px"}}
                                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
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
            </section>

            <Footer />
        </div>
    );
};