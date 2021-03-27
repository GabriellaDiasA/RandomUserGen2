import { FaTimes } from 'react-icons/fa';

const User = ({ user, onDelete }) => {
    return (
        user.name !== null ? (
        <div className="user">
            <h3>
                {user.name}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick = {() => onDelete(user.id)}/>
            </h3>
            <p>Age: {user.age}</p>
            <img
                src={user.picture}
                alt={`${user.name}'s profile`}></img>
        </div>
        ) : (
            <></>
        )
    );
};

export default User;