import React from 'react';
import { Link } from 'react-router-dom';
import style from '../furniture/furniture.module.css';


class Shop extends React.Component {
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
                            <h2 className={style.shoppingСenter__title}>ГРАНД СТИЛЬ КОМФОРТ</h2>
                                <Link to="shoppingСenter/asia-moll" className={style.shoppingСenter}>
                                <img style={{borderRadius:"10px"}} src="https://ams2-cdn.2gis.com/previews/1028654234775584943/3Q4WWBb3gL0ivJUn9rUrBmUXAoAZp2V/1/image_112x112.png?api-version=2.0" alt="" />
                                <h2 style={{marginLeft:"15px"}}> г. Бишкек , Кулатова, 3а/3
                                </h2>
                                </Link>
                            </div>
                            <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Turatbekoff</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{padding:"10px",height:"100%",width :"100px"}} src="https://ams2-cdn.2gis.com/previews/1119883638582804480/c6a4aef1-4749-4c12-baf3-20e25ec307e6/1/image_112x112.png?api-version=2.0" alt="" />
                                <h2> г. Бишкек ул. Льва Толстого, 36к</h2>
                                </Link>
                             </div>
                             <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Evita</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{borderRadius:"10px"}} src="https://ams2-cdn.2gis.com/previews/1119744790133473283/b5f9fff7-57d9-4498-8824-4584fcbe3d60/11/image_112x112.png?api-version=2.0" alt="" />
                                <h2 style={{marginLeft:"15px"}}> г. Бишкек , ул. Шевченко 80</h2>
                                </Link>
                                </div>
                                <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Micasa</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{padding:"10px"}}src="https://ams2-cdn.2gis.com/previews/1047269401583157357/b7BGttHMa4eTlMvHqYdDkC9Havr26Uq/1/image_112x112.png?api-version=2.0" alt="" />
                                <h2> г. Бишкек пр. Чуйский, 150А</h2>
                                </Link>
                            </div>
                            <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>NOVAMEBEL</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img src="https://ams2-cdn.2gis.com/previews/1058066887021166592/615b9bbb-b71c-402d-bbba-e1697b91db11/1/image_112x112.png?api-version=2.0" alt="" />
                                <h2> г. Бишкек , ул. Юнусалиева, 177/2</h2>
                                </Link>
                                </div>
                                <div className={style.shoppingСenter__box}>
                            <h2 className={style.shoppingСenter__title}>Азбука Дома</h2>
                                <Link to="shoppingСenter" className={style.shoppingСenter}>
                                <img style={{width:"120px"}} src="https://ams2-cdn.2gis.com/previews/1071256628625408000/e78b7101-c5a4-46be-bc5b-879cc075e50a/1/image_112x112.png?api-version=2.0" alt="" />
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
export default Shop