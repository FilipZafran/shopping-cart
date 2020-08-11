import React from 'react';
import { connect } from 'react-redux';
import [connect] from 'react-redux';
import {  getNumbers} from ',,/actions/getAction'

function Navbar(props) {
    return (
        <header>
            <div className="overlay"></div>
            <nav>
                <h2>Shop</h2>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li className="cart">
                        <a href="#"><ion-icon name="basket-outline"></ion-icon>Cart<span>{props.basketProps}</span></a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

const mapStateToProps = state => ({basketProps: state.basketState})

export default connect(mapStateToProps, { getNumbers })(Navbar);