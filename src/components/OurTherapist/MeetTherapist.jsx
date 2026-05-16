import React, { Component } from 'react';
import therapistImg from "../Assets/Therapist.png";
import './MeetTherapist.css';

export class MeetTherapist extends Component {
  render() {
    return (
      <section className="therapist-section">
        <h2 className="section-heading">Meet Our Therapist</h2>

        <div className="therapist-container">

          {/* Image */}
          <div className="therapist-image-wrapper">
            <div className="therapist-img-circle">
              <img
                src={therapistImg}
                alt="Sana Iftikhar – Clinical Psychologist"
                className="therapist-img"
              />
            </div>
            <span className="therapist-badge">EMDR Certified</span>
          </div>

          {/* Info */}
          <div className="therapist-info">
            <p className="intro-text">SafeSpace is guided by</p>
            <h3 className="therapist-name-heading">Sana Iftikhar</h3>

            <div className="therapist-credentials">
              <span className="credential-tag">Clinical Psychologist</span>
              <span className="credential-tag">EMDR Therapist</span>
            </div>

            <p className="belief-label">Her work is based on the belief</p>

            <blockquote className="quote-text">
              "Many adult emotional struggles are shaped by earlier experiences, unmet needs, and patterns formed in childhood."
            </blockquote>

            <button className="more-btn">More About Her →</button>
          </div>

        </div>
      </section>
    );
  }
}

export default MeetTherapist;