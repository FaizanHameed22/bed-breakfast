import React from "react";
import "./About.css";
import { FaParking, FaWheelchair, FaDog, FaUmbrellaBeach } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const testimonials = [
    {
      name: "Roberta",
      date: "12 Oct",
      image: "/assets/images/client1.jpg",
      review:
        "Mea ad postea meliore fuisset. Timeam repudiare id eum, ex paulo dictas elaboraret sed, mel cu unum nostrud.",
    },
    {
      name: "Jonathan",
      date: "25 Sep",
      image: "/assets/images/client2.jpg",
      review:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.",
    },
    {
      name: "Sophia",
      date: "10 Aug",
      image: "/assets/images/client3.jpg",
      review:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
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


      <section id="about" className="about-section">
        <div className="about-content">
          <p className="about-p">About Us</p>
          <h1>
            Makes your self at home<br /> and enjoy a unique<br /> experience
          </h1>
          <p>
            Welcome to <strong>Bed & Breakfast</strong> your cozy escape from the
            ordinary!<br /> Nestled in nature, our retreat blends comfort, warmth,
            and hospitality to create unforgettable stays.
          </p>
          <p>
            Whether you’re looking for a peaceful weekend getaway or a serene
            countryside retreat, we make your experience relaxing and memorable.
          </p>
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
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>

        <div className="feature">
          <FaWheelchair className="feature-icon" />
          <h3>Accessible</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
          </p>
        </div>

        <div className="feature">
          <FaDog className="feature-icon" />
          <h3>Pet Friendly</h3>
          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
        </div>

        <div className="feature">
          <FaUmbrellaBeach className="feature-icon" />
          <h3>Patio Garden</h3>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonial-overlay">
          {/* <p className="testimonial-subtitle">TESTIMONIALS</p> */}
          <h2 className="testimonial-title">What Clients Says</h2>

          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-left">
                  <img src={item.image} alt={item.name} className="testimonial-img" />
                  <div className="testimonial-info">
                    <h4>{item.name}</h4>
                    <p>{item.date}</p>
                  </div>
                </div>
                <div className="testimonial-right">
                  <p>"{item.review}"</p>
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
