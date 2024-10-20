import React from 'react';
import FadeInSection from './FadeInSection';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => (
  <FadeInSection>
    <h2 className={`text-4xl sm:text-6xl lg:text-8xl julius-sans ${className}`}>
      {title}
    </h2>
  </FadeInSection>
);

export default SectionTitle;