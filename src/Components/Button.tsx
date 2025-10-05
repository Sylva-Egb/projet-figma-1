interface ButtonProps {
    text: string;
    backgroundColor: string;
    buttonClassName?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, buttonClassName, onClick }) => {
    const className = buttonClassName ? `rounded-md px-4 py-2 ${backgroundColor === "" ? "text-white" : ""} bg-${backgroundColor} ${buttonClassName} font-bold` : `rounded-md px-4 py-2 text-white bg-${backgroundColor} font-bold`;
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;