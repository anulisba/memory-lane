import React, { useState, useEffect } from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';

const MemorialWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]);
    const navigate = useNavigate();

    const familyMembers = [
        {
            id: 1,
            name: "John Smith",
            years: "1925-2008",
            role: "Beloved Grandfather",
            description: "John was a war veteran and dedicated family man who loved gardening and storytelling.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            name: "Mary Smith",
            years: "1930-2015",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        // Add more family members here
    ];

    const viewGallery = () => navigate('/gallery');
    const viewTimeline = () => navigate('/timeline');

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleCards(familyMembers.map((_, index) => index));
        }, 100);
        return () => clearTimeout(timer);
    }, [familyMembers]);

    return (
        <div className="memorial-website">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <h1>Memory Lane</h1>
                    </div>
                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            {/* <li><a href="#family">Our Family</a></li>
                            <li><a href="#members">Family Members</a></li> */}
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#timeline">Timeline</a></li>
                        </ul>
                    </nav>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>In Loving Memory</h2>
                    <h1>The Memory Lane</h1>
                    <p>Honoring our beloved Madathinakath family members who have passed away</p>
                    <button className="cta-button" onClick={viewGallery}>Explore Their Stories</button>
                </div>
            </section>

            {/* Family Story */}
            <section id="family" className="family-intro">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Family Story</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="family-content">
                        <div className="family-text">
                            <p>
                                മഠത്തിനകത്ത് തൊമ്മൻ്റെയും ഏലിയുടെയും മകനായ ചാക്കോ തോക്കനാട്ട് കുടുംബത്തിലെ ഏലമ്മയെ (ഏലി ) വിവാഹം കഴിച്ച് കുടുംബമായി താമസിച്ചു കൊണ്ടിരുന്നകാഞ്ഞിരപ്പള്ളിയിൽ നിന്നും എലിക്കുളത്തേയ്ക്ക് വന്ന് താമസമാക്കിയതിനുശേഷം അവിടെ നിന്നും 1947-ൽ മലബാറിലെ പെരുവണ്ണാമൂഴിയിൽ വന്ന് താമസം സ്ഥിരപ്പെടുത്തുകയും പെരൂവണ്ണാമൂഴി ഇടവകാംഗമായി ജീവിക്കുകയും ചെയ്തു. ചാക്കോ-ഏലമ്മ ദമ്പതികൾക്ക് 5 ആൺമക്കളും 3 പെൺമക്കളുമാണ് ഉണ്ടായിരുന്നത്.  മക്കളും പേരക്കുട്ടികളുമായി കുറെ കുടുംബങ്ങൾ പെരുവണ്ണാമുഴിയിലും ചെമ്പനോടയിലുമായി താമസ്സിക്കുന്നു.
                            </p>
                            <p>
                                ചാക്കോയുടെ ഏലിയുടെയും രണ്ടാമത്തെ മകനായ പാപ്പച്ചൻ ചക്കിട്ടപാറ ചേന്നം പള്ളി കുടുംബാംഗമായ വർഗ്ഗീസ് അന്നമ്മ ദമ്പതികളുടെ മകളായ ഏലിക്കുട്ടിയെ വിവാഹം കഴിച്ച് പെരുവണ്ണാമൂഴിയിൽ തന്നെ താമസമാക്കുകയും ചെയ്തു.അവർക്കു ദൈവം ഒൻപതു ആണ്മക്കളെയും ഒരു മകളെയും നൽകി. അവർ കഠിനാദ്ധ്വാനത്തിലൂടെയും സ്ഥിരോത്സഹത്തിലൂടെയും ധാരാളം കൃഷി സ്ഥലങ്ങൾ ചെമ്പനോടയിലും പെരുവണ്ണാമൂഴിയിലുമായി സ്വന്തമാക്കി. പകർച്ചവ്യാധികളേയും കാട്ടുമൃഗങ്ങളേയും ചെറുത്ത് തോൽപ്പിച്ച് കൃഷി ചെയ്ത് നല്ല വിളവുകൾ നേടി. അക്കാലഘട്ടങ്ങളിൽ പള്ളിയുടെയും സ്ക്കൂളിൻ്റെയും നിർമ്മാണ പ്രവർത്തനങ്ങളിലും അത്മീയ കാര്യങ്ങളിലും താല്പര്യപൂർവ്വം പങ്കു ചേരുകയും ചില വർഷങ്ങളിൽ പള്ളിയുടെ കൈക്കാരനായിപ്രവർത്തിക്കുയും അതുകൂടാതെ ഇന്ന് പെരുവണ്ണാമൂഴി വട്ടക്കയം പുഴയോരത്തുകൂടി കടന്നുപോകുന്ന റോഡിൻ്റെ നിർമ്മാണത്തിന് ശ്രദ്ധേയമായ പങ്കുവഹിക്കുയും ചെയ്തിരുന്നു .
                            </p>
                            <p>
                                പാപ്പച്ചൻ (അബ്രാഹം) ഏലിക്കുട്ടി ദമ്പതികളുടെ പത്തു മക്കളിൽ പേരറിയാത്ത ഒരാൾ, ജോർജ്, സെലി, വിജയൻ, സോമൻ, ബാബു എന്നിവർ കർത്താവിൽ നിദ്ര പ്രാപിച്ചു.
                            </p>
                        </div>
                        <div className="family-image">
                            <img src="https://images.unsplash.com/photo-1529253355930-c5f5f2f9c3f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Family" className="luxury-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Members */}
            <section id="members" className="family-members">
                <div className="container">
                    <div className="section-title">
                        <h2>Remembering Our Loved Ones</h2>
                        <div className="underline"></div>
                        <p>Ten generations of love, legacy, and memories</p>
                    </div>
                    <div className="members-grid">
                        {familyMembers.map((member, index) => (
                            <div key={member.id} className={`member-card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="member-overlay">

                                    </div>
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.years}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Preserving Our Family Heritage</h2>
                    <p>Explore our family's journey through generations</p>
                    <div className="cta-buttons">
                        <button className="btn-primary" onClick={viewGallery}>View Gallery</button>
                        <button className="btn-secondary" onClick={viewTimeline}>Family Timeline</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Smith Family Memorial. All rights reserved.</p>
                    <p>Created with love by the Smith family</p>
                </div>
            </footer>
        </div>
    );
};

export default MemorialWebsite;
