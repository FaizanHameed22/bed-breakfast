import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Contact.css";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("availability");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <section id="contacts">
    <div className="contact-container">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h4 className="subtitle">LUXURY B&B EXPERIENCE</h4>
        <h1 className="title">Address</h1>
        <p>
          Baker Street 567, Los Angeles 11023
          <br />
          California - US
        </p>

        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <p>BOOKINGS</p>
              <h4>+41 934 121 1334</h4>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <p>QUESTIONS</p>
              <h4>info@domain.com</h4>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-x-twitter"></i>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <div className="tabs">
          <button
            className={activeTab === "availability" ? "active" : ""}
            onClick={() => setActiveTab("availability")}
          >
            Check Availability
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
        </div>

        {activeTab === "availability" && (
          <div className="availability-section">
            <div className="calendar-container">
              <div className="calendar">
                <h3>Check-in</h3>
                <Calendar
                  value={checkInDate}
                  onChange={setCheckInDate}
                  minDate={new Date()}
                  className="calender-wrapper"
                />
              </div>
            </div>

            <div className="form-row">
              <select>
                <option>Select Room</option>
                <option>Double Room</option>
                <option>Deluxe Room</option>
                <option>Superior Room</option>
                <option>Junior suit</option>
              </select>
              <div className="counter">
                <label>Adults</label>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="counter">
                <label>Children</label>
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </div>

            <div className="form-row">
              <input type="text" placeholder="Name and Last Name" />
              <input type="email" placeholder="Email" />
            </div>

            <div className="human-check">
              <label>Are you human?</label>
              <input type="text" placeholder="3 + 1 = ?" />
            </div>

            <button className="check-btn">Check Now</button>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="contact-form-section">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Telephone" />
            </div>
            <textarea placeholder="Message"></textarea>

            <div className="human-check">
              <label>Are you human?</label>
              <input type="text" placeholder="3 + 1 = ?" />
            </div>

            <button className="submit-btn">Submit</button>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Contact;
