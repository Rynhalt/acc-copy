import React from "react";
import FadeInSection from "./FadeInSection";

// CSS-in-JS styles
const styles = {
  overflowWrapBreakWord: {
    overflowWrap: 'break-word',
    wordBreak: 'break-word', // This combines both previous classes
  },
};

interface TestimonialImageProps {
  src: string;
  alt: string;
  quote: string;
  author: string;
  className?: string;
}

const TestimonialUser: React.FC<TestimonialImageProps> = ({
  src,
  alt,
  quote,
  author,
  className = "",
}) => {
  return (
    <FadeInSection>
      <div className="flex flex-col w-[400px] mx-auto h-screen">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className={`object-cover rounded-none w-full h-4/5 ${className}`}
        />
        <div className="w-full mt-0 p-4 bg-cyan-950 box-border h-1/5 overflow-auto">
          <p 
            className="text-base text-wrap sm:text-xl text-left ar-one-sans text-cyan-50 overflow-wrap-break-word"
          >
            "{quote}"
          </p>
          <p className="text-base sm:text-xl text-right mt-4 ar-one-sans text-cyan-50">
            — {author}
          </p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default TestimonialUser;