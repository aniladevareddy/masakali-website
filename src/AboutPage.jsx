import React from "react";
import "./AboutPage.css";
import masalaPapad from "./assets/img/masala-papad.png";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>About Masakali</h1>
          <p>
            We bring the taste of authentic home-style Indian cooking to your table —
            vibrant spices, fresh ingredients, and recipes passed down through
            generations.
          </p>
          <button onClick={() => document.getElementById("our-mission")?.scrollIntoView({ behavior: "smooth" })}>
            Learn More
          </button>
        </div>
      </section>

      <section id="our-mission" className="about-section">
        <h2>Our Mission</h2>
        <p>
          To craft memorable meals using the freshest ingredients while honoring
          regional traditions and delivering an exceptional dining experience.
        </p>
      </section>

      <section className="about-section about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Authenticity</h3>
            <p>Recipes rooted in tradition, prepared with love and care.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>Fresh ingredients, responsibly sourced, and consistently delicious.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We celebrate gatherings, family recipes, and shared meals.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo" style={{ backgroundImage: `url(${masalaPapad})` }} />
            <h4>Vikas (Chef Owner)</h4>
            <p>Founder & Head Chef — bringing family recipes to life.</p>
          </div>
          <div className="team-member">
            <div className="team-photo" style={{ backgroundImage: `url(${masalaPapad})` }} />
            <h4>Mahesh (Manager)</h4>
            <p>Hospitality and operations lead, focused on guest experience.</p>
          </div>
          <div className="team-member">
            <div className="team-photo" style={{ backgroundImage: `url(${masalaPapad})` }} />
            <h4>Pramod (Operations Lead)</h4>
            <p>Operations Lead — overseeing day-to-day operations, logistics, and team coordination.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h3>Visit Us</h3>
        <p>We'd love to serve you — check our menu and drop by for a true taste of home.</p>
        <a className="btn" href="/menu">Explore Menu</a>
      </section>
    </main>
  );
}
