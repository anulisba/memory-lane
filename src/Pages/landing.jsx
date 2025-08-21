// import React, { useState, useEffect } from 'react';
import './landing.css';
// import { useNavigate } from 'react-router-dom';

const MemorialWebsite = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [visibleCards, setVisibleCards] = useState([]);
    // const navigate = useNavigate();
    // // Sample data - replace with your actual family information
    // const familyMembers = [
    //     {
    //         id: 1,
    //         name: "John Smith",
    //         years: "1925-2008",
    //         role: "Beloved Grandfather",
    //         description: "John was a war veteran and dedicated family man who loved gardening and storytelling.",
    //         image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    //     },
    //     {
    //         id: 2,
    //         name: "Mary Smith",
    //         years: "1930-2015",
    //         role: "Loving Grandmother",
    //         description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
    //         image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    //     },
    //     // Add more family members as needed
    // ];
    // const viewGllery = () => {
    //     navigate('/gallery');
    // }
    // const viewTimeline = () => {
    //     navigate('/timeline');
    // }
    // useEffect(() => {
    //     // Animation for member cards
    //     const timer = setTimeout(() => {
    //         setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    //     }, 100);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="memorial-website">
            {/* Header */}
            {/* <header className="header">
                <div className="container">
                    <div className="logo">
                        <h1>Smith Family Memorial</h1>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#family">Our Family</a></li>
                            <li><a href="#members">Family Members</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#timeline">Timeline</a></li>
                        </ul>
                    </nav>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>


            <section id="home" className="hero">
                <div className="hero-content">
                    <h2>In Loving Memory</h2>
                    <h1>The Smith Family Legacy</h1>
                    <p>Honoring the lives and memories of those who came before us</p>
                    <button className="cta-button">Explore Their Stories</button>
                </div>
                <div className="hero-overlay"></div>
            </section>


            <section id="family" className="family-intro">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Family Story</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="family-content">
                        <div className="family-text">
                            <p>
                                The Smith family has a rich history spanning over five generations.
                                Our ancestors came to this country with dreams of a better future and
                                worked tirelessly to build the foundation upon which our family stands today.
                            </p>
                            <p>
                                Through wars, economic hardships, and personal challenges, the Smith family
                                has always valued resilience, education, and compassion for others. This memorial
                                serves as a tribute to those who paved the way for our present and future generations.
                            </p>
                            <p>
                                We remember not just the dates of their lives, but the love they shared,
                                the wisdom they imparted, and the memories they created that continue to
                                inspire us every day.
                            </p>
                        </div>
                        <div className="family-image">
                            <div className="image-placeholder">
                                <span>Family Photo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="members" className="family-members">
                <div className="container">
                    <div className="section-title">
                        <h2>Remembering Our Loved Ones</h2>
                        <div className="underline"></div>
                        <p>Ten generations of love, legacy, and memories</p>
                    </div>
                    <div className="members-grid">
                        {familyMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className={`member-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                            >
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="member-overlay">
                                        <h3>{member.name}</h3>
                                        <p>{member.years}</p>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>{member.role}</h4>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="cta-section">
                <div className="container">
                    <h2>Preserving Our Family Heritage</h2>
                    <p>Explore our family's journey through generations</p>
                    <div className="cta-buttons">
                        <button className="btn-primary" onClick={viewGllery}>View Gallery</button>
                        <button className="btn-secondary" onClick={viewTimeline}>Family Timeline</button>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Smith Family Memorial. All rights reserved.</p>
                    <p>Created with love by the Smith family</p>
                </div>
            </footer> */}
        </div>
    );
};

export default MemorialWebsite;