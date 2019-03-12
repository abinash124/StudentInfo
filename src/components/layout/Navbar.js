import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">

                <div class="container">
                    <Link to='/' className="navbar-brand">
                        Student Info
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarMain">
                        <span className="navbar-toggle-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    <i className="fa fa-home"></i>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i class="fas fa-tachometer-alt"></i>
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>

        )
            ;
    }
}

export default Navbar;