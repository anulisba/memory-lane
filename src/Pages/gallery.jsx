// Gallery.jsx
import React, { useState, useEffect } from 'react';
import './gallery.css';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();
    // Sample gallery data - replace with your actual family photos
    const galleryImages = [
        {
            id: 1,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759250680/WhatsApp_Image_2025-09-29_at_11.04.23_PM_1_ajiead.jpg",
            title: "Grandparents Wedding Day",
            year: "1955",
            description: "John and Mary on their wedding day at St. Peter's Church"
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759250680/WhatsApp_Image_2025-09-28_at_10.43.27_PM_1_krfzd5.jpg",
            title: "Family Reunion 1982",
            year: "1982",
            description: "The entire Smith family gathering at the annual reunion"
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759250681/WhatsApp_Image_2025-09-30_at_2.17.36_PM_i2z2o9.jpg",
            title: "50th Anniversary",
            year: "2005",
            description: "Golden anniversary celebration for John and Mary"
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759250681/WhatsApp_Image_2025-09-28_at_10.57.28_PM_2_byst5w.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759250957/WhatsApp_Image_2025-09-30_at_10.17.32_PM_yrbepd.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759253898/WhatsApp_Image_2025-09-30_at_10.39.55_PM_ts9qdd.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 7,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759253904/WhatsApp_Image_2025-09-30_at_10.40.21_PM_y3osvn.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        }
        // ... add more photos here
    ];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxOpen) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') goToPrevious();
                if (e.key === 'ArrowRight') goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImage]);
    const viewHome = () => navigate('/');
    const viewTimeline = () => navigate('/timeline');
    return (
        <div className="gallery-page">
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
                    <button className="btn-primary">Gallery</button>
                    <button className="btn-secondary" onClick={viewTimeline}>Timeline</button>
                </div>
            </section>

            <div className="gallery-header">
                <div className="container">
                    <h1>Family Memories</h1>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="gallery-grid-section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="image-container">
                                    <img src={image.src} alt={image.title} />
                                    {/* <div className="image-overlay">
                                        <div className="overlay-content">
                                            <h3>{image.title}</h3>
                                            <p>{image.year}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <button className="lightbox-close" onClick={closeLightbox}>
                            &times;
                        </button>
                        <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
                            &#8249;
                        </button>
                        <button className="lightbox-nav lightbox-next" onClick={goToNext}>
                            &#8250;
                        </button>

                        <div className="lightbox-image-container">
                            <img
                                src={galleryImages[currentImage].src}
                                alt={galleryImages[currentImage].title}
                            />
                        </div>
                    </div>
                    <div className="lightbox-overlay" onClick={closeLightbox}></div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>Created with love by Madathinakath family</p>
                    <p>For Memorial Websites Contact us:</p>
                    <p>+91 9446914883</p>
                    <p>eternalroots2020@gmail.com</p>

                </div>
            </footer>
        </div>
    );
};

export default Gallery;
