import React, { Component } from 'react';
import './BeforeStep.css';

const faqs = [
  {
    q: "How many sessions do I have to take?",
    a: "It depends on the number of concerns you're bringing and their severity. Your therapist will help you decide — but typically 6–8 sessions are more than enough for most people."
  },
  {
    q: "How often do I need to book a session?",
    a: "Once a week is the standard. If you and your therapist feel one session per week isn't enough, you can go with two. Ultimately, it depends on your comfort and convenience."
  },
  {
    q: "How do payments work?",
    a: "We don't offer subscriptions — you pay for each session independently. Based on your trust level, you can pay for up to 2 sessions in advance. We don't take advance payment beyond that right now."
  },
  {
    q: "Can my session time exceed 50 minutes?",
    a: "It depends on your therapist and the severity of what you're working through. However, per APA guidelines, the ideal session lasts 50–55 minutes, so sessions can't be extended simply on request."
  }
];

export class BeforeStep extends Component {
  render() {
    return (
      <section className="info-section">
        <h2 className="section-heading">Before You Take the Next Step</h2>

        <div className="info-grid">
          {faqs.map((faq, i) => (
            <div className="info-card" key={i}>
              <span className="card-number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="card-question">{faq.q}</h3>
              <p className="card-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BeforeStep;