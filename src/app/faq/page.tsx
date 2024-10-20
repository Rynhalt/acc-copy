'use client'
import { siteContent } from "@/content/siteContent";
import React, { useEffect, useState } from "react";
import FAQ from "../../components/AccComponents/FAQ"; // Only using FAQ component

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="relative min-h-screen">
      <div className="transition-opacity duration-1000">
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
            <FAQ />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
