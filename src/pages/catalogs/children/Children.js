import React from 'react';
import { Route } from 'react-router';
import ShopCard from '../../shopCard/ShopCard';
import style from '../catalogs.module.css';
import Products from '../../products/Products';
import Accordion from '../../../components/accordion/accordion';


class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
            accordionData : [
                {
                    title: 'Деловые костюмы:',
                    content: ["Классические","неформальные"],
                    id:1
                    },
                    {title: 'Верхняя одежда:',
                     content: ["куртки","плащи","шубы","дубленки"],
                     id:2
                    },
                    {title: 'Спортивные товары:',
                     content:["толстовки","костюмы"],
                     id:3
                    },
                    {title: 'Джинсы и одежда из денима:',
                     content:["летние","утепленные"],
                     id:4
                    },
                    {title: 'Одежда для дома:',
                     content:["летние","утепленные"],
                     id:5
                    },
                    {title: 'Брюки:',
                     content:["летние","утепленные"],
                     id:6
                    },                
            ]
        }        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        // this.setState({menu: true})         
        // console.log(e.target.style);
    }
    render() {

        return (
            <>
            <div className={style.filter}>
                <div className={style.filter__wrap}>
                    <ul style={{backgroundColor:"#e8e8e8"}}>
                        <p style={{backgroundColor:"#6699ff",padding:"16px 25px",fontSize:'18px',fontWeight:"900",transform: "translateY(-10px)"}}>КАТАЛОГ:</p>
                        <li className={`${style.filter__menu} ${this.state.menu?style._active:''}`} onClick={this.handleClick}>
                            {this.state.accordionData.map(({ title, content ,id}) => (
                                <Accordion title={title} content={content} key={id+title}/>
                                ))}
                        </li>
                    </ul>                    
                    <div className={style.contend}>
                    {/* <p style={{padding:"6px 25px",fontSize:'16px',fontWeight:"900",transform: "translateY(-10px)"}}><button style={{padding:"10px 30px",backgroundColor:"red",textTransform: "uppercase" ,color:"white",border:"none"}} onclick={this.handleClick()}>Назад</button> </p> */}
                            <Route exact path="/catalog/children/"><Products params={'children'}/></Route>
                            <Route exact path="/catalog/children/:id" render={(props) => (<ShopCard {...props} close={true}/>)}/>
                    </div>
                    </div>
            </div>

            </>
        )
    }
}
export default Children