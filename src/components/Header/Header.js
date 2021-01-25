import React from 'react';
import Uk from './../../images/uk.png';

const Header = () => {
    return (
        <header>
            <div>
                <p>div</p>
                <h3>I am Lucy.</h3>
                <h1>A full stack web developer based in sunny Barcelona</h1>
                <p>I speak JavaScript, React.js, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, English, Italian and Spanish. When I'm not coding, I'm probaby dreaming about it. :)</p>
            </div>
            <div>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-react"></i>  {/* mongodb */}
                <i class="fab fa-react"></i>  {/* mongoose */}
                <i class="fab fa-react"></i>  {/* express */}
                <i class="fab fa-node"></i>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <img src={Uk} alt="flag of the UK" />
                <img src={Uk} alt="flag of the UK" />
                <img src={Uk} alt="flag of the UK" />
            </div>
            <i class="far fa-arrow-alt-circle-down"></i>
        </header>
    );
}

export default Header;