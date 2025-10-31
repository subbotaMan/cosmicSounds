import React, {useState} from "react";
import "./Feedback.css";

import Modal from "../Modal/Modal.tsx";

const Feedback: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setEmail('')
        setMessage('')
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="footer-section">
            <h4>Обратная связь</h4>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                />
                <textarea
                    placeholder="Ваше сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-textarea"
                    // @ts-expect-error style Err
                    rows="3"
                />
                <button type="submit" className="submit-btn">
                    Отправить
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title="Сообщение отправлено!"
                    message="Ваше сообщение успешно отправлено в космическое пространство. Мы свяжемся с вами в ближайшее время!"
                />
            </form>
        </div>
    )
};

export default Feedback;