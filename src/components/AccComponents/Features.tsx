'use client'
import React from "react";
import FadeInSection from "../../../src/components/shared/FadeInSection";
import ImageWithCaption from "../../../src/components/shared/ImageWithCaption";
import { siteContent } from "../../content/siteContent";

const PathForBetterWork: React.FC = () => {
  const { title, sections } = siteContent.pathForBetterWork;

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
    </style>

    <section id="how-it-works" className="flex flex-col px-4 sm:px-16 pt-12 sm:pt-24 pb-12 mt-0 w-full bg-deepblue relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col w-full lg:w-2/5 lg:sticky lg:top-0 lg:h-screen">
            <div className="flex flex-col text-center text-white h-full justify-center">
              <FadeInSection>
                <h2 className="text-4xl sm:text-6xl lg:text-8xl julius-sans text-left">
                  {title}
                </h2>
              </FadeInSection>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-2/5 ml-auto">
            <div className="flex flex-col mt-12 lg:mt-24">
              {sections.map((section, index) => (
                <FadeInSection key={index}>
                  <ImageWithCaption {...section} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>





  );
};

export default PathForBetterWork;
