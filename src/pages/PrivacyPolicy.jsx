import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './LegalPage.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="legal-page">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p className="legal-updated">Last updated: April 2026</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Capital Custodia ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide during consultations or through our contact forms.</li>
                            <li><strong>Transaction Information:</strong> Details related to watch valuations, sales, and re-purchase agreements.</li>
                            <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide and manage our services, including watch valuations and transactions.</li>
                            <li>Communicate with you regarding your consultations and transactions.</li>
                            <li>Improve our website and services.</li>
                            <li>Comply with legal and regulatory requirements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Encrypted Communications</h2>
                        <p>
                            All communications between you and Capital Custodia are fully encrypted. We use industry-standard encryption protocols to ensure that your personal and transaction data remains confidential and secure at all times.
                        </p>
                    </section>

                    <section>
                        <h2>5. Custody Arrangements</h2>
                        <p>
                            All watches entrusted to Capital Custodia are stored with our trusted custody partner, a leading security and logistics provider. Watches are authenticated, insured, and stored under 24/7 surveillance with biometric access controls.
                        </p>
                    </section>

                    <section>
                        <h2>6. Data Sharing and Disclosure</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. We may share your information only with:
                        </p>
                        <ul>
                            <li>Our trusted partners solely for the purpose of fulfilling our services.</li>
                            <li>Legal authorities when required by law or to protect our rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>7. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2>8. Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at the details provided on our Contact page.
                        </p>
                    </section>

                    <section>
                        <h2>9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section>
                        <h2>10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us through our <a href="/contact">Contact page</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
