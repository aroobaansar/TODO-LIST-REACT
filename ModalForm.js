import React from 'react';
import './ModalForm.css';

const ModalForm = ({ title, children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-form">
                <button className="close-button" onClick={onClose}>X</button>
                
                {children}
            </div>
        </div>
    );
};

export default ModalForm;
