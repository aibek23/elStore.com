import React from 'react';
// import {  Route } from 'react-router-dom';
import style from './products.module.css';
import pluse_btn from '../../img/svg/Btn_plus.svg'
import ProductsCard from './ProductsCard';
// import ShopCard from '../shopCard/ShopCard';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            price:true,
            discount:false,
            limit:8
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
            this.setState(prevState => ({
                limit: 2*prevState.limit
            }))            
        }
}
componentDidMount() {
    fetch(`http://localhost:3001/posts?_limit=${this.state.limit}`)
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
componentDidUpdate(prevProps) {
    if(prevProps.limit !== this.state.limit) {
    

        fetch(`http://localhost:3001/posts?_limit=${this.state.limit}`)
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
}
    render() {
        return (
<>
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
                        <div className={this.props.params? style.grid__3 : style.conrainer}>
                            {    
                                this.state.products.map(item => <ProductsCard data={item} key={item.id} params={this.props.params}  />)
                            }
                        </div>

                        <p className={style.pluse__btn} onClick={this.handleClick}><img src={pluse_btn} className="pluse__btn" alt="" /></p>
                    </div>
                </div>

</>
        )
    }
}
export default Products