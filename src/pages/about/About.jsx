import React from "react";
import "./About.css";
import { FaParking, FaWheelchair, FaDog, FaUmbrellaBeach } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const testimonials = [
    {
      title: "Safe, elegant, and very relaxing.",
      image: "/assets/images/japan.png",
      review:
        "I felt completely safe and comfortable staying here as a solo female traveler. The place was clean, secure, and welcoming. Experiencing the local culture gave me a new and positive impression of Pakistan.",
      name: "— Natsuyo, Kanagawa Japan ",
    },
    {
      title: "I felt completely at home.",
      image: "/assets/images/japan.png",
      review:
        "Even during my two months business trip, I felt completely at ease. Everything was perfectly clean and beautifully organized, just like in Japan. Their kindness and attention to detail made my stay truly comfortable and peaceful.",
      name: "— Yukiyo, Saitama Japan ",
    },
    {
      title: "Safe, elegant, and very relaxing.",
      image: "/assets/images/japan.png",
      review:
        "DHA, Bahria Town is incredibly beautiful and secure, and the house was beyond my expectations. It’s rare to find a place abroad that feels this calm and refined.",
      name: "— Takuya, Saitama Japan ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="about-content">
          <p className="about-intro">About Us</p>
          <h1>A Japanese Sense of Serenity in Islamabad</h1>

          <p className="about-paragraph-one">
            Located in Islamabad, our home embodies the essence of Japanese living—clean, calm, and beautifully detailed.
            Created by Ai, a Japanese owner, it offers a peaceful retreat where refined comfort meets heartfelt hospitality.
          </p>

          <p className="about-paragraph-two">
            Every space is thoughtfully designed to reflect the values of Japanese simplicity and mindfulness, creating an
            atmosphere of serenity in the heart of Pakistan’s capital. From the minimalist interiors to the gentle warmth
            of natural light, every detail invites you to unwind and reconnect with yourself.
          </p>
          <p className="about-footer">Meet Your Host</p>
        </div>

        <div className="about-image">
          <img src="/assets/images/about.jpg" alt="About Bed & Breakfast" />
        </div>
      </section>

      <hr className="hr-tag" />

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="feature">
          <FaParking className="feature-icon" />
          <h3>Private Parking</h3>
          <p>
            Enjoy the convenience and security of dedicated private parking, offering safe and easy access to your vehicle throughout your stay.
          </p>
        </div>

        <div className="feature">
          <FaWheelchair className="feature-icon" />
          <h3>Accessible</h3>
          <p>
            Thoughtfully designed with accessibility in mind, featuring easy room access, spacious layouts, and facilities to ensure a comfortable stay for all guests.
          </p>
        </div>

        <div className="feature">
          <FaDog className="feature-icon" />
          <h3>Pet Friendly</h3>
          <p>
            We warmly welcome your furry companions — enjoy a comfortable stay with pet-friendly accommodations designed for both you and your pets.
          </p>
        </div>

        <div className="feature">
          <FaUmbrellaBeach className="feature-icon" />
          <h3>Patio Garden</h3>
          <p>
            Relax and unwind in our serene patio garden, beautifully landscaped with lush greenery — a perfect spot to enjoy fresh air and peaceful outdoor moments.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonial-overlay">
          <p className="testimonial-subtitle">Guest Impressions</p>
          <h2 className="testimonial-title">What Clients Say</h2>

          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-left">
                  <img src={item.image} alt={item.name} className="testimonial-img" />
                </div>
                <div className="testimonial-right">
                  <h3 className="testimonial-heading">“{item.title}”</h3>
                  <p className="testimonial-description">{item.review}</p>
                  <p className="testimonial-name">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default About;
