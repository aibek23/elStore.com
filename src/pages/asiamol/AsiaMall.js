import React from 'react';
import style from '../shoppingСenters/shoppingСenters.module.css'
import pluse_btn from '../../img/svg/Btn_plus.svg'
import share from '../../img/svg/share.svg';


class AsiaMall extends React.Component{
    render(){
        return (<><div className="main">
                                  <div className="wrapper">
                        <div className={style.title}>
                        <img src="https://www.elimbar.kg/uploads/images/qLW2GgbCpBHkx9J8iuPpc6FmwqYhqcMA.jpg" alt="" />
                            <p> г. Бишкек пр. Чынгыза Айтматова 3</p>
                        </div>

                        <div className={style.conrainer}>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="//">Азия Мол 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="//">Азия Мол 3 эт. Бутик №18</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://mgorod.kz/wp-content/uploads/2016/04/5-DIVERSE.jpg" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="//">Азия Мол 1 эт. Бутик №11</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} src="https://files.oldi.ru/export/0000000031/0627092_02.JPG" alt="" />
                                <p className="description" style={{opacity:".4",marginBottom:"30px"}}>Penti / Магазин нижнего белья</p>                               
                                <a href="//">Азия Мол 2 эт. Бутик №28</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <p href="" className={style.pluse__btn}><img src={pluse_btn} alt="" /></p> 
                </>
        );
    }
}



export default AsiaMall;
