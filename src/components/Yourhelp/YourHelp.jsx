import { Component } from 'react';
import './YourHelp.css';

export class YourHelp extends Component {
  render() {
    const services = [
      { icon: '🧠', label: 'Individual\nTherapy', active: false },
      { icon: '💬', label: 'Counselling\n& Emotional Support', active: true },
      { icon: '🌿', label: 'Anxiety, Overthinking\n& Emotional Struggles', active: false },
      { icon: '🌱', label: 'Trauma\n& Emotional Care', active: false },
    ];

    return (
      <section className="services-container" id="our-services">
        <h2 className="section-heading">How We Help You</h2>
        <p className="services__sub">Tailored support for where you are right now</p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card${s.active ? ' active' : ''}`}>
              <div className="service-card__icon">{s.icon}</div>
              <p>{s.label.replace(/\n/g, '\n')}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default YourHelp;
