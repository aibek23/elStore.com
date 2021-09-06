import React from 'react';
import { Link,NavLink } from 'react-router-dom';
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
            search:'',
            isToggleOn: false,
            closeModal: false,
            isModalOn: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateData = this.updateData.bind(this);

    }

    handleChange(e){
        this.setState({
            search:e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.search);
    }

    handleClick(e) {
        if (e.target.className === 'header_entrance__btn') {
            this.setState(prevState => ({
                isModalOn: !prevState.isModalOn
            }))
        }else {
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }))
            
            document.body.style.overflow = "auto"
        }
        console.log(document.body.style.overflow);
    }
    updateData = (value) => {
        this.setState({ closeModal: value })
        if (value) {
            document.body.style.overflow = "hidden"
            this.setState(prevState => ({
                isModalOn: !prevState.isModalOn
            }))
        }
    }


    render() {
        return (<>
                    <ModalReg isModal={this.state.isModalOn} close={this.updateData} />
            <div className={`header ${this.state.isModalOn?"fixed":''}`}>
                <div className="wrapper">
                    <div className="header__wrapper">
                        <nav className={`header__nav ${this.state.isToggleOn ? "header__nav_active" : ""}`}>
                            <ul className="header__list">
                                <li className="header__item">
                                    <NavLink to={"/shoppingСenter"} className="header__link" ><div className="header__item__img">
                                        <img src={shoppingСenter} alt="" />
                                    </div>ТОРГОВЫЕ ЦЕНТРЫ</NavLink> 
                                    <div className="submenu">
                                        <ul className="submenu__item">
                                             <li><Link to="/shoppingСenter/dordoiPlaza" className="submenu__link">Дордой плаза </Link></li>
                                            <li><Link to="/shoppingСenter/asia-Moll" className="submenu__link">АЗИЯ-МОЛ</Link></li>
                                            <li><Link  className="submenu__link">АЙ-МОЛ</Link></li>
                                             <li><Link className="submenu__link">БЕТА-СТОРЕС 1</Link></li>
                                            <li><Link  className="submenu__link">БЕТА-СТОРЕС 2</Link></li>
                                            <li><Link className="submenu__link">ДОРДОЙ</Link></li>
                                            <li><Link  className="submenu__link">БЕТА-СТОРЕС 1</Link></li>
                                            {/*
                                            <li><Link href="" className="submenu__link">БЕТА-СТОРЕС 2</Link></li>
                                            <li><Link href="" className="submenu__link">ДОРДОЙ</Link></li>
                                            <li><Link href="" className="submenu__link">ДОРДОЙ</Link></li>
                                            <li><Link href="" className="submenu__link">БЕТА-СТОРЕС 1</Link></li>
                                            <li><Link href="" className="submenu__link">БЕТА-СТОРЕС 2</Link></li>
                                            <li><Link href="" className="submenu__link">ДОРДОЙ</Link></li>  */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="header__item">
                                    <NavLink to={"/shop"} className="header__link" ><div className="header__item__img">
                                        <img src={shop} alt="" />
                                    </div>МАГАЗИНЫ</NavLink> 
                                    <div className="submenu">
                                        <ul className="submenu__item">            
                                            <li><Link to="/shop/?" className="submenu__link">БЕТА-СТОРЕС 2</Link></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 1</a></li>
                                            <li><a href="" className="submenu__link">БЕТА-СТОРЕС 2</a></li>
                                            <li><a href="" className="submenu__link">ДОРДОЙ</a></li> 
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
                            <div className="saerch">
                                <form className="saerch__form" onSubmit={this.handleSubmit}>
                                    <span>КАТАЛОГ:</span>
                                    <Link to={'/catalog'} className="saerch__btn" type="submit" disabled>
                                        <span className="burger__line burger__line_first"></span>
                                        <span className="burger__line burger__line_second"></span>
                                        <span className="burger__line burger__line_third"></span>
                                    </Link>
                                    <div className="search__input__wrrap">
                                        <input className="saerch__input" type="text" placeholder="Я ищу.." onChange={this.handleChange}/>
                                        <button className="search__input__btn" >
                                        </button>
                                    </div>
                                </form>
                            </div>
                    
                </div>
                
            </div>
            {/* <ModalReg isModal={this.state.isModalOn} close={this.updateData} /> */}
        </>
        )
    }
}

export default Header;