import React from 'react';
import './HomePage.css';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="intro">
                <div className="typewriter-container">
                    <Typewriter text="Hi, I'm William Qi" speed={100} />
                </div>
                <img src="Untitled-6.jpg" alt="William Qi" className="profile-pic"/>
            </div>
            <p className="about">
                I'm a senior at the University of Pennsylvania pursuing a BSE in Electrical Engineering and an MSE in Data Science, 
                along with a minor in Computer Science. I love solving problems and am an avid learner. Currently, I'm interested in 
                machine learning and data science, and using these tools to solve real-world problems. I have previous 
                internship experience in software engineering and research experience 
                using signal processing.
            </p>
            <p className="about">
                In my spare time, I enjoy watching sports (mainly basketball and football), playing ping pong, and working out. 
                I also love listening to music and playing my violin.
            </p>
            <Footer />
        </div>
    );
};

const useTypewriter = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        if (index < text.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText(prevText => prevText + text.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            }, speed);
  
            return () => clearTimeout(typingTimeout);
        }
    }, [index, text, speed]);
  
    return displayText;
};

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
    return <h1>{displayText}</h1>;
};

export default HomePage;
