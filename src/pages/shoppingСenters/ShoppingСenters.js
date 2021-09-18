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
                            <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Дордой плаза </h2>
                                <Link to="shoppingСenter/asia-moll" className={style.shoppingСenter}>
                                <img src="https://data.kaktus.media/image/big/2018-09-28_15-58-55_305363.jpg" alt="" />
                                <h2> г. Бишкек , ул. Ибраимова, 115А 
                                </h2>
                                </Link>
                            </div>
                            <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>АЗИЯ-МОЛ </h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                                <h2> г. Бишкек пр. Чынгыза Айтматова 3</h2>
                                </Link>
                             </div>
                             <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Ай-мол</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{borderRadius:"10px"}} src="http://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEFSDnj0n9RlA9QoGTFPJ0DHHPGX5KoQ3UhRdw2fh3odcI" alt="" />
                                <h2 style={{marginLeft:"15px"}}> г. Бишкек , ул. Шевченко 80</h2>
                                </Link>
                                </div>
                                <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>БЕТА-СТОРЕС 1</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://im0-tub-ru.yandex.net/i?id=fbd1073aafe55b4c89d55d27d62ca188-sr&n=13" alt="" />
                                <h2> г. Бишкек пр. Чуйский, 150А</h2>
                                </Link>
                            </div>
                            <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>БЕТА-СТОРЕС 2</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://im0-tub-ru.yandex.net/i?id=fbd1073aafe55b4c89d55d27d62ca188-sr&n=13" alt="" />
                                <h2> г. Бишкек , ул. Юнусалиева, 177/2</h2>
                                </Link>
                                </div>
                                <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>БЕТА-СТОРЕС 2</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{width:"120px"}} src="https://img5.lalafo.com/i/posters/api/40/e1/18/7f29dbda21abde9516f01aea21.jpeg" alt="" />
                                <h2> г. Бишкек ,Кожевенная ул., 74/4,</h2>
                                </Link>
                                </div>
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