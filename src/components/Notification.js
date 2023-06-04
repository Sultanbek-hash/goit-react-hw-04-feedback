import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({message})=>{
        return(
            <>
            <h3 className="title__message">
                {message}
            </h3>
            </>
        )
}
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};