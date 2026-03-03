import React, { useRef } from 'react';
import './ReviewsSection.css';

const reviewsData = [
  {
    name: 'Michael Johnson',
    role: 'Local Resident',
    rating: 5,
    title: 'Exceptional Service',
    text:
      'From the warm greeting to the knowledgeable recommendations, every aspect of our dining experience was perfect. The lamb biryani was fragrant and packed with flavor, and the mango lassi was the perfect balance of sweet and tangy. A true culinary journey!'
  },
  {
    name: 'Punch Boss',
    role: 'Local Resident',
    rating: 5,
    title: 'A Feast for the Senses',
    text:
      "Had an amazing experience. The food was delicious, with each dish crafted to perfection. The veggie platter, in particular, stood out—it's a colorful and flavorful mix of fresh, perfectly seasoned vegetables that really highlight the quality of the ingredients. The portion sizes were generous, and it was clear that a lot of care went into every dish. The service was friendly and attentive, making for a very enjoyable meal. Highly recommend this place for anyone looking for great food, especially if you're a fan of veggie-based dishes!"
  },
  {
    name: 'Ry A.',
    role: 'Restaurant Critic',
    rating: 5,
    title: 'A Culinary Masterpiece',
    text:
      "I’ve been to Masakali many times and I’ve never been disappointed. The food is amazing and the service is TOP NOTCH. Looks like they got new menu design and uniforms and everything looks professional and fresh! Highly recommended to my friends and family, I will be back soon."
  },
  {
    name: 'Elavarasan Elango',
    role: 'Local Resident',
    rating: 5,
    title: 'Authentic & Delicious',
    text:
      'I had a fantastic experience at Masakali. The food was absolutely delicious, and the flavors were spot on. The service was excellent, and the atmosphere made the dining experience even better. I would strongly recommend this place to anyone looking for a great meal. I\'ll definitely be coming back!'
  },
  {
    name: 'Teng Teng',
    role: 'Local Resident',
    rating: 5,
    title: 'Unforgettable Flavors',
    text:
      'Delicious, authentic Indian food with rich flavors and great portion sizes. The service was friendly and quick. Highly recommended. Will definitely come back!'
  },
  {
    name: 'Vivek Vashisht',
    role: 'First-Time Visitors',
    rating: 5,
    title: 'Warm Hospitality',
    text:
      'Great experience overall! We came here for the first time, but the food was top notch and the spices were on point. Will visit again for sure!'
  },
  {
    name: 'Juan Carlos Pérez Chávez',
    role: 'Travel Enthusiast',
    rating: 5,
    title: 'Consistently Outstanding',
    text:
      'Food is really good. All sort of Spicy levels. Very variated menu with even cocktails and beer. Kids menu is also good, good portions. Overall service is good. Highly recommended.'
  },
  {
    name: 'Maurice Barnabe',
    role: 'Local Resident',
    rating: 5,
    title: 'A Hidden Gem',
    text:
      "I've lived in BC for the last 27 years and I can say Masakali Indian Cuisine is my new East Indian restaurant now that I live in the Kanata area. Hands down this restaurant didn't skip a beat with food quality and taste. WELL DONE!!"
  },
  {
    name: 'Nirali Zalawadiya',
    role: 'Local Resident',
    rating: 5,
    title: 'Exceptional Service',
    text:
      'Masakali Restaurant offers a fantastic dining experience with flavorful dishes, warm ambiance, and excellent service. Their butter chicken and biryani are must-tries, and the naan is perfectly soft. The staff is friendly and attentive, making the visit even more enjoyable. A great spot for authentic Indian cuisine!'
  },
  {
    name: 'Melissa',
    role: 'Food Connoisseur',
    rating: 5,
    title: 'The Best in Town',
    text:
      'Delicious food, I had the paneer labebdar and it was phenomenal! They also have an entire dedicated vegan menu, and the restaurant itself is a nice atmosphere. Conveniently located too :)'
  },
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    rating: 5,
    title: 'Authentic Flavors',
    text:
      'The butter chicken was absolutely divine - creamy, flavorful and perfectly spiced. The naan bread was fresh from the tandoor. This is hands down the best Indian food I\'ve had outside of India itself. Will definitely be returning!'
  }
];

const ReviewsSection = () => {
  const trackRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.review-card');
    const step = (card ? card.clientWidth : el.clientWidth) + 16; // include gap
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>Reviews</h2>
        <div className="reviews-controls">
          <button aria-label="Previous reviews" className="reviews-btn" onClick={() => scrollByCard(-1)}>‹</button>
          <button aria-label="Next reviews" className="reviews-btn" onClick={() => scrollByCard(1)}>›</button>
        </div>
      </div>

      <div className="reviews-slider" ref={trackRef}>
        {reviewsData.map((r, i) => (
          <article key={i} className="review-card">
            <div className="review-meta">
              <div className="review-avatar">{r.name.charAt(0)}</div>
              <div className="review-info">
                <strong className="review-name">{r.name}</strong>
                <div className="review-role">{r.role}</div>
                <div className="review-rating">{'★'.repeat(r.rating)}</div>
              </div>
            </div>
            <h3 className="review-title">{r.title}</h3>
            <p className="review-text">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
