import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is this portal for?', answer: 'This portal helps users enrol in courses.' },
    { question: 'How do I register?', answer: 'Click on Register and fill in your details.' },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
