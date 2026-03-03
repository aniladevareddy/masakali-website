import React from 'react';
import './ContactPage.css';
import contactInfo from '../data/contactInfo';

const ContactPage = () => (
  <main>
    <div className="contact-style-one-area homepagesubtitle overflow-hidden">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact-style-one-info">
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h5 className="title">Hotline</h5>
                    <a href={`tel:${contactInfo.phoneHref}`}>{contactInfo.phoneDisplay}</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <h5 className="title">Our Location</h5>
                    <p>{contactInfo.addressText}</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <h5 className="title">Official Email</h5>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-10 offset-lg-1">
            <div className="contact-form-style-one">
              <div className="heading text-center">
                <h5 className="sub-title">Keep in touch</h5>
                <h2 className="heading">Send us a Message</h2>
                <p className="reservation-text">Prefer to book a table? <a href="/reservation" className="reservation-link"> Click here to make a reservation →</a></p>
              </div>
              <form className="contact-form contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group comments">
                      <textarea className="form-control" id="comments" name="comments" placeholder="Your Message *"></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button type="submit" name="submit" id="submit">Get in Touch</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
);

export default ContactPage;
