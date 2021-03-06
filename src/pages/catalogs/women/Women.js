import React from 'react';
import style from '../catalogs.module.css';
import Products from '../../products/Products';
import Accordion from '../../../components/accordion/accordion';


class Women extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
            accordionData : [
                {
                    title: 'Футболки и Топы:',
                    content: ["Классические","неформальные","летние","утепленные"]
                },
                {
                title: 'Деловые костюмы:',
                content: ["Классические","неформальные"]
                },
                {title: 'Верхняя одежда:',
                 content: ["куртки","плащи","шубы","дубленки"]
                },
                {title: 'Спортивные товары:',
                 content:["толстовки","костюмы"]
                },
                {title: 'Брюки:',
                 content:["летние","утепленные"]
                },{title: 'Брюки:',
                 content:["летние","утепленные"]
                },
                {title: 'Джинсы и одежда из денима:',
                 content:["летние","утепленные"]
                },
                {title: 'Одежда для дома:',
                 content:["летние","утепленные"]
                },
                {title: 'Брюки:',
                 content:["летние","утепленные"]
                },
                {title: 'Джинсы:',
                 content:["летние","утепленные"]
                },
                {title: 'Нижнее белье:',
                 content:["летние","утепленные"]
                },
                {title: 'Спорт:',
                 content:["летние","утепленные"]
                },
                {title: 'Спорт:',
                 content:["летние","утепленные"]
                },
                {title: 'Джинсы:',
                 content:["летние","утепленные"]
                },
                {title: 'Свитеры и Толстовки:',
                 content:["летние","утепленные","Свитеры","Толстовки"]
                },
                {title: 'Джинсы:',
                 content:["летние","утепленные"]
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
                            {this.state.accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} key={title}/>
                                ))}
                        </li>
                    </ul>
                    
                    <div className={style.contend}>
                    {/* <p style={{padding:"6px 25px",fontSize:'16px',fontWeight:"900",transform: "translateY(-10px)"}}><button style={{padding:"10px 30px",backgroundColor:"red",textTransform: "uppercase" ,color:"white",border:"none"}} onclick={this.handleClick()}>Назад</button> </p> */}
                            <Products params={"women"}/>
                    </div>
                    </div>
            </div>
            </>
        )
    }
}
export default Women