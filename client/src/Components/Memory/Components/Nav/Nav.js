import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper container">
                    <div className='brand-logo center' style={{ textAlign: "middle" }}>
                            <h2>Memory</h2>
                    </div>
                    
                    <a style={{ cursor: 'pointer' }} className='left' onClick={() => {
                        document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
                    }}>Instructions</a>

                    <ul className='right'>
                        <li style={{ float: "right" }}><h4>Score: </h4><h5>{props.score}</h5></li>
                        <li style={{ float: "left" }}><h4>Top Score: </h4><h5>{props.topScore}</h5></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}



export default Navbar;