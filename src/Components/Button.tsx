interface ButtonProps {
    text: string;
    backgroundColor: string;
    buttonClassName ?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, buttonClassName, onClick }) => {
    return (
        <button className={`rounded-md px-4 py-2 text-white bg-${backgroundColor} ${buttonClassName}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button