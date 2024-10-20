import React, { useEffect, useRef, useState } from "react";
import FadeInSection from "../../../../../ACC/src/components/shared/FadeInSection";
import TestimonialImage from "../../../../../ACC/src/components/shared/TestimonialUser";
import { siteContent } from "../../content/siteContent";

const Testimonial: React.FC = () => {
  const { title, testimonials } = siteContent.guaranteedImprovement;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const container = containerRef.current;
        if (container) {
          const newPosition = prevPosition + 1; // Adjust scroll speed here
          if (newPosition > container.scrollWidth - container.clientWidth) {
            return 0; // Reset to beginning when reaching the end
          }
          return newPosition;
        }
        return prevPosition;
      });
    }, 16); // Adjust interval for smoothness (e.g., 16ms for 60fps)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=AR+One+Sans:wght@400..700&display=swap');
      </style>

      <section id="testimonials" className="flex flex-col items-center px-0 sm:px-0 md:px-0 lg:px-0 w-full bg-deepblue"> {/* Removed horizontal padding */}
        <FadeInSection>
          <h2 className="z-10 text-4xl sm:text-6xl md:text-8xl text-center text-white julius-sans">
            {title.split('<br/>').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split('<br/>').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </FadeInSection>
        
        <div 
          ref={containerRef} 
          className="flex justify-center w-full mt-16 sm:mt-24 md:mt-32 overflow-hidden"
          style={{ whiteSpace: 'nowrap' }}
        >
          <div 
            style={{ 
              transform: `translateX(-${scrollPosition}px)`, 
              display: 'inline-flex',
              width: '100vw' 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialImage
                key={index}
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
