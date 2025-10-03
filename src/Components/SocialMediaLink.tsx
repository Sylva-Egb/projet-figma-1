interface SocialMediaLinkProps {
    icon: string
    href: string
    className ?: string
}

const SocialMediaLink : React.FC<SocialMediaLinkProps> = ({ icon, href, className }) => {
    return (
        <a href={href} className={`text-decoration-none hover:text-decoration-underline hover:animate-pulse text-gray-400 hover:text-gray-600 ${className}`}
            >{icon}
        </a>
    )
}

export default SocialMediaLink