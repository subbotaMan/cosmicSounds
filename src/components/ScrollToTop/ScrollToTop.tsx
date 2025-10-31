import React, {useEffect, useState} from "react";
import './ScrollToTop.css';
import arrowTop from "../../../public/logos/arrow-top.png"

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="scroll-to-top">
            {
                isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="scroll-to-top-button"
                        aria-label="Наверх"
                    >
                        <img src={arrowTop} alt="arrow-top" width="50px" height="50px"/>
                    </button>
                )
            }
        </div>
    )
}

export default ScrollToTop;