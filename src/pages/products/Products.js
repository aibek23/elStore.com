import React from 'react';
import share from '../../img/svg/share.svg';
import style from './products.module.css';
import pluse_btn from '../../img/svg/Btn_plus.svg'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            price:true,
            discount:false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){

        this.setState(prevState => ({
            price: !prevState.price
        }))
        
        this.setState(prevState => ({
            discount: !prevState.discount
        }))
    }

    render() {
        return (
            <>
                <div className="main">
                    <div className="wrapper">
                        <div className="title">
                            <p  style={{fontSize:'28px',fontWeight:"bold"}}>сортировать: <button className={`title__btn ${this.state.price?'active':''}`} style={{fontSize:'25px',fontWeight:"700"}} onClick={this.handleClick}>по цене:</button> <button className={`title__btn ${this.state.discount?'active':''}`} style={{fontSize:'25px',fontWeight:"700"}} onClick={this.handleClick}>по скидке:</button> </p></div>
                        <div className={this.props.props==3 ? style.grid__3 : style.conrainer}>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} 
                                src="https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg" alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>5000 <del>6990</del></span><b style={{color:"red",fontSize:"24px"}} >-20%</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>D&G / Cережки</p>                               
                                <a href="">ЦУМ 3 эт. Бутик №7 ${this.props.props==3 ? '.grid__3' : 'ss'}</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} 
                                src="https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg" alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>5000 <del>6990</del></span><b style={{color:"red",fontSize:"24px"}} >-20%</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>D&G / Cережки</p>                               
                                <a href="">ЦУМ 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} 
                                src="https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg" alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>5000 <del>6990</del></span><b style={{color:"red",fontSize:"24px"}} >-20%</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>D&G / Cережки</p>                               
                                <a href="">ЦУМ 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} 
                                src="https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg" alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>5000 <del>6990</del></span><b style={{color:"red",fontSize:"24px"}} >-20%</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>D&G / Cережки</p>                               
                                <a href="">ЦУМ 3 эт. Бутик №7</a>
                            </div>
                            <div className={style.shop__card}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img} 
                                src="https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg" alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>5000 <del>6990</del></span><b style={{color:"red",fontSize:"24px"}} >-20%</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>D&G / Cережки</p>                               
                                <a href="">ЦУМ 3 эт. Бутик №7</a>
                            </div>
                        </div>
                        <p className={style.pluse__btn}><img src={pluse_btn} alt="" /></p>
                    </div>
                </div>
            </>
        )
    }
}
export default Products