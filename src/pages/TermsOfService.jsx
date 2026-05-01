import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './LegalPage.css';

const TermsOfService = () => {
    return (
        <>
            <Header />
            <div className="legal-page">
                <div className="container">
                    <h1>Terms &amp; Conditions</h1>
                    <p className="legal-updated">Last updated: April 2026</p>

                    <section>
                        <h2>1. Overview</h2>
                        <p>
                            These Terms &amp; Conditions ("Terms") govern your use of the Capital Custodia website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
                        </p>
                    </section>

                    <section>
                        <h2>2. Services</h2>
                        <p>
                            Capital Custodia operates a structured asset purchase platform for luxury timepieces. We facilitate the sale of luxury watches through a competitive global dealer network and offer an optional re-purchase arrangement under pre-agreed terms.
                        </p>
                    </section>

                    <section>
                        <h2>3. Transaction Terms</h2>
                        <p>
                            All commission and re-purchase terms are disclosed in writing during your private consultation, before you accept any offer. Capital Custodia does not provide loans or financing. All transactions are structured as outright purchases with an optional re-purchase agreement.
                        </p>
                    </section>

                    <section>
                        <h2>4. Pricing</h2>
                        <p>
                            Watch pricing is determined through a competitive process involving multiple professional dealers from around the world. Prices reflect real market demand. A full market pricing report is provided so you know exactly what dealers worldwide are offering for your watch.
                        </p>
                    </section>

                    <section>
                        <h2>5. Custody and Security</h2>
                        <p>
                            All watches are professionally authenticated, insured, and stored with our trusted custody partner under 24/7 surveillance. Legal ownership is verified and confirmed before any transaction proceeds.
                        </p>
                    </section>

                    <section>
                        <h2>6. Confidentiality</h2>
                        <p>
                            All consultations and transactions are conducted in strict confidence. We use fully encrypted communications and do not publicly expose any client information.
                        </p>
                    </section>

                    <section>
                        <h2>7. Dispute Resolution</h2>
                        <p>
                            Any disputes arising from or related to these Terms or our services shall be governed by and construed in accordance with the laws of the United Arab Emirates. The parties agree to submit to the exclusive jurisdiction of the courts of Dubai, UAE, for the resolution of any such disputes.
                        </p>
                    </section>

                    <section>
                        <h2>8. Limitation of Liability</h2>
                        <p>
                            Capital Custodia shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, except where such liability cannot be excluded by law.
                        </p>
                    </section>

                    <section>
                        <h2>9. Amendments</h2>
                        <p>
                            We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2>10. Contact</h2>
                        <p>
                            For questions regarding these Terms, please reach out through our <a href="/contact">Contact page</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;
