import './Footer.css'
import React, {useState} from 'react'
import type {SocialLinks} from "../../types/types.ts";

import GithubIcon from '../../../public/logos/github.svg';
import TelegramIcon from '../../../public/logos/telegram-icon.svg';
import VkIcon from '../../../public/logos/vk-icon.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({email, message})
        setEmail('')
        setMessage('')
        alert('Сообщение отправлено')
    };

    const socialLinks: SocialLinks[] = [
        {
            name: 'GitHub',
            url: 'https://github.com/subbotaMan',
            icon: <img src={GithubIcon} alt="GitHub" className="social-svg-icon" />,
            color: '#333'
        },
        {
            name: 'Telegram',
            url: 'https://t.me/subbotaMan',
            icon: <img src={TelegramIcon} alt="Telegram" className="social-svg-icon" />,
            color: '#0088cc'
        },
        {
            name: 'VK',
            url: 'https://vk.com/subbotaMan',
            icon: <img src={VkIcon} alt="VK" className="social-svg-icon" />,
            color: '#4C75A3'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Левая часть - информация о сайте */}
                <div className="footer-section">
                    <h3 className="footer-title">Cosmic Sounds</h3>
                    <p className="footer-description">
                        Сайт с уникальной коллекцией музыки в разных направлениях.
                        Откройте для себя новые звуковые вселенные и погрузитесь
                        в мир космических мелодий.
                    </p>
                    <div className="creator-info">
                        <a href="https://github.com/subbotaMan">Создатель: subbotaMan</a>
                        <p>© 2025 Cosmic Sounds</p>
                    </div>
                </div>

                {/* Центральная часть - контакты и соцсети */}
                <div className="footer-section">
                    <h4>Контакты</h4>
                    <div className="contact-info">
                        <p className="email">📧 music@cosmicsounds.com</p>
                        <a
                            href="https://t.me/subbotaMan"
                            className="support-chat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            💬 Чат с поддержкой
                        </a>
                    </div>

                    <div className="social-links">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                style={{ '--social-color': social.color }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Правая часть - форма обратной связи */}
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
                            rows="3"
                        />
                        <button type="submit" className="submit-btn">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer