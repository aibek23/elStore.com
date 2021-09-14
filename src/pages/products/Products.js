import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './products.module.css';
import pluse_btn from '../../img/svg/Btn_plus.svg'
import ProductsCard from './ProductsCard';
import ShopCard from '../shopCard/ShopCard';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            price:true,
            discount:false,
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(e.target.id==='title__btn'){
        this.setState(prevState => ({
            price: !prevState.price
        }))      
        this.setState(prevState => ({
            discount: !prevState.discount
        }))
    }
        if(e.target.className==="pluse__btn"){

        }
}
componentDidMount() {
    fetch('http://localhost:3001/posts')
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                alert('Произошла ошибка. Статус ошибки: '+response.status);
            }
        })
        .then(data => this.setState({
            products:data
        }))
        
}

    render() {
        return (
            <BrowserRouter>
                            <Route path="/shopCard/1"> <ShopCard img={'https://ae01.alicdn.com/kf/HTB1Hwu6Xs_vK1Rjy0Foq6xIxVXao/ZOGAA.jpg'}/></Route> 
                            <Route path="/shopCard/2"> <ShopCard img={'https://38mam.com/files/327/32729250f31ffeac7bbf4982fb91713b.jpg'}/></Route> 
                            <Route path="/shopCard/3"> <ShopCard img={'https://cdn1.ozone.ru/s3/multimedia-z/6021207923.jpg'}/></Route> 
                            <Route path="/shopCard/4"> <ShopCard img={'https://ae01.alicdn.com/kf/HTB1YhJdTCzqK1RjSZFLq6An2XXaJ/-.jpg_q50.jpg'}/></Route> 
                            <Route path="/shopCard/5"> <ShopCard img={'https://cdn1.ozone.ru/multimedia/1027775613.jpg'}/></Route> 
                            <Route path="/shopCard/6"> <ShopCard img={'https://ae01.alicdn.com/kf/HTB1JQKsG25TBuNjSspcq6znGFXag.jpg'}/></Route> 
                            <Route path="/shopCard/7"> <ShopCard img={'https://ae01.alicdn.com/kf/H043563e40eee430aba79b3dd6f3b17643/1-USB-5Pin-USB.jpg'}/></Route> 
                            <Route path="/shopCard/9"> <ShopCard img={'https://ae01.alicdn.com/kf/HTB1HcEGRFXXXXcPXXXXq6xXFXXX9/Covrlge.jpg'}/></Route>
            <Route exact path={`${this.props.params?"/catalog/children":"/"}`}>
                <div className="main">
                    <div className="wrapper">
                        <div className="title" >
                            <p  style={{fontSize:'28px',fontWeight:"bold"}}>сортировать: 
                            <button className={`title__btn ${this.state.price?'active':''}`} id="title__btn"
                            style={{fontSize:'25px',fontWeight:"700"}} onClick={this.handleClick}>
                                по цене:</button>
                            <button className={`title__btn ${this.state.discount?'active':''}`}  id="title__btn"
                            style={{fontSize:'25px',fontWeight:"700"}} onClick={this.handleClick}>
                                по скидке:</button> </p>
                        </div>
                        <div className={this.props.props===3 ? style.grid__3 : style.conrainer}>
                            {    
                                this.state.products.map(item => <ProductsCard data={item} key={item.id}/>)
                            }
                        </div>
                        <p className={style.pluse__btn} onClick={this.handleClick}><img src={pluse_btn} className="pluse__btn" alt="" /></p>
                    </div>
                </div>
                </Route>
            </BrowserRouter>
        )
    }
}
export default Products