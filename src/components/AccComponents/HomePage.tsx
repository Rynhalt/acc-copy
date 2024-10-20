'use client'
import { siteContent } from "@/content/siteContent";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../../../src/components/shared/LoadingAnimation";
import BeforeAfter from "./BeforeAfter";
import Contact from "./Contact";
import PathForBetterWork from "./Features";
import Header from "./Header";
import Testimonial from "./Testimonial";
import WhatIsAcc from "./WhatIsAcc";
import Sustainability from "./sustainability";


const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingState, setLoadingState] = useState<'loading' | 'fading' | 'complete'>('loading');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleAnimationComplete = () => {
    setLoadingState('fading');
    setTimeout(() => {
      setLoadingState('complete');
    }, 1000); // Adjust this value to match your desired fade-out duration
  };

  return (
    <div className="relative min-h-screen">
      {loadingState !== 'complete' && (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${loadingState === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
          <LoadingAnimation companyName="REGALCORE" onAnimationComplete={handleAnimationComplete} />
        </div>
      )}
      <div className={`transition-opacity duration-1000 ${loadingState === 'complete' ? 'opacity-100' : 'opacity-0'}`}>
        <head>
          <link rel="icon" href="https://cdn.builder.io/api/v1/image/assets%2F105f2061e4de4572989bc0746b5c0807%2F1eb5b9c7fef443f098cbcbba80d89655" sizes="any" />
          <title>{siteContent.meta.title}</title>
          <meta name="description" content={siteContent.meta.description} />
          <meta property="og:title" content={siteContent.meta.ogTitle} />
          <meta property="og:description" content={siteContent.meta.ogDescription} />
          <meta property="og:image" content={siteContent.meta.ogImage} />
          <meta property="og:image:alt" content={siteContent.meta.ogImageAlt} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://regalcore.org" />
          <style>{`
            @media (max-width: 767px) {
              html {
                scroll-behavior: smooth;
                scroll-snap-type: y proximity;
              }
            }
          `}</style>
        </head>
        <main className={`flex overflow-y-scroll h-screen flex-col bg-white w-full ${isMobile ? '' : 'snap-y snap-mandatory'}`}>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Header />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <WhatIsAcc />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <PathForBetterWork />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <BeforeAfter />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Testimonial />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Sustainability />
          </div>
          <div className={isMobile ? '' : 'snap-always snap-center'}>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
