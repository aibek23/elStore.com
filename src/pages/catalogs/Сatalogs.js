import React from 'react';
import style from './catalogs.module.css';
import {Route,Link} from 'react-router-dom';
import Children from './children/Children'

class Catalogs extends React.Component {
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
                        <div className={style.conrainer}>
                            <div className={style.shop__card}>
                            <Link to='/catalog/woman'>
                                <p className={style.shop__card__title}>женщинам</p>
                                <img className={style.card__img} src="https://femmie.ru/wp-content/uploads/2018/03/shutterstock_533428837.jpg" alt="" />
                                </Link>
                            </div>
                            <div className={style.shop__card}>
                                <Link to='/catalog/man'>
                                <p className={style.shop__card__title}>мужчинам</p>
                                <img className={style.card__img} src="https://aloha-plus.ru/wp-content/uploads/2018/07/chto-znachit-esli-muzhchina-nikogda-ne-pishet-pervym-no-vsegda-otvechaet-na-vashi-soobshhenija1.jpg" alt="" />
                                </Link>
                            </div>
                            <div className={style.shop__card}>
                                <Link to='/catalog/children'>
                                <p className={style.shop__card__title}>Детям</p>
                                <img className={style.card__img} src="https://fb.ru/misc/i/gallery/115573/3025210.jpg" alt="" />
                                </Link>
                            </div>
                            <div className={style.shop__card}>
                            <Link to='/catalog/shoes'>
                                <p className={style.shop__card__title}>обувь</p>
                                <img className={style.card__img} src="http://andrologmed.ru/wp-content/uploads/5/a/f/5affff894406d24073c675824e08de0d.jpg" alt="" />
                                </Link>
                            </div>
                            <div className={style.shop__card}>
                                <Link to='/catalog/products'>
                                <p className={style.shop__card__title}>продукты</p>
                                <img className={style.card__img} src="https://medknsltant.com/wp-content/uploads/2018/04/produkty-na-diete-maggi.jpg" alt="" />
                                </Link>
                            </div>
                            <div className={style.shop__card}>
                                <Link to='/catalog/furniture'>
                                <p className={style.shop__card__title}>мебель</p>
                                <img className={style.card__img} src="https://stavropol.na-divane.ru/upload/iblock/2a5/c8ce1bf91f6e6e0d88e5b51b22738421.jpg" alt="" />
                                </Link>
                            </div>
                        </div>
                </div>
            </>
        )
    }
}
export default Catalogs