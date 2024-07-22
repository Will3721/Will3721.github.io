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
                along with a minor in Computer Science. As an avid tech enthusiast, I am passionate about leveraging technology 
                for social and environmental impact. I have previous internship experience in software engineering and machine learning,
                along with research experience using signal processing. My current interests lie in
                machine learning and data science, where I aim to use these tools to make smarter decisions and solve real-world problems. 
                I am eager to explore opportunities that allow me to further grow my skills and contribute to meaningful projects.
            </p>
            <p className="about">
                Outside of classes and clubs, you can find me watching sports (mainly basketball and soccer), working out, or playing ping pong. 
                I enjoy listening to all kinds of music, and I am a violinist in the Penn Symphony Orchestra.
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
