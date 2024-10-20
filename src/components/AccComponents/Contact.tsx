'use client'
import React, { useEffect, useState } from "react";
import FadeInSection from "../../../src/components/shared/FadeInSection";
import "../../app/globals.css";

// The actual email is SUPPOSED to be sent to slime123@bu.edu

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // State for company name
  const [typingIndex, setTypingIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  const defaultMessage = "Hello! I'm interested in learning more about ACC...";

  useEffect(() => {
    setTypingIndex(0);
    setMessage("");
  }, []);

  useEffect(() => {
    if (typingIndex < defaultMessage.length) {
      const typingTimer = setTimeout(() => {
        setMessage(prevMessage => prevMessage + defaultMessage[typingIndex]);
        setTypingIndex(prevIndex => prevIndex + 1);
      }, 50);

      return () => clearTimeout(typingTimer);
    }
  }, [typingIndex]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, company, to: 'slime123@bu.edu' }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName("");
        setEmail("");
        setMessage("");
        setCompany(""); // Clear company name after submission
        setTypingIndex(0);
        setIsModalVisible(false); // Hide modal after submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-8 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center ar-one-sans cursor-pointer underline hover:text-gray-300 transition duration-300"
            onClick={() => setIsModalVisible(true)} // Show modal on click
          >
            Experience it Now.
          </h2>
        </FadeInSection>

        {/* Visible Contact Form */}
        <div className="bg-black p-6 rounded-lg shadow-lg w-96 mx-auto">
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-white bg-gray-700 rounded"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-white bg-gray-700 rounded"
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block mb-2 text-sm text-white">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 text-white bg-gray-700 rounded"
                required
                placeholder="Your Company Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-white bg-gray-700 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Modal */}
        {/* {isModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-black bg-gray-300 rounded"
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-black bg-gray-300 rounded"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="block mb-2 text-sm">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 text-black bg-gray-300 rounded"
                    required
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-black bg-gray-300 rounded"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
              <button
                onClick={() => setIsModalVisible(false)} // Close modal
                className="mt-4 text-white underline hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Contact;
