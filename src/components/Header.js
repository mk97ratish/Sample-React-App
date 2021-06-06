import React from 'react';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom';
import Product  from './Product';
import Cart from './Cart';
import Form from './Form';


class Header extends React.Component {
    render() {      
	return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                <Link className="nav-link" to="/form">React App</Link>
                    <a className="navbar-brand" href="#">React App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/product">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/form">Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Route path="/product/:uname" component={Product} />
            <Route path="/product" component={Product} />
            <Route path="/" exact component={Form} />
            <Route path="/form" component={Form} />
            <Route path="/cart" component={Cart} />
            </Router>
        )
    }
}
export default Header;