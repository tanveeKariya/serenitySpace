import React from 'react';
import './DiscoverServices.css'; // Link to your existing CSS file

const DiscoverServices = () => {
    return (
        <div className="discover-container">
            <div className="discover-text-content">
                <p>
                    Transform your life with tools and resources designed for your well-being.
                </p>
                <h1>
                    Discover Our Services
                </h1>
                {/* eslint-disable-next-line */}
                <a className="btn" href="/">
                    Learn More
                </a>
            </div>
            <div className="discover-image-content">
                <img
                    alt="Two people working in a workshop, one holding a bottle and the other focused on their task."
                    height="400"
                    src="https://storage.googleapis.com/a1aa/image/KzicAd1cd0r9D5KHLfH0atnyaiWOVT4tC2HKYlMpegoteDAoA.jpg"
                    width="600"
                />
            </div>
        </div>
    );
};

const WellnessResources = () => {
    return (
        <div>
            {/* Wellness Cards Section */}
            <div className="wellness-container">
                <div className="wellness-card">
                    <img
                        alt="People sitting on a rock by the sea"
                        height="150"
                        src="https://storage.googleapis.com/a1aa/image/4VrnnkHUKFZ6D1SgT9UMRyY1vzdfeb8vjxlpmzDCkta9PCAUA.jpg"
                        width="150"
                    />
                    <div>
                        <h3>Stress Management</h3>
                        <p>Explore techniques to handle stress effectively.</p>
                    </div>
                </div>
                <div className="wellness-card">
                    <img
                        alt="Person reading a book"
                        height="150"
                        src="https://storage.googleapis.com/a1aa/image/x8i7fBeY1kuf7of6gCtwa1iZl8sWBaG3OJU6AEh7HnDGAJAQB.jpg"
                        width="150"
                    />
                    <div>
                        <h3>Daily Affirmations</h3>
                        <p>Boost positivity with tailored affirmations.</p>
                    </div>
                </div>
                
                <div className="wellness-card">
                    <img
                        alt="Starry night sky"
                        height="150"
                        src="https://storage.googleapis.com/a1aa/image/Dj64ttjyJ6qBGdbCcbNOEClwnsKR4rqN3LJUaak5HqMfHBAKA.jpg"
                        width="150"
                    />
                    <div>
                        <h3>Audio &amp; Video Library</h3>
                        <p>Access a collection of calming resources.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Our Services Section */}
            <div className="fcontainer">
                <div className="fimage-section">
                    <img
                        alt="A laptop on a green surface with decorative items in the background"
                        height="400"
                        src="https://storage.googleapis.com/a1aa/image/FC3w3fe5C9rZOUiz77KPwdTT3teAwzQSF732IGxvs8YNFIAoA.jpg"
                        width="600"
                    />
                </div>
                <div className="fcontent-section">
                    <h2>Why Choose Our Services?</h2>
                    <div className="fservice">
                        <h3>Expert Guidance</h3>
                        <p>Access tools and resources designed by wellness experts.</p>
                    </div>
                    <div className="fservice">
                        <h3>Holistic Approach</h3>
                        <p>Combining mental, emotional, and physical well-being.</p>
                    </div>
                    <div className="fservice">
                        <h3>Easy Access</h3>
                        <p>Simple tools you can use anytime, anywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DiscoverServices, WellnessResources };
