import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsNav.css';

const ProjectsNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const projects = [
        { name: 'All Seasons Landscaping', path: '/AllSeasons' },
        { name: 'Hyker', path: '/Hyker' },
        { name: 'Govt Website Redesign', path: '/Govt' },
        { name: 'Plantagochi', path: '/Case1' },
        { name: 'Variety DC Charity Redesign', path: '/Variety' },
        { name: 'Hitchhiker Travel App', path: '/Hitch' }
    ];

    return (
        <div
            className="projects-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="dropdown-toggle" type="button">
                PROJECTS
            </button>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        to={project.path}
                        className="dropdown-item"
                        onClick={() => setIsOpen(false)}
                    >
                        {project.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsNav;
