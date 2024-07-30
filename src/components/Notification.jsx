import { useEffect } from 'react';
import './Notification.css';

// eslint-disable-next-line react/prop-types
const Notification = ({ message, duration, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration * 1000);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="notification">
            {message}
            <div className="progress-bar">
                <div className="progress" style={{ animationDuration: `${duration}s` }}></div>
            </div>
        </div>
    );
};

export default Notification;
