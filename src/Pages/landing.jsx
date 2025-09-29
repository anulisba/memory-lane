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
            name: "ചാക്കോ മഠത്തിനകത്ത്",
            years: "13/08/1904 - 14/10/1983",
            role: "Beloved Grandfather",
            description: "John was a war veteran and dedicated family man who loved gardening and storytelling.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758988545/WhatsApp_Image_2025-09-27_at_9.20.45_PM_wtkpsw.jpg"
        },
        {
            id: 2,
            name: "ഏലമ്മ ചാക്കോ",
            years: "08/11/1909 - 02/06/1985",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758989010/WhatsApp_Image_2025-09-27_at_9.25.24_PM_1_k7wgyp.jpg"
        },
        {
            id: 3,
            name: "അബ്രാഹം മഠത്തിനകത്ത് (പാപ്പച്ചൻ)",
            years: "18/08/1926 - 26/12/2011",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759166015/WhatsApp_Image_2025-09-29_at_9.43.57_PM_c9lxjg.jpg"
        },
        {
            id: 4,
            name: "ഏലിക്കുട്ടി",
            years: "22/02/1928 - 2/10/1998",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759166017/WhatsApp_Image_2025-09-29_at_9.43.57_PM_1_efir4e.jpg"
        },
        {
            id: 5,
            name: "അബ്രാഹം എം. എ (സോമൻ)",
            years: "09/10/1961 - 24/05/2025",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758993906/WhatsApp_Image_2025-09-27_at_10.54.22_PM_twvz1u.jpg"
        },
        {
            id: 6,
            name: "തോമസ് എം. എ (ബാബു)",
            years: "05/10/1965 - 22/09/2017",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994716/WhatsApp_Image_2025-09-27_at_11.07.53_PM_zd26q1.jpg"
        },
        {
            id: 7,
            name: "ഏലിക്കുട്ടി",
            years: "01/06/1988 - 22/06/1989",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg"
        },
        {
            id: 8,
            name: "മേരി",
            years: "03/09/1990 - 04/08/1991",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png"
        },
        {
            id: 9,
            name: "അബ്രാഹം",
            years: "09/09/1994 - 23/03/1995",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png"
        }
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

                </div>
            </header>
            {/* Secondary Navbar for CTA buttons */}
            <section className="secondary-nav">
                <div className="container">
                    <button className="btn-primary">Home</button>
                    <button className="btn-secondary" onClick={viewGallery}>Gallery</button>
                    <button className="btn-secondary" onClick={viewTimeline}>Timeline</button>
                </div>
            </section>


            {/* Hero Section */}
            {/* <section id="home" className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>In Loving Memory</h2>
                    <h1>The Memory Lane</h1>
                    <p>Honoring our beloved Madathinakath family members who have passed away</p>
                    <button className="cta-button" onClick={viewGallery}>Explore Their Stories</button>
                </div>
            </section> */}
            <section id="members" className="family-members">
                <div className="container">
                    <div className="section-title">
                        <h2>ഞങ്ങളുടെ പ്രിയപ്പെട്ടവരുടെ സ്മരണയിൽ</h2>
                        <div className="underline"></div>

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
            {/* Family Story */}
            <section id="family" className="family-intro">
                <div className="container">
                    <div className="section-title">
                        <h2>കാലങ്ങളിലൂടെ കുടുംബം</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="family-content">
                        <div className="family-text">
                            <p>
                                മഠത്തിനകത്ത് തൊമ്മൻ്റെയും ഏലിയുടെയും മകനായ ചാക്കോ തോക്കനാട്ട് കുടുംബത്തിലെ ഏലമ്മയെ (ഏലി ) വിവാഹം കഴിച്ച് കുടുംബമായി താമസിച്ചു കൊണ്ടിരുന്നകാഞ്ഞിരപ്പള്ളിയിൽ നിന്നും എലിക്കുളത്തേയ്ക്ക് വന്ന് താമസമാക്കിയതിനുശേഷം അവിടെ നിന്നും 1947-ൽ മലബാറിലെ പെരുവണ്ണാമൂഴിയിൽ വന്ന് താമസം സ്ഥിരപ്പെടുത്തുകയും പെരൂവണ്ണാമൂഴി ഇടവകാംഗമായി ജീവിക്കുകയും ചെയ്തു. ചാക്കോ-ഏലമ്മ ദമ്പതികൾക്ക് 5 ആൺമക്കളും 3 പെൺമക്കളുമാണ് ഉണ്ടായിരുന്നത്. മക്കളും പേരക്കുട്ടികളുമായി കുറെ കുടുംബങ്ങൾ പെരുവണ്ണാമുഴിയിലും ചെമ്പനോടയിലുമായി താമസ്സിക്കുന്നു.മരണാനന്തരം മഠത്തിനകത്ത് ചാക്കോയുടെയും ഏല മ്മയുടെയുംഭൗതികശരീരം പെരുവണ്ണാമൂഴി ഫാത്തിമാമാതാ പള്ളി സെമിത്തേരിയിൽ അന്ത്യവിശ്രമം കൊള്ളുന്ന ഈ കുടുബകല്ലറയിൽ പിന്നിടുള്ള നാളുകളിൽ നിത്യ സമ്മാനത്തിനായി വിളിക്കപ്പെട്ട അവരുടെ മക്കളൂടെയും കൊച്ചുമക്കളുടെയും പേര് വിവരങ്ങളാണ് ഇതിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നത്.
                            </p>
                            <p>
                                ചാക്കോയുടെ ഏലിയുടെയും രണ്ടാമത്തെ മകനായ പാപ്പച്ചൻ, ചക്കിട്ടപാറ ചേന്നം പള്ളി കുടുംബാംഗമായ വർഗ്ഗീസ് അന്നമ്മ ദമ്പതികളുടെ മകളായ ഏലിക്കുട്ടിയെ വിവാഹം കഴിച്ച് പെരുവണ്ണാമൂഴിയിൽ തന്നെ താമസമാക്കുകയും ചെയ്തു. അവർക്കു ദൈവം ഒൻപതു ആണ്മക്കളെയും ഒരു മകളെയും നൽകി. അവർ കഠിനാദ്ധ്വാനത്തിലൂടെയും സ്ഥിരോത്സഹത്തിലൂടെയും ധാരാളം കൃഷി സ്ഥലങ്ങൾ ചെമ്പനോടയിലും പെരുവണ്ണാമൂഴിയിലുമായി സ്വന്തമാക്കി. പകർച്ചവ്യാധികളേയും കാട്ടുമൃഗങ്ങളേയും ചെറുത്ത് തോൽപ്പിച്ച് കൃഷി ചെയ്ത്  നല്ല വിളവുകൾ നേടി. ആ കാലഘട്ടങ്ങളിൽ പള്ളിയുടെയും സ്കൂളിൻ്റെയും നിർമ്മാണ പ്രവർത്തനങ്ങളിലും ആത്മീയകാര്യങ്ങളിലും താല്പര്യപൂർവ്വം പങ്കുചേരുകയും ചില വർഷങ്ങളിൽ പള്ളിയുടെ കൈക്കാരനായിപ്രവർത്തിക്കുയും ചെയ്തു .അതുകൂടാതെ ഇന്ന് പെരുവണ്ണാമൂഴി വട്ടക്കയം  പുഴയോരത്തുകൂടി  കടന്നുപോകുന്ന റോഡിൻ്റെ നിർമ്മാണത്തിന് ശ്രദ്ധേയമായ പങ്കുവഹിക്കുയും ചെയ്തിരുന്നു .
                            </p>
                            <p>
                                പാപ്പച്ചൻ (അബ്രാഹം) ഏലിക്കുട്ടി ദമ്പതികളുടെ  പത്തു മക്കളിൽ കുഞ്ഞുവാവ , ജോർജ്, സെലി, വിജയൻ, അബ്രാഹം (സോമൻ), തോമസ്  (ബാബു) എന്നിവർ  കർത്താവിൽ നിദ്ര പ്രാപിച്ചു. കൂടാതെ പാപ്പച്ചൻ (അബ്രാഹം) ഏലിക്കുട്ടി ദമ്പതികളുടെ നാലു പേരക്കുട്ടികൾ കൂടി ഈ കല്ലറയിൽ അന്ത്യവിശ്രമം കൊള്ളുന്നുണ്ട്.
                            </p>
                        </div>
                        <div className="family-image">
                            <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1759067552/WhatsApp_Image_2025-09-28_at_7.21.15_PM_hi2yve.jpg"
                                alt="Family" className="luxury-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Members */}
            {/* <section id="members" className="family-members">
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
            </section> */}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>വിശ്വസിക്കുന്നവൻ ഒരിക്കലും മരിക്കയില്ല</h2>
                    <p>
                        യേശു അവളോടു പറഞ്ഞു: പുനരുത്ഥാനവും ജീവനും ഞാനാകുന്നു;
                        എന്നിൽ വിശ്വസിക്കുന്നവൻ മരിച്ചാലും ജീവിക്കും;
                        ജീവിച്ചുകൊണ്ടു എന്നിൽ വിശ്വസിക്കുന്നവൻ ഒരിക്കലും മരിക്കയില്ല.”
                        (യോഹന്നാൻ 11:25-26)
                    </p>

                    {/* Minimal Cross */}
                    <div className="minimal-cross">
                        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="15" y1="0" x2="15" y2="60" stroke="#F0EDE6" strokeWidth="2" />
                            <line x1="0" y1="15" x2="30" y2="15" stroke="#F0EDE6" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>Created with love by the Madathinakath family</p>
                </div>
            </footer>
        </div>
    );
};

export default MemorialWebsite;
