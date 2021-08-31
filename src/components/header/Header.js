import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalReg from '../modalReg/ModalReg';
import './header.css';
import shoppingСenter from '../../img/svg/shoppingСenter.svg';
import shop from '../../img/svg/shop.svg';
import furniture from '../../img/svg/furniture.svg';
import supermarket from '../../img/svg/supermarket.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false,
            closeModal: false,
            isModalOn: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.updateData = this.updateData.bind(this);

    }
    handleClick(e) {

        if (e.target.className === 'header_entrance__btn') {
            this.setState(prevState => ({
                isModalOn: !prevState.isModalOn
            }))

        } else {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }))
        }
    }
    updateData = (value) => {
        this.setState({ closeModal: value })
        if (value) {
            this.setState(prevState => ({
                isModalOn: !prevState.isModalOn
            }))
        }

    }


    render() {
        return (<>
            <div className="header">
                <div className="wrapper">
                    <div className="header__wrapper">
                        <nav className={`header__nav ${this.state.isToggleOn ? "header__nav_active" : ""}`}>
                            <ul className="header__list">
                                <li className="header__item">
                                    <img src={shoppingСenter} alt="" />
                                    <NavLink to={"/shoppingСenter"} className="header__link" >ТОРГОВЫЕ ЦЕНТРЫ</NavLink>
                                    <div className="submenu">
                                        <ul className="submenu__item">
                                            {/* <li><a href="" className="submenu__link">Дордой плаза </a></li>
                                            <li><a href="" className="submenu__link">АЗИЯ-МОЛ</a></li>
                                            <li><a href="" className="submenu__link">АЙ-МОЛ</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 1</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 2</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 1</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 2</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 1</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 2</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li> */}
                                        </ul>
                                    </div>
                                </li>

                                <li className="header__item">
                                    <img src={shop} alt="" />
                                    <a href="locations" className="header__link ">МАГАЗИНЫ</a>
                                    <div className="submenu">
                                        <ul className="submenu__item">

                                        </ul>
                                    </div>
                                </li>
                                <li className="header__item">
                                    <img src={furniture} alt="" />
                                    <a href="videos" className="header__link ">МЕБЕЛЬ</a>
                                    <div className="submenu">
                                        <ul className="submenu__item">

                                        </ul>
                                    </div>
                                </li>
                                <li className="header__item">
                                    <img src={supermarket} alt="" />
                                    <a href="sign-in" className="header__link ">СУПЕРМАРКЕТЫ</a>
                                    <div className="submenu">
                                        <ul className="submenu__item">

                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <div className="header__nav-close" onClick={this.handleClick}>
                                <span className="header__nav-close-line"></span>
                                <span className="header__nav-close-line"></span>
                            </div>

                            <div className={`saerch  ${this.state.isToggleOn ? "header__nav_active" : ""}`}>
                                <form className="saerch__form">
                                    <span>КАТАЛОГ:</span>
                                    <button className="saerch__btn" type="submit">
                                        <span className="saerch__line"></span>
                                    </button>
                                    <div className="search__input__wrrap">
                                        <input className="saerch__input" type="text" placeholder="Я ищу.." />
                                        <div className="search__input__btn">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </nav>

                        <div className="header__burger burger " onClick={this.handleClick}>
                            <span className="burger__line burger__line_first"></span>
                            <span className="burger__line burger__line_second"></span>
                            <span className="burger__line burger__line_third"></span>
                        </div>
                        <div className="header_entrance">
                            <button className="header_entrance__btn" type="submit" onClick={this.handleClick} >войти</button>
                        </div>

                    </div>

                </div>
            </div>
            <ModalReg isModal={this.state.isModalOn} close={this.updateData} />
        </>
        )
    }
}

export default Header;