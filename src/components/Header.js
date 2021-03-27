import PropTypes from 'prop-types';
import Button from './Button.js';

const Header = ({ title, onClick, buttonText, isDisabled}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                color="green"
                text={buttonText}
                onClick={onClick}
                isDisabled={isDisabled}
                 />
        </header>
    );
};

Header.defaultProps = {
    title: 'Random User Generator',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;