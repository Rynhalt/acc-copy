import React from "react";
import FadeInSection from "../../../../../ACC/src/components/shared/FadeInSection";
import SectionTitle from "../../../../../ACC/src/components/shared/SectionTitle";
import { siteContent } from "../../content/siteContent";

const WhatIsAcc: React.FC = () => {
  const { title, description } = siteContent.whatIsAcc;

  return (
    <section id="what-is-acc" className="z-10 px-4 sm:px-6 w-full bg-black">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col w-full lg:w-2/5">
          <div className="flex flex-col self-stretch my-auto text-center text-white">
            <SectionTitle title={title} className="Appear-in-1 font-bold" />
            <FadeInSection>
              <p className="self-center mt-10 lg:mt-28 text-xl sm:text-2xl lg:text-3xl ar-one-sans Appear-in-2">
                {description}
              </p>
            </FadeInSection>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/5 mt-10 lg:mt-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d7ae75c0a721737c063e4f09eec4cd35bb70e399f23a742d6d868f59c51699?placeholderIfAbsent=true&apiKey=105f2061e4de4572989bc0746b5c0807"
            alt="Air-conditioned clothing illustration"
            className="object-contain w-full aspect-[0.77]"
          />
        </div>
      </div>
    </section>  
  );
};

export default WhatIsAcc;
