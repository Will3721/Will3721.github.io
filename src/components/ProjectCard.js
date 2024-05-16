import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project, index }) => {
    const hasGitHubLink = project.github; // Assuming there's a 'github' property in your project object

    return (
        <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
                <h3>
                    {project.name}
                    {hasGitHubLink ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    )}
                </h3>
                <p>{project.date}</p>
                <div className="language-container">
                    {project.languages.map((language, index) => (
                        <span key={index} className="language-tag">{language}</span>
                    ))}
                </div>
                <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
        </div>
    );
};

export default ProjectCard;
