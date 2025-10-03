import { ReactNode } from 'react';

interface SocialMediaLinkProps {
    icon: ReactNode;
    href: string;
    className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ icon, href, className }) => {
    return (
        <a 
            href={href} 
            className={`text-decoration-none hover:text-decoration-underline hover:animate-pulse text-gray-400 hover:text-gray-600 ${className}`}
            target="_blank" 
            rel="noopener noreferrer" 
        >
            {icon}
        </a>
    );
};

export default SocialMediaLink;