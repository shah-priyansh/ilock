import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import '../HeroSection/HeroSection.css';

const Header = ({ logo }) => {
    const headerRef = useRef();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                headerRef.current?.classList.add('scrolled');
            } else {
                headerRef.current?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on window resize (if it becomes desktop)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen &&
                headerRef.current &&
                !headerRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="header" ref={headerRef}>
            <div className="header-content">
                {/* Logo and Brand */}
                <div className="logo-section">
                    <Link to="/">
                        {logo ? <img src={logo} alt="iLock" className="custom-logo" /> : <Logo />}
                    </Link>
                </div>

                {/* Desktop Navigation Menu */}
                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    {/* <a href="#" className="nav-link">Services</a> */}
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/contact" className="nav-link">Contact & Support</Link>
                    <a href="#" className="nav-link">Download App</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <nav 
                className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={(e) => {
                    // Close menu when clicking on backdrop
                    if (e.target === e.currentTarget) {
                        setIsMobileMenuOpen(false);
                    }
                }}
            >
                <div className="mobile-menu-content">
                    <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    {/* <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a> */}
                    <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <div className="mobile-menu-logo">
                        <Logo />
                    </div>
                    <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact & Support</Link>
                    <a href="#" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Download App</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;

