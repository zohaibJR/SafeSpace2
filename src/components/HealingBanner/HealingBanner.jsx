import { Component } from 'react';
import './HealingBanner.css';

export class HealingBanner extends Component {
  render() {
    return (
      <section className="healing-banner">
        <h2 className="healing-title">
          Healing doesn't begin<br />
          with having <em>all the answers</em>
        </h2>

        <p className="healing-sub">
          It begins with a single, courageous step towards understanding yourself.
        </p>

        <div className="button-group">
          <button className="cta-btn cta-btn--outline">
            Book Free Intro Session
          </button>
          <button className="cta-btn cta-btn--primary">
            Book Therapy Session →
          </button>
        </div>
      </section>
    );
  }
}

export default HealingBanner;
