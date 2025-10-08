import './Footer.css'
import React from 'react'
import {socialLinks} from "../../data/data.tsx";
import type {socialLinksType} from "../../types/types.ts";

import Feedback from "../Feedback/Feedback.tsx";

const Footer: React.FC = () => {

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
                        {socialLinks.map((social: socialLinksType) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                // @ts-expect-error style Err
                                style={{'--social-color': social.color}}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Правая часть - форма обратной связи */}
                <Feedback/>
            </div>
        </footer>
    );
};

export default Footer