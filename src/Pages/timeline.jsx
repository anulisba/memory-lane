// Timeline.jsx
import React, { useState, useEffect } from 'react';
import './timeline.css';

const Timeline = () => {
    const [activeYear, setActiveYear] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    // Sample timeline data - replace with your actual family information
    const familyTimeline = [
        {
            year: 1920,
            title: "Birth of Great Grandfather",
            description: "John Smith Sr. was born in Springfield. He would later become the family patriarch and establish the family business.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandfather"]
        },
        {
            year: 1925,
            title: "Birth of Great Grandmother",
            description: "Mary Johnson was born in Oakville. She met John at a community dance in 1945.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandmother"]
        },
        {
            year: 1948,
            title: "Great Grandparents' Wedding",
            description: "John and Mary married in a beautiful ceremony at St. Mary's Church. The reception was held at the family farm.",
            image: "https://images.unsplash.com/photo-1579118123582-366e837c2d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandfather", "Great Grandmother"]
        },
        {
            year: 1950,
            title: "Birth of Grandfather",
            description: "Robert Smith was born, the first child of John and Mary. He would later take over the family business.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Grandfather"]
        },
        {
            year: 1955,
            title: "Birth of Uncle 1",
            description: "James Smith was born, the second son of John and Mary. He would become a respected teacher in the community.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Uncle 1"]
        },
        {
            year: 1960,
            title: "Birth of Uncle 2",
            description: "William Smith was born, the youngest son of John and Mary. He moved to the city to pursue a career in medicine.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Uncle 2"]
        },
        {
            year: 1980,
            title: "Grandfather's Marriage",
            description: "Robert Smith married Elizabeth Brown in a summer ceremony. They honeymooned in the mountains.",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Grandfather", "Grandmother"]
        },
        {
            year: 1985,
            title: "Birth of Child 1",
            description: "Michael Smith was born, the first child of Robert and Elizabeth. He was born on a snowy winter morning.",
            image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Child 1"]
        },
        {
            year: 1988,
            title: "Birth of Child 2",
            description: "Sarah Smith was born, the second child of Robert and Elizabeth. She arrived just as spring flowers were blooming.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Child 2"]
        },
        {
            year: 1992,
            title: "Birth of Child 3",
            description: "David Smith was born, the third child of Robert and Elizabeth. He was the smallest of the newborns but grew quickly.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Child 3"]
        },
        {
            year: 1995,
            title: "Birth of Child 4",
            description: "Emily Smith was born, the youngest child of Robert and Elizabeth. She completed the family.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Child 4"]
        },
        {
            year: 2008,
            title: "Passing of Great Grandfather",
            description: "John Smith Sr. passed away peacefully surrounded by family. His legacy lived on through his children and grandchildren.",
            image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandfather"]
        },
        {
            year: 2015,
            title: "Passing of Great Grandmother",
            description: "Mary Smith passed away after a brief illness. She was remembered for her kindness and delicious apple pies.",
            image: "https://images.unsplash.com/photo-1574362848142-4dde41d53d2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            members: ["Great Grandmother"]
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

    return (
        <div className="timeline-page">
            {/* Header */}
            <header className="timeline-header">
                <div className="container">
                    <h1>Family Timeline</h1>
                    <p>A journey through our family's history across generations</p>
                </div>
            </header>

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
                                    <h3>{event.title}</h3>
                                    <div className="event-members">
                                        {event.members.map((member, i) => (
                                            <span key={i} className="member-tag">{member}</span>
                                        ))}
                                    </div>
                                    <div className="event-description">
                                        <p>{event.description}</p>
                                    </div>
                                    <div className="event-image">
                                        <img src={event.image} alt={event.title} />
                                    </div>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </section>

            {/* Family Tree Section */}
            <section className="family-tree-section">
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
            </section>

            {/* Footer */}
            <footer className="timeline-footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Smith Family Memorial. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Timeline;