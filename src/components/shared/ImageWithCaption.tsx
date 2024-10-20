import React from "react";

const ImageWithCaption: React.FC<{ title: string; imageSrc: string; altText: string; caption: string }> = ({
  title,
  imageSrc,
  altText,
  caption
}) => (
  <div className="flex flex-col items-center mt-12 lg:mt-24">
    <p className="text-3xl sm:text-4xl lg:text-5xl text-center text-white julius-sans mb-8 w-full">
      {title}
    </p>
    <img
      src={imageSrc}
      alt={altText}
      className="w-full max-w-[500px]"
    />
    <p className="text-base mt-6 ar-one-sans text-left w-full text-white">{caption}</p>
  </div>
);

export default ImageWithCaption;
