interface LinkProps {
    text: string,
    href: string,
    className ?: string
}

const Link : React.FC<LinkProps> = ({ text, href, className }) => {
    return (
        <a href={href} className={`text-decoration-none hover:text-decoration-underline hover:animate-pulse text-gray-400 hover:text-gray-600 ${className}`}
            >{text}
        </a>
    )
}

export default Link