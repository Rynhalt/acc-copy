import React, { useState } from 'react';
import { siteContent } from '../../content/siteContent'; // Import siteContent

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // State to track hover index
  const faqData = siteContent.faq.items; // Access FAQ items from siteContent

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  return (
    <section className="bg-gradient-to-r from-light-blue to-soft-green text-black p-6">
      <h2 className="text-6xl mb-4 ar-one-sans">{siteContent.faq.title}</h2> {/* Use title from siteContent with the same font class */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative flex justify-between items-center w-full py-4 text-left focus:outline-none transition-all duration-300 ${
                hoverIndex === index ? 'bg-gray-100 font-bold text-blue-800' : ''
              }`}
            >
              <span className={`text-2xl ar-one-sans ${hoverIndex === index ? 'font-bold text-blue-800' : ''}`}>
                {item.question}
              </span>
              <span className={`ml-2 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>

              {/* Underline effect */}
              <span
                className={`absolute bottom-0 left-0 h-1 bg-blue-800 transition-all duration-500 ease-in-out ${
                  hoverIndex === index ? 'w-full' : 'w-0'
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-2 text-xl text-black ar-one-sans">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
