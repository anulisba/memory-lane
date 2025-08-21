// Gallery.jsx
import React, { useState, useEffect } from 'react';
import './gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    // Sample gallery data - replace with your actual family photos
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1579118123582-366e837c2d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "wedding",
            title: "Grandparents Wedding Day",
            year: "1955",
            description: "John and Mary on their wedding day at St. Peter's Church"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "family",
            title: "Family Reunion 1982",
            year: "1982",
            description: "The entire Smith family gathering at the annual reunion"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "celebration",
            title: "50th Anniversary",
            year: "2005",
            description: "Golden anniversary celebration for John and Mary"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "vacation",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1519735772110-1c5d5d7c5c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "wedding",
            title: "Cousin's Wedding",
            year: "2010",
            description: "Sarah's wedding to Michael at the garden estate"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "family",
            title: "Christmas Gathering",
            year: "2015",
            description: "Annual Christmas celebration at the family home"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "celebration",
            title: "Grandma's 80th Birthday",
            year: "2012",
            description: "Surprise birthday party for Mary's 80th"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "vacation",
            title: "Mountain Retreat",
            year: "2002",
            description: "Family trip to the mountains during fall"
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "wedding",
            title: "Niece's Wedding",
            year: "2018",
            description: "Jennifer's beautiful summer wedding"
        },
        {
            id: 10,
            src: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "family",
            title: "Family Portrait",
            year: "2020",
            description: "Professional family portrait session"
        },
        {
            id: 11,
            src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "celebration",
            title: "Graduation Party",
            year: "2019",
            description: "Celebrating Mark's college graduation"
        },
        {
            id: 12,
            src: "https://images.unsplash.com/photo-1574362848142-4dde41d53d2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
            category: "vacation",
            title: "Lake House Vacation",
            year: "2017",
            description: "Summer week at the family lake house"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Memories' },
        { id: 'wedding', name: 'Weddings' },
        { id: 'family', name: 'Family Gatherings' },
        { id: 'celebration', name: 'Celebrations' },
        { id: 'vacation', name: 'Vacations' }
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(image => image.category === selectedCategory);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const goToPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    };

    // Handle keyboard navigation
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

    return (
        <div className="gallery-page">
            {/* Header */}
            <header className="gallery-header">
                <div className="container">
                    <h1>Family Memories</h1>
                    <p>A visual journey through our family's history and cherished moments</p>
                </div>
            </header>

            {/* Category Filters */}
            <section className="category-filters">
                <div className="container">
                    <div className="filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-grid-section">
                <div className="container">
                    <div className="gallery-grid">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="image-container">
                                    <img src={image.src} alt={image.title} />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <h3>{image.title}</h3>
                                            <p>{image.year}</p>
                                        </div>
                                    </div>
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
                                src={filteredImages[currentImage].src}
                                alt={filteredImages[currentImage].title}
                            />
                        </div>

                        <div className="lightbox-caption">
                            <h3>{filteredImages[currentImage].title}</h3>
                            <p className="image-year">{filteredImages[currentImage].year}</p>
                            <p>{filteredImages[currentImage].description}</p>
                        </div>
                    </div>
                    <div className="lightbox-overlay" onClick={closeLightbox}></div>
                </div>
            )}

            {/* Footer */}
            <footer className="gallery-footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Smith Family Memorial. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Gallery;