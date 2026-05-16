import React, { Component } from 'react';
import './ClientReviews.css';

export class ClientReviews extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollSpeed: 40 };
  }

  render() {
    const { scrollSpeed } = this.state;

    const reviews = [
      {
        text: "I had a good experience with my therapist. She is experienced and knows how to pinpoint the main areas of concern and go directly to problem-solving. I find her approach beneficial and am quite hopeful that I will get better soon.",
        stars: 5
      },
      {
        text: "In beginning sessions, the journey felt slow. But when I continued my sessions with SafeSpace, everything started to make sense. Counselling didn't erase my issues, but Sana taught me ways to deal with them effectively.",
        stars: 5
      },
      {
        text: "My therapist made me realise that sometimes I AM THE PROBLEM — and slight changes in my behaviour had a big impact on my everyday life. Her sessions are highly organised and genuinely effective.",
        stars: 5
      },
      {
        text: "Finding an empathetic listener who structures solutions around your history is rare. The deep dives into my thought patterns helped break continuous overthinking cycles within just a couple of months.",
        stars: 5
      },
      {
        text: "SafeSpace offered a highly supportive framework for processing trauma. The practical steps combined with regular follow-ups provided clear results where traditional approaches had fallen short.",
        stars: 5
      }
    ];

    const renderStars = (count) =>
      Array.from({ length: count }, (_, i) => (
        <span key={i} className="star">★</span>
      ));

    return (
      <section className="reviews-section">
        <h2 className="section-heading">What Our Clients Say</h2>
        <p className="reviews__sub">Real stories from people who took the first step</p>

        <div className="marquee-viewport">
          <div
            className="marquee-track"
            style={{ '--scroll-duration': `${scrollSpeed}s` }}
          >
            <div className="marquee-content">
              {reviews.map((review, index) => (
                <div className="review-card" key={`orig-${index}`}>
                  <div className="quote-icon">❝</div>
                  <p className="review-text">{review.text}</p>
                  <div className="stars-container">{renderStars(review.stars)}</div>
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {reviews.map((review, index) => (
                <div className="review-card" key={`dup-${index}`}>
                  <div className="quote-icon">❝</div>
                  <p className="review-text">{review.text}</p>
                  <div className="stars-container">{renderStars(review.stars)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientReviews;