import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const categories = [
        'грустно',
        'весело',
        'задорно весело',
        'думаю о вечном',
        'думаю о вселенной',
        'романтическое настроение',
        'в атаку!'
    ];

    return (
        <header className="header">
            <div className="header-container">
                {/* Логотип */}
                <div className="logo">
                    <Link to="/" className="logo-text">Cosmic Tunes</Link>
                    <div className="logo-glow"></div>
                </div>

                {/* Десктопная навигация */}
                <nav className="desktop-nav">
                    <div
                        className="nav-item categories-item"
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                        onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                        <button className="nav-button">
                            Категории
                            <span className="dropdown-arrow">▼</span>
                        </button>

                        {isCategoriesOpen && (
                            <div className="dropdown-menu">
                                {categories.map((category, index) => (
                                    <button
                                        key={category}
                                        className="dropdown-item"
                                        style={{animationDelay: `${index * 0.1}s`}}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="nav-button">О проекте</Link>
                    <Link to="/feedback" className="nav-button">Пожелания</Link>
                </nav>

                {/* Мобильное меню */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Мобильная навигация */}
                {isMobileMenuOpen && (
                    <div className="mobile-nav">
                        <div className="mobile-categories">
                            <div className="mobile-categories-header">Категории</div>
                            <div className="mobile-categories-list">
                                {categories.map(category => (
                                    <button key={category} className="mobile-category-item">
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className="mobile-nav-button">О проекте</button>
                        <button className="mobile-nav-button">Пожелания</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;