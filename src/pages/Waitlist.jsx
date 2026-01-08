import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/Home.css';

/*Waitlist Page*/
const Waitlist = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="waitlist-page">
      <div className="waitlist-box">
        {!submitted ? (
          <>
            <h2>Join the Future</h2>
            <p>We are currently in the prototyping phase. Sign up for beta access.</p>
            <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}} className="waitlist-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Join Now <ArrowRight size={18} /></button>
            </form>
          </>
        ) : (
          <div className="success-message"><CheckCircle size={64} color="#4ade80" /><h3>You're on the list!</h3></div>
        )}
      </div>
    </section>
  );
};
export default Waitlist;