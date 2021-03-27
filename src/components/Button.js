const Button = ({ color, text, onClick, isDisabled }) => {
    
    return (
        <button
            className="btn"
            style={{
                backgroundColor: color,
            }}
            onClick={onClick}
            disabled={isDisabled}>
                {text}
            </button>
    );
};

export default Button;