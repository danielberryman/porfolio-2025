import React from 'react';

interface HeaderProps {
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    subtitleLine3?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitleLine1, subtitleLine2, subtitleLine3 }) => {
    return (
        <header className="w-full text-center pt-8 px-4">
            <h1 className="text-3xl md:text-5xl mb-5">{title}</h1>
            <p className="mb-3">&quot;{subtitleLine1}</p>
            <p className="mb-3"><i>{subtitleLine2}</i></p>
            <p className="font-bold">{subtitleLine3}&quot;</p>
            
        </header>
    );
};

export default Header;
