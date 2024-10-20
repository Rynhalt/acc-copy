'use client'
import React, { useEffect, useRef, useState } from 'react';
import FadeInSection from '../../../src/components/shared/FadeInSection';

const BeforeAfter: React.FC = () => {
  const [revealPercentage, setRevealPercentage] = useState(25);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setRevealPercentage(Math.min(Math.max(percentage, 0), 100));
      }
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-deepblue">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 julius-sans">Proven to be cool:</h2>
        <div className="flex justify-center items-center">
          <FadeInSection>
            <div ref={containerRef} className="relative w-96 h-96  cursor-ew-resize">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F42cefc6115aa4c14b4b88426302f95b5"
                alt="After using the product"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
                style={{ clipPath: `inset(0 ${100 - revealPercentage}% 0 0)` }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F1e6ad40f356f4abab7b1e119f3518d3b"
                  alt="Before using the product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white"
                style={{ left: `${revealPercentage}%` }}
              ></div>
              <div 
                className="absolute top-1/2 w-8 h-8 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{ left: `${revealPercentage}%` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-sky-300">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <p className="text-right mt-2 text-sm ar-one-sans">
                *Data after 10 minutes of intense cardio
              </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;