import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Contact.css";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("availability");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // ✅ Availability form states
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [humanCheck, setHumanCheck] = useState("");
  const [availabilityMsg, setAvailabilityMsg] = useState("");

  // ✅ Contact form states
  const [contactName, setContactName] = useState("");
  const [contactLast, setContactLast] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactTel, setContactTel] = useState("");
  const [contactHuman, setContactHuman] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  // ✅ Availability validation
  const handleCheckNow = () => {
    if (!room || !name || !email || humanCheck.trim() !== "4") {
      setAvailabilityMsg("⚠️ Please fill all fields correctly before submitting!");
    } else {
      setAvailabilityMsg("✅ Your availability request has been submitted!");
    }
    setTimeout(() => setAvailabilityMsg(""), 4000);
  };

  // ✅ Contact form validation
  const handleSubmit = () => {
    if (
      !contactName ||
      !contactLast ||
      !contactEmail ||
      !contactTel ||
      contactHuman.trim() !== "4"
    ) {
      setContactMsg("⚠️ Please fill all fields correctly before submitting!");
    } else {
      setContactMsg("✅ Your message has been sent successfully!");
    }
    setTimeout(() => setContactMsg(""), 4000);
  };

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
              <div className="Contact-details">
                <p>BOOKINGS</p>
                <h4>+41 934 121 1334</h4>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="Contact-details">
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

          {/* ✅ Availability Section */}
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
                <select value={room} onChange={(e) => setRoom(e.target.value)}>
                  <option value="">Select Room</option>
                  <option>Double Room</option>
                  <option>Deluxe Room</option>
                  <option>Superior Room</option>
                  <option>Junior suit</option>
                </select>

                <div className="counter">
                  <label>Adults</label>
                  <button onClick={() => setAdults(Math.max(1, adults - 1))}>
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>

                <div className="counter">
                  <label>Children</label>
                  <button onClick={() => setChildren(Math.max(0, children - 1))}>
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name and Last Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* <div className="human-check">
                <label>Are you human?</label>
                <input
                  type="text"
                  placeholder="3 + 1 = ?"
                  value={humanCheck}
                  onChange={(e) => setHumanCheck(e.target.value)}
                />
              </div> */}

              <button className="check-btn" onClick={handleCheckNow}>
                Check Now
              </button>

              {availabilityMsg && (
                <p
                  className={`${
                    availabilityMsg.startsWith("⚠️")
                      ? "error-message"
                      : "success-message"
                  }`}
                >
                  {availabilityMsg}
                </p>
              )}
            </div>
          )}

          {/* ✅ Contact Section */}
          {activeTab === "contact" && (
            <div className="contact-form-section">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={contactLast}
                  onChange={(e) => setContactLast(e.target.value)}
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Telephone"
                  value={contactTel}
                  onChange={(e) => setContactTel(e.target.value)}
                />
              </div>
              <textarea placeholder="Message"></textarea>

              {/* <div className="human-check">
                <label>Are you human?</label>
                <input
                  type="text"
                  placeholder="3 + 1 = ?"
                  value={contactHuman}
                  onChange={(e) => setContactHuman(e.target.value)}
                />
              </div> */}

              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>

              {contactMsg && (
                <p
                  className={`${
                    contactMsg.startsWith("⚠️")
                      ? "error-message"
                      : "success-message"
                  }`}
                >
                  {contactMsg}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
