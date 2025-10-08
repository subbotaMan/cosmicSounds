import React from "react";
import "./Modal.css";
import type {ModalProps} from "../../types/types.ts";


const Modal: React.FC<ModalProps> = ({isOpen, onClose, title, message}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <span className="close-icon">✕</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="message-container">
                        <div className="cosmic-icon">🚀</div>
                        <p className="modal-message">{message}</p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="cosmic-button" onClick={onClose}>
                        Понятно
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

