// Timeline.jsx
import React, { useState, useEffect } from 'react';
import './timeline.css';
import { useNavigate } from 'react-router-dom';

const Timeline = () => {
    const [activeYear, setActiveYear] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    // Sample timeline data - replace with your actual family information
    const familyTimeline = [
        {
            year: 1904,
            title: "ജനനം",
            description: "ചാക്കോ മഠത്തിനകത്ത്",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758988545/WhatsApp_Image_2025-09-27_at_9.20.45_PM_wtkpsw.jpg",
        },
        {
            year: 1909,
            title: "ജനനം",
            description: "ഏലമ്മ ചാക്കോ",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758989010/WhatsApp_Image_2025-09-27_at_9.25.24_PM_1_k7wgyp.jpg",
            members: ["Great Grandmother"]
        },
        {
            year: 1926,
            title: "ജനനം",
            description: "അബ്രാഹം മഠത്തിനകത്ത് (പാപ്പച്ചൻ)",
            image: "https://images.unsplash.com/photo-1579118123582-366e837c2d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandfather", "Great Grandmother"]
        },
        {
            year: 1928,
            title: "ജനനം ",
            description: "ഏലിക്കുട്ടി (ചക്കിട്ടപാറ)",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Grandfather"]
        },
        {
            year: 1947,
            title: "മലബറിലേക്ക് കുടിയേറി (പെരുവണ്ണാമൂഴി)",
            description: "",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Uncle 1"]
        },
        {
            year: 1961,
            title: "ജനനം",
            description: "അബ്രാഹം എം. എ (സോമൻ)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758993906/WhatsApp_Image_2025-09-27_at_10.54.22_PM_twvz1u.jpg",
            members: ["Uncle 2"]
        },
        {
            year: 1963,
            title: "ജനനം",
            description: "തോമസ് എം. എ (ബാബു)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994716/WhatsApp_Image_2025-09-27_at_11.07.53_PM_zd26q1.jpg",
            members: ["Grandfather", "Grandmother"]
        },
        {
            year: 1983,
            title: "മരണം",
            description: "ചാക്കോ മഠത്തിനകത്ത്",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758988545/WhatsApp_Image_2025-09-27_at_9.20.45_PM_wtkpsw.jpg",
        },
        {
            year: 1985,
            title: "മരണം",
            description: "ഏലമ്മ ചാക്കോ",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758989010/WhatsApp_Image_2025-09-27_at_9.25.24_PM_1_k7wgyp.jpg",
            members: ["Great Grandmother"]
        },
        {
            year: 1988,
            title: "ജനനം ",
            description: "ഏലിക്കുട്ടി",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg",
            members: ["Child 3"]
        },
        {
            year: 1989,
            title: "മരണം",
            description: "ഏലിക്കുട്ടി",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg",
            members: ["Child 3"]
        },
        {
            year: 1990,
            title: " ജനനം",
            description: "മേരി",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png",
            members: ["Great Grandfather"]
        },
        {
            year: 1991,
            title: "മരണം",
            description: "മേരി",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png",
            members: ["Great Grandfather"]
        },
        {
            year: 1994,
            title: "ജനനം",
            description: "അബ്രാഹം",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png",
            members: ["Great Grandfather"]
        },
        {
            year: 1995,
            title: "മരണം",
            description: "അബ്രാഹം",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png",
            members: ["Great Grandfather"]
        },
        {
            year: 1998,
            title: "മരണം",
            description: "ഏലിക്കുട്ടി",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg",
            members: ["Great Grandfather"]
        },
        {
            year: 2011,
            title: "മരണം",
            description: "അബ്രഹാം മഠത്തിനകത്ത് (പാപ്പച്ചൻ)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg",
            members: ["Great Grandfather"]
        },
        {
            year: 2017,
            title: "മരണം",
            description: "തോമസ് എം. എ (ബാബു)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994716/WhatsApp_Image_2025-09-27_at_11.07.53_PM_zd26q1.jpg",
            members: ["Great Grandfather"]
        },
        {
            year: 2025,
            title: "മരണം",
            description: "അബ്രാഹം എം. എ (സോമൻ)",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758993906/WhatsApp_Image_2025-09-27_at_10.54.22_PM_twvz1u.jpg",
            members: ["Great Grandfather"]
        }
    ];

    useEffect(() => {
        // Trigger animation
        setIsVisible(true);

        // Set first event as active by default
        setActiveYear(familyTimeline[0].year);
    }, []);

    const toggleEvent = (year) => {
        if (activeYear === year) {
            setActiveYear(null);
        } else {
            setActiveYear(year);
        }
    };

    const viewGallery = () => navigate('/gallery');
    const viewHome = () => navigate('/')

    return (
        <div className="timeline-page">
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
                    <button className="btn-secondary" onClick={viewHome}>Home</button>
                    <button className="btn-secondary" onClick={viewGallery}>Gallery</button>
                    <button className="btn-primary">Timeline</button>
                </div>
            </section>
            <div className="timeline-header">
                <div className="container">
                    <h1>Family Timeline</h1>
                    <p>A journey through our family's history across generations</p>
                </div>
            </div>

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="container">
                    <div className={`timeline ${isVisible ? 'visible' : ''}`}>
                        {familyTimeline.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${activeYear === event.year ? 'active' : ''}`}
                                onClick={() => toggleEvent(event.year)}
                            >
                                <div className="event-date">{event.year}</div>
                                <div className="event-content">
                                    <h3 style={{ margin: "0" }}>{event.title}</h3>

                                    <div className="event-description">
                                        <h4>{event.description}</h4>
                                    </div>
                                    {/* <div className="event-image">
                                        <img src={event.image} alt={event.title} />
                                    </div> */}
                                </div>
                                <div className="event-marker"></div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </section>

            {/* Family Tree Section */}
            {/* <section className="family-tree-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Family Tree</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="family-tree">
                        <div className="generation">
                            <h3>Great Grandparents</h3>
                            <div className="family-members">
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>John Smith Sr.</h4>
                                    <p>1920 - 2008</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>Mary Johnson</h4>
                                    <p>1925 - 2015</p>
                                </div>
                            </div>
                        </div>

                        <div className="generation">
                            <h3>Their Children</h3>
                            <div className="family-members">
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>Robert Smith</h4>
                                    <p>1950 - Present</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>James Smith</h4>
                                    <p>1955 - Present</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>William Smith</h4>
                                    <p>1960 - Present</p>
                                </div>
                            </div>
                        </div>

                        <div className="generation">
                            <h3>Grandchildren</h3>
                            <div className="family-members">
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>Michael Smith</h4>
                                    <p>1985 - Present</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>Sarah Smith</h4>
                                    <p>1988 - Present</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>David Smith</h4>
                                    <p>1992 - Present</p>
                                </div>
                                <div className="family-member">
                                    <div className="member-photo"></div>
                                    <h4>Emily Smith</h4>
                                    <p>1995 - Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>Created with love by the Madathinakath family</p>
                </div>
            </footer>
        </div>
    );
};

export default Timeline;