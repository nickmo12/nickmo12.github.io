import React from 'react';
import logo from '../Nick.PNG'

const Home = () => {
    return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                Hi, I'm Nick! Welcome to my React portfolio site!
                </p>
                <a
                className="App-link"
                href="https://github.com/nickmo12"
                target="_blank"
                rel="noopener noreferrer"
                >Check Me Out!
                </a>
        </div>
    )
}

export default Home;