import React, { useEffect, useState } from 'react';


interface LoadingAnimationProps {
  companyName: string;
  onAnimationComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ companyName, onAnimationComplete }) => {
  const [visible, setVisible] = useState(false);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setVisible(true);
    setLetters(companyName.split(''));
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [companyName, onAnimationComplete]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="text-white text-4xl font-bold"
            style={{
              animation: `zigZag 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
              display: 'inline-block',
              transform: `translateY(${index % 2 === 0 ? '-20px' : '20px'})`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes zigZag {
          0% {
            opacity: 0;
            transform: translateY(var(--start-y));
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;