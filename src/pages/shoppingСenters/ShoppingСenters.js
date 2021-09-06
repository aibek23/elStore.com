import React from 'react';
import { Link } from 'react-router-dom';
import style from './shoppingСenters.module.css';


class ShoppingСenters extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({})
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="wrapper">
                        <div className={style.shoppingСenter__container}>
                                <Link to="shoppingСenter/asia-moll" className={style.shoppingСenter}>
                                <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                                <h2> г. Бишкек пр. Чынгыза Айтматова 3</h2>
                                </Link>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                                <h2> г. Бишкек пр. Чынгыза Айтматова 3</h2>
                                </Link>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                                <h2> г. Бишкек пр. Чынгыза Айтматова 3</h2>
                                </Link>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                                <h2> г. Бишкек пр. Чынгыза Айтматова 3</h2>
                                </Link>
                        </div>
                        
                    </div>
                    {/* <div className="wrapper">
                        <div className={style.title}>
                            <img src="" alt="" />
                            <p> г. Бишкек пр. Чынгыза Айтматова 3</p>
                        </div>

                        <div className={style.conrainer}>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="">Азия Мол 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="">Азия Мол 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="">Азия Мол 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://files.oldi.ru/export/0000000031/0627092_02.JPG" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="">Азия Мол 3 эт. Бутик №7</a>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <p href="" className={style.pluse__btn}><img src={pluse_btn} alt="" /></p> */}
            </>
        )
    }
}
export default ShoppingСenters