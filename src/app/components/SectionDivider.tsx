import React from "react";

const SectionDivider = ({ title, bgColor = "bg-gray-100", textColor = "text-gray-800" }: { title: string, bgColor?: string, textColor?: string }) => {
  return (
    <div className={`w-full py-10 px-6 ${bgColor}`}>
      <div className="flex items-center justify-center">
        <h2 className={`px-4 whitespace-nowrap text-center sm:text-sm md:text-lg ${textColor} font-bold`}>
          <i>{title}</i>
        </h2>
      </div>
    </div>
  );
};

export default SectionDivider;
