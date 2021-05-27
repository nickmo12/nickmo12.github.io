import React from 'react';
import logo from '../Nick.PNG'

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Hi, I'm Nick! Welcome to my React portfolio site!
                    </p>
                    <iframe src="https://giphy.com/embed/1BFEEIo4h1BuTH8eqP" width="480" height="403" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/theoffice-episode-3-the-office-tv-1BFEEIo4h1BuTH8eqP"></a></p>
                    {/* <a
                    className="App-link"
                    href="https://github.com/nickmo12"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Check Me Out!
                    </a> */}
        </div>
    )
}

export default Home;