// import React from "react";
// import React, { useState } from "react";
import { useState } from "react";

import "./Activity.css";

const tours = [
  { title: "Tour Eiffel", duration: "Duration 60min", description: "Enjoy a breathtaking guided visit to the Eiffel Tower and learn about its history and architecture." },
  { title: "Louvre Museum", duration: "Duration 90min", description: "Discover world-famous artworks including the Mona Lisa, guided by an expert historian." },
  { title: "Trocadero Tour", duration: "Duration 60min", description: "Explore the Trocadero gardens with stunning views of the Eiffel Tower." },
  { title: "Versailles Tour", duration: "Duration 120min", description: "Visit the grand Palace of Versailles and its majestic gardens with a professional guide." },
];

const Activity = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section id="activities" className="activity-section">
        {/* First Section */}
        <div className="activity-card">
          <div className="activity-image">
            <img src="/assets/images/food1.png" alt="Typical Food" />
          </div>
          <div className="activity-content">
            <p className="activity-subtitle">LOCAL ACTIVITIES</p>
            <h1 className="activity-title">Typical Food</h1>
            <p className="activity-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>

        {/* Reverse Section */}
        <div className="activity-card reverse">
          <div className="activity-image">
            <img src="/assets/images/hourse.jpg" alt="Nature Exploration" />
          </div>
          <div className="activity-content">
            <p className="activity-subtitle">LOCAL ACTIVITIES</p>
            <h1 className="activity-title">Horse Ride</h1>
            <p className="activity-description">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt.
            </p>
          </div>

        </div>
        <hr></hr>
      </section>
      <hr className="hr-t"></hr>
      <section className="activities-section">
        <h5 className="activities-subtitle">LOCAL ACTIVITIES</h5>
        <h2 className="activities-title">Available Tours</h2>

        <div className="accordion">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "active" : ""
                }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">
                  {tour.title} - {tour.duration}
                </span>
                <span className="accordion-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{tour.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Activity;
