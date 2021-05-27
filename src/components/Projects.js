import { render } from '@testing-library/react';
import React from 'react';

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <a
                className="App-link"
                href="https://github.com/nickmo12"
                target="_blank"
                rel="noopener noreferrer"
                >Check out my Github!
                </a>
        </div>

    )
}

export default Projects;