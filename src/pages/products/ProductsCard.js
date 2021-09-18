import React from 'react';
import { Link } from 'react-router-dom';
import share from '../../img/svg/share.svg';
import style from './products.module.css';


class ProductsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
    }
    componentDidMount(){
        switch (this.props.params) {
            case 'Children' :
              break;
            case 'man':
              break;
            case 'women':
              break;
            case 'shoes':
              break;
            case 'product':
              break;
            case 'furniture':
              break;              
             default:
               break;
           }
    }


    render() {
        return (
            <>
                            <div className={style.shop__card} >
                            <Link to={`/${this.props.params?"catalog/"+this.props.params+"/":"product/"}${this.props.data.id}`}>
                                <div className={style.shop__card__svg}><img src={share} alt="" /></div>
                                <img className={style.boutique__img}
                                src={this.props.data.img} alt="" />
                                <p className="price" style={{display:"flex",justifyContent: "space-between",marginBottom:"18px",alignItems: "center"}}> <span style={{opacity:".6"}}>{this.props.data.price1}<del>{this.props.data.price2}</del></span><b style={{color:"red",fontSize:"24px"}} >{this.props.data.discount}</b></p>
                                <p className="description" style={{marginBottom:"18px",opacity:".4"}}>{this.props.data.nameShop}</p></Link>
                            </div>                          
            </>
        )
    }
}
export default ProductsCard