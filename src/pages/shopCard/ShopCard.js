import React from 'react';
import style from './shopCard.module.css'
import share from '../../img/svg/share.svg';


class ShopCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postData:[]
        };
    };
    componentWillMount(){
        console.log(9);

    }
    componentDidMount(){
        console.log(8);
        const url ='http://localhost:3001/posts/'+this.props.match.params.id;
        fetch(url)
            .then(response=>{
                if(response.ok){
                    return response.json();
                } else{
                    alert('Ошибочка:  Статус'+ response.status)
                }
            })
             .then(data=>this.setState({postData:data}))
      }
    render(){
        return (
                <>
                    <div className="main">
                        <div className="wrapper">
                            <div className={this.props.title?style.title:style.none}>
                            <img src={this.state.postData.img} alt="" />
                                <p> г. Бишкек пр. Чынгыза Айтматова 3</p>
                            </div>

                            <div className={style.conrainer}>
                                <div className={style.shop__card}>
                                    <div className={style.shop__card__img}>
                                        <div className={style.contend__img} >
                                            <img src={this.state.postData.img} alt="" />
                                            <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                        </div>
                                        <p className={style.description__time}>До конца акции осталось: <span  style={{backgroundColor:"red",color:'white'}}>10д.12ч.</span></p> 
                                    </div>                              
                                </div> 
                                <div className={style.shop__card}>
                                    <p className={style.contend__title}>Комплект нижнего белья от LISE CHARMEL</p>
                                    <p className={style.contend__price}><span> 2000 сом</span><span><s> 2890 сом</s></span><span style={{backgroundColor:"red",color:'white'}}>-20%</span></p>
                                    <p className={style.contend__location}>Азия Мол 3 эт. Бутик №7</p>
                                    <p className={style.contend__description}>Брэнд: <span style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>NASHA</span></p>
                                    <p className={style.contend__description}>Сезон: <span style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>Лето</span></p>
                                    <p className={style.contend__description}>Состав: <span style={{fontSize:"24px",color:"black",fontWeight:"bold"}}>Полиэстр 40% </span></p>
                                    <p >
                                       <span className={style.description}> Описание товара:</span><br/>
                                        Свойства полиэстра:
                                        сверхноский;
                                        устойчив к световому воздействию;
                                        устойчив к действию органических и минеральных кислот;
                                        не мнется;
                                        легко стирается;
                                        не садится;
                                        впитывая влагу, быстро высыхает.
                                    </p>                               
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }



export default ShopCard;
