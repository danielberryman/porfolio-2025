// FeatureBlock.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureBlockProps {
    pretitle: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    actions?: {
        label: string;
        onClick: () => void;
    }[];
    links?: {
        label: string;
        url: string;
    }[];
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
    pretitle,
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt = '',
    imagePosition = 'right',
    actions = [],
    links = [],
}) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <div className={`w-full flex flex-col md:flex-row gap-5 ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/4">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded"
                />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
                {/* <h4 className="text-gray-700 text-base md:text-lg"><i>{pretitle}</i></h4> */}
                <h2 className="text-xl md:text-xl text-slate-700 mb-2">{title}</h2>
                <h3 className="text-gray-700 text-base md:text-md font-bold">{subtitle}</h3>
                <p className="text-gray-700 text-base md:text-md mb-4">{description}</p>
                {actions.map((action, index) => (
                    <button 
                        key={index}
                        onClick={action.onClick}
                        className="bg-slate-800 mr-2 text-white px-4 py-2 cursor-pointer rounded text-base md:text-md transition-colors duration-300">{action.label}</button>
                ))}
                {links.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url}
                        className="text-sky-600 text-base md:text-md hover:underline transition-colors duration-300">{link.label}</a>
                ))}
            </div>
        </div>
    );
};

export default FeatureBlock;
