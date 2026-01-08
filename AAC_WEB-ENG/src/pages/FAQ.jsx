import React from 'react';
import { HelpCircle, MessageCircle } from 'lucide-react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "Does SmartStroke work with any marker?",
      answer: "Yes! Our universal clamp design fits standard Expo, Pilot, and generic whiteboard markers ranging from 10mm to 25mm in diameter."
    },
    {
      question: "Do I need a special whiteboard?",
      answer: "No. SmartStroke works on any flat surface. The device tracks relative motion, so your existing classroom whiteboard works perfectly."
    },
    {
      question: "How long does the battery last?",
      answer: "The device features a 350mAh battery that lasts for approximately 48 hours of continuous writing. It charges fully in 30 minutes via USB-C."
    },
    {
      question: "Can I save my notes to PDF?",
      answer: "Absolutely. The companion app (iOS/Android) automatically converts your stroke data into vector PDFs that can be shared instantly."
    },
    {
      question: "Is internet required?",
      answer: "An internet connection is only required to sync to the cloud. You can record offline and the device will sync once you reconnect."
    },
    {
      question: "When will this be available?",
      answer: "We are currently in the final prototyping stage for our thesis defense. Sign up for the waitlist to be notified about beta testing."
    }
  ];

  return (
    <section className="faq-page">
      <div className="faq-header">
        <div className="icon-wrapper">
          <HelpCircle size={40} color="var(--primary)" />
        </div>
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about the device and software.</p>
      </div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <MessageCircle className="q-icon" size={24} />
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;