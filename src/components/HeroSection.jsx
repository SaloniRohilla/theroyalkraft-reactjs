import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'animate.css'; // Import Animate.css
import '../styles/HeroSection.css'; // Import your custom CSS file

const HeroSection = () => {
  return (
    <section className="carousel-container">
      {/* Bootstrap Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img src="./images/hero.jpg" className="d-block w-100" alt="Hero Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="title">The Royal Kraft</h1>
              <div className="description-background">
                <p className="description">"Your Vision, Our Craft!💜"</p>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img src="./images/slide2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="title animate__animated animate__fadeInUp">Crafting Beautiful Interiors</h1>
              <div className="description-background">
                <p className="description">Transforming spaces into elegant and functional environments, tailored to reflect your unique style and elevate every experience.</p>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img src="./images/slide3.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="title animate__animated animate__fadeInUp">Exclusive Ceiling Designs</h1>
              <div className="description-background">
                <p className="description">Elevate your interiors with custom-crafted ceilings, blending artistry and innovation to create stunning visual focal points for any space.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
