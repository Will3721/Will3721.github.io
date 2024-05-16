import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const projects = [
    { id: 1, name: 'AutoAvenue', date: 'March - May 2024', languages: ['SQL', 'React', 'Node.js'], 
    description: 'Web application backed by a MySQL database that allows users to check and compare used car prices and reviews across the market. Users can set preferences for price, mileage, year, and MPG to view all cars meeting those specifications, complete with pictures and additional details. Bonus features include car rankings based on various criteria such as durability and safety, and a search function for efficient and economical cars.', 
    image: '/AutoAvenue.webp',
    github: 'https://github.com/Will3721/AutoAvenue' },
    
    { id: 2, name: 'YouTube Subscriber Prediction', date: 'April - May 2024', languages: ['Python', 'pandas', 'scikit-learn'], 
    description: 'We analyzed over 1 million youtube channels to predict subscriber count given attributes such as join date, keywords, and views. We used machine learning techniques such as elastic net linear regression, random forests, and gradient boosting to explore the complex relationships that determine subscriber count. Our final gradient boosting model was able to predict subscriber count with an R\u00B2 value of 0.83.', 
    image: 'youtube.webp', github: 'https://github.com/Will3721/Subscriber-Prediction' },
    { id: 3, name: 'Bottleneck Transformer', date: 'November - December 2023', languages: ['PyTorch'], 
    description: "Implemented the cutting-edge model architecture, BoTNet, introduced in the research paper \"<a href='https://arxiv.org/abs/2101.11605'>Bottleneck Transformers for Visual Recognition</a>\" by Srinivas et al., repurposing it for image classification. We tuned hyperparameters such as learning rate, weight decay, and momentum, and trained the model on the CIFAR-10 dataset, achieving 90% accuracy on test data.", 
    image: 'botnet.png', github: 'https://github.com/Will3721/BottleneckTransformer'},
    { id: 4, name: 'Metal Detector', date: 'March - May 2023', languages: ['Altium', 'LTspice'], 
    description: 'I designed a printed circuit board of a multi‑stage metal detector schematic using Altium and conducted circuit simulations in LTspice to determine appropriate voltage levels for each stage so that the signals were properly mixed, filtered, and amplified. Then, I self-wound the inductor, soldered the components onto the PCB, and assembled the mechanical parts of the metal detector. Click the link above to see a short clip of the metal detector in action!', 
    image: 'IMG_1679.jpg', link: 'https://drive.google.com/file/d/1RYXsqINPMLh1004UMUGsmyqCyt-3Bo-d/view'},
    { id: 5, name: 'NBA Draft Picker', date: 'April - May 2022', languages: ['Java', 'jsoup'], 
    description: 'We gathered and analyzed data on NBA Hall-of-Fame inductees and leading college basketball players from each team for a specific year and developed a recommendation system for draft picks from user-selected draft classes, identifying candidates most similar to the average NBA Hall-of-Famer profile.', 
    image: 'nbahof.png', github: 'https://github.com/Will3721/NBA-Draft-Picker'},
    { id: 6, name: '2048', date: 'April - May 2022', languages: ['Java', 'Java Swing'], 
    description: 'The classic 2048 game with added features such as the ability to undo the last move and being able to save and load the game state.', 
    image: '2048.png', github: 'https://github.com/Will3721/2048-Game' },
];

const ProjectsPage = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
};

export default ProjectsPage;
